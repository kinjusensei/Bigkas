"""
audit_fer_dataset.py — check a Bigkas FER dataset before training.
===========================================================================
Run this BEFORE train_fer_v2.py. It only reads files; it changes nothing.

  python audit_fer_dataset.py --data-dir fer_dataset
  (Colab: !/content/mm/bin/python audit_fer_dataset.py --data-dir fer_dataset)

Checks
  1. participants.csv   columns, blank or duplicate IDs, eyelid values
  2. IDs vs folders     every CSV ID has a folder and every folder has a
                        CSV row, with "did you mean …?" for near-misses
                        (P1 vs P01, p01 vs P01, trailing spaces)
  3. Class folders      the four expected names; flags typos like
                        "confuse" or "Engaged" whose photos would be ignored
  4. Split feasibility  the exact train/val/test participant counts that
                        train_fer_v2.py will make (same rules), per group
  5. Images             every file opens and decodes fully; flags non-image
                        files, tiny images and exact duplicates, especially
                        the same photo under two participants, which would
                        leak between train and test

Exit code 0 = ready to train (warnings allowed), 1 = fix the errors first.
Needs: pillow (pandas not required).
===========================================================================
"""

from __future__ import annotations

import argparse
import csv
import difflib
import hashlib
import sys
from collections import Counter, defaultdict
from pathlib import Path

from PIL import Image, UnidentifiedImageError

CLASSES = ["confused", "engaged", "frustrated", "neutral"]
EYELID_GROUPS = ["monolid", "non_monolid"]
IMAGE_EXTS = {".jpg", ".jpeg", ".png"}
MIN_SIDE = 64          # smaller than this is almost certainly a bad capture
MIN_PER_CLASS = 5      # per participant, per state: below this, warn

errors: list[str] = []
# IDs whose CSV row was rejected (reported once, not again as a stray folder).
rejected_ids: set[str] = set()
warnings: list[str] = []


def err(msg: str) -> None:
    errors.append(msg)


def warn(msg: str) -> None:
    warnings.append(msg)


def suggest(name: str, options) -> str:
    match = difflib.get_close_matches(name, list(options), n=1, cutoff=0.6)
    return f' (did you mean "{match[0]}"?)' if match else ""


# ── 1. participants.csv ───────────────────────────────────────────────────

def read_participants(data_dir: Path) -> dict[str, str]:
    path = data_dir / "participants.csv"
    if not path.exists():
        err(f"Missing {path}. Columns: participant_id,eyelid")
        return {}
    with path.open(newline="", encoding="utf-8-sig") as f:  # -sig strips Excel's BOM
        reader = csv.DictReader(f)
        cols = [c.strip() for c in (reader.fieldnames or [])]
        if cols != ["participant_id", "eyelid"]:
            err(f"participants.csv header is {cols}; it must be exactly participant_id,eyelid")
            return {}
        out: dict[str, str] = {}
        for line_no, row in enumerate(reader, start=2):
            raw_pid, raw_lid = row.get("participant_id") or "", row.get("eyelid") or ""
            pid, lid = raw_pid.strip(), raw_lid.strip()
            if not pid and not lid:
                continue  # blank line
            if not pid:
                err(f"participants.csv line {line_no}: empty participant_id")
                continue
            if raw_pid != pid or raw_lid != lid:
                warn(f'participants.csv line {line_no}: extra spaces around "{pid}" / "{lid}" '
                     "(the training script strips them, but fix them anyway)")
            if lid not in EYELID_GROUPS:
                hint = ' — use "monolid" or "non_monolid" (lowercase, underscore)'
                err(f'participants.csv line {line_no}: eyelid "{lid}" for {pid} is invalid{hint}')
                rejected_ids.add(pid)
                continue
            if pid in out:
                err(f"participants.csv line {line_no}: duplicate participant_id {pid}")
                continue
            out[pid] = lid
    if not out:
        err("participants.csv has no valid rows")
    return out


# ── 2–3. Folders ──────────────────────────────────────────────────────────

def check_folders(data_dir: Path, eyelid_of: dict[str, str]) -> dict[str, dict[str, list[Path]]]:
    folders = {p.name: p for p in data_dir.iterdir() if p.is_dir() and not p.name.startswith(".")}
    ignored = {"__pycache__", "fer_v2_output"}
    folders = {k: v for k, v in folders.items() if k not in ignored}

    for pid in sorted(set(eyelid_of) - set(folders)):
        err(f"{pid} is in participants.csv but has no folder{suggest(pid, folders)}")
    for name in sorted(set(folders) - set(eyelid_of) - rejected_ids):
        err(f'Folder "{name}" is not in participants.csv{suggest(name, eyelid_of)} '
            "— its photos would be skipped")

    files: dict[str, dict[str, list[Path]]] = {}
    for pid in sorted(set(folders) & set(eyelid_of)):
        files[pid] = {}
        sub = {p.name: p for p in folders[pid].iterdir() if p.is_dir()}
        for name in sorted(set(sub) - set(CLASSES)):
            err(f'{pid}/{name}/ is not a state folder{suggest(name.lower(), CLASSES)} '
                "— its photos would be ignored")
        loose = [p.name for p in folders[pid].iterdir() if p.is_file()]
        if loose:
            warn(f"{pid}/ has {len(loose)} file(s) outside the state folders (ignored), e.g. {loose[0]}")
        for c in CLASSES:
            if c not in sub:
                warn(f"{pid} has no {c}/ folder")
                files[pid][c] = []
                continue
            files[pid][c] = sorted(p for p in sub[c].iterdir() if p.is_file())
    return files


# ── 4. Split feasibility (same rules as train_fer_v2.py) ──────────────────

def split_counts(n: int, test_frac: float, val_frac: float) -> tuple[int, int, int]:
    n_test = max(1, round(n * test_frac)) if n >= 3 else 0
    n_val = max(1, round(n * val_frac)) if n - n_test >= 3 else 0
    return n - n_test - n_val, n_val, n_test


def check_split(eyelid_of: dict[str, str], usable: set[str], test_frac: float, val_frac: float) -> list[str]:
    lines = []
    total_val = 0
    for g in EYELID_GROUPS:
        n = sum(1 for pid in usable if eyelid_of[pid] == g)
        tr, va, te = split_counts(n, test_frac, val_frac)
        total_val += va
        lines.append(f"   {g:12} {n:3} people → train {tr}, val {va}, test {te}")
        if n < 3:
            err(f"{g}: {n} usable participant(s); need at least 3 so one can be held out for testing")
        elif va == 0:
            warn(f"{g}: {n} participants gives no validation participant for this group "
                 f"(needs {3 + max(1, round(n * test_frac))}+). Training still runs if the other group has one.")
        if te == 1:
            warn(f"{g}: only 1 test participant — that group's test accuracy is one person's result")
    if total_val == 0:
        err("No validation participants in either group; train_fer_v2.py will stop. Add participants.")
    return lines


# ── 5. Images ─────────────────────────────────────────────────────────────

def check_images(files: dict[str, dict[str, list[Path]]], eyelid_of: dict[str, str]):
    counts: dict[str, Counter] = defaultdict(Counter)
    owners: dict[str, set[tuple[str, str]]] = defaultdict(set)  # hash → {(pid, path)}
    bad = 0
    for pid, by_class in files.items():
        for c, paths in by_class.items():
            for p in paths:
                rel = f"{pid}/{c}/{p.name}"
                if p.suffix.lower() not in IMAGE_EXTS:
                    warn(f"{rel}: not .jpg/.jpeg/.png (ignored by training)")
                    continue
                try:
                    data = p.read_bytes()
                    with Image.open(p) as im:
                        im.verify()                 # structure check
                    with Image.open(p) as im:
                        im.load()                   # full decode (catches truncation)
                        w, h = im.size
                        mode = im.mode
                except (UnidentifiedImageError, OSError, SyntaxError, ValueError) as e:
                    err(f"{rel}: corrupt or unreadable ({type(e).__name__}: {e})")
                    bad += 1
                    continue
                if min(w, h) < MIN_SIDE:
                    warn(f"{rel}: very small ({w}×{h})")
                if mode not in ("RGB", "L", "RGBA", "P"):
                    warn(f"{rel}: unusual colour mode {mode}")
                if p.suffix.lower() in (".jpg", ".jpeg") and not data[:3] == b"\xff\xd8\xff":
                    warn(f"{rel}: named .jpg but isn't a JPEG (decodes, but rename it)")
                owners[hashlib.md5(data).hexdigest()].add((pid, rel))
                counts[pid][c] += 1

    # Duplicates
    cross, within = 0, 0
    for h, items in owners.items():
        pids = {pid for pid, _ in items}
        if len(pids) > 1:
            cross += 1
            if cross <= 5:
                err("Same photo under different participants (leaks between train and test): "
                    + ", ".join(sorted(r for _, r in items)))
        elif len(items) > 1:
            within += 1
    if cross > 5:
        err(f"... and {cross - 5} more photos shared between participants")
    if within:
        warn(f"{within} exact duplicate photo(s) within the same participant (harmless, but wasted)")
    return counts, bad


# ── Main ──────────────────────────────────────────────────────────────────

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--data-dir", default="./fer_dataset")
    ap.add_argument("--test-frac", type=float, default=0.2)
    ap.add_argument("--val-frac", type=float, default=0.15)
    args = ap.parse_args()
    data_dir = Path(args.data_dir)
    print("=" * 66 + f"\n  Bigkas FER dataset audit — {data_dir}\n" + "=" * 66)
    if not data_dir.is_dir():
        print(f"❌ {data_dir} is not a folder")
        return 1

    eyelid_of = read_participants(data_dir)
    files = check_folders(data_dir, eyelid_of) if eyelid_of else {}
    counts, bad = check_images(files, eyelid_of)

    usable = {pid for pid in files if sum(counts[pid].values()) > 0}
    for pid in sorted(set(files) - usable):
        err(f"{pid}: no readable photos")

    # Per-participant table
    print("\n📋 Participants")
    print(f"   {'ID':8} {'eyelid':12} " + " ".join(f"{c[:10]:>10}" for c in CLASSES) + "   total")
    for pid in sorted(files):
        row = counts[pid]
        print(f"   {pid:8} {eyelid_of.get(pid, '?'):12} "
              + " ".join(f"{row[c]:>10}" for c in CLASSES) + f"   {sum(row.values()):5}")
        for c in CLASSES:
            if 0 < row[c] < MIN_PER_CLASS:
                warn(f"{pid}: only {row[c]} {c} photo(s) (aim for 10+)")
            elif row[c] == 0 and pid in usable:
                warn(f"{pid}: no {c} photos")

    print("\n📊 Totals per group")
    for g in EYELID_GROUPS:
        tot = Counter()
        for pid in usable:
            if eyelid_of[pid] == g:
                tot.update(counts[pid])
        print(f"   {g:12} " + "  ".join(f"{c} {tot[c]}" for c in CLASSES) + f"  (all {sum(tot.values())})")
        for c in CLASSES:
            if usable and tot[c] == 0:
                err(f"{g}: no {c} photos at all — the model can't learn {c} for this group")

    print("\n✂️  Split that train_fer_v2.py will make (by participant)")
    for line in check_split(eyelid_of, usable, args.test_frac, args.val_frac):
        print(line)

    print(f"\n🖼️  Images checked: {sum(sum(c.values()) for c in counts.values())} readable, {bad} corrupt")

    if warnings:
        print(f"\n⚠️  {len(warnings)} warning(s)")
        for w in warnings[:40]:
            print("   •", w)
        if len(warnings) > 40:
            print(f"   … and {len(warnings) - 40} more")
    if errors:
        print(f"\n❌ {len(errors)} error(s) — fix these before training")
        for e in errors[:40]:
            print("   •", e)
        if len(errors) > 40:
            print(f"   … and {len(errors) - 40} more")
        return 1
    print("\n✅ Dataset is ready for train_fer_v2.py")
    return 0


if __name__ == "__main__":
    sys.exit(main())
