"""
train_fer_v2.py — Bigkas FER training, built to generalize to new people.
===========================================================================
Fine-tunes MobileNetV2 (ImageNet) for 4 learning states:
    confused, engaged, frustrated, neutral   (alphabetical = model output order)

What v1 got wrong, and what this script does about it
-----------------------------------------------------
v1 trained on 941 photos of essentially one person from one session, and
split photos at random, so near-identical frames landed in both train and
test. Test accuracy (99%) measured memory of that person, not expression.

  1. Subject-independent split    A participant's photos are ALL in train,
                                  or ALL in validation, or ALL in test.
                                  Test accuracy = accuracy on unseen people.
  2. Targeted augmentation        Brightness, contrast, small rotation, mild
                                  zoom, horizontal flip. No blur, no heavy
                                  crops, no shear: those erase or move the
                                  eye/brow detail that confused/frustrated
                                  depend on.
  3. Balanced sample weights      Every (state × eyelid group) cell counts
                                  equally, and no single participant can
                                  dominate the loss.
  4. Two-phase fine-tuning        Phase 1: frozen base, train the head
                                  (Dropout 0.4 + L2). Phase 2: unfreeze the
                                  top 30 base layers at lr 1e-5, BatchNorm
                                  kept in inference mode.
  5. Subgroup report              Confusion matrix and per-class accuracy for
                                  monolid vs non-monolid participants, the
                                  gap between them, and per-participant
                                  accuracy.

App compatibility (do not change without changing the app)
----------------------------------------------------------
  * Input: float32 [1, 224, 224, 3], RGB scaled to 0–1. The model rescales
    to MobileNetV2's -1..1 internally, so the app's pixelsToFloatRgb()
    keeps working unchanged.
  * Output: float32 [1, 4] softmax in alphabetical class order, which
    matches FER_MODEL_CLASSES in utils/fer.ts.
  * Images are used exactly as the app captures them (centre square,
    224×224). Don't add face cropping here unless the app crops too.

Data layout
-----------
  DATA_DIR/
    participants.csv            participant_id,eyelid
                                P01,monolid
                                P02,non_monolid
    P01/
      confused/*.jpg
      engaged/*.jpg
      frustrated/*.jpg
      neutral/*.jpg
    P02/
      ...

  * eyelid must be "monolid" or "non_monolid". Record it only with the
    participant's consent; it is used for the fairness report, never
    shipped in the app.
  * Aim for 10+ participants per eyelid group, several short sessions each,
    different lighting and distances. A test set needs at least 2
    participants per group for the subgroup report to mean anything.

Run (Google Colab, after the Python 3.11 setup cells)
-----------------------------------------------------
  !MPLBACKEND=Agg /content/mm/bin/python train_fer_v2.py --data-dir fer_dataset

  Needs: tensorflow (2.15+), numpy<2 for TF 2.15, pandas, scikit-learn,
  matplotlib, pillow. Outputs go to --out-dir (default ./fer_v2_output).
===========================================================================
"""

from __future__ import annotations

import argparse
import json
import os
import random
from collections import Counter, defaultdict
from datetime import datetime
from pathlib import Path

import numpy as np
import pandas as pd
import tensorflow as tf

CLASSES = ["confused", "engaged", "frustrated", "neutral"]  # alphabetical
EYELID_GROUPS = ["monolid", "non_monolid"]
IMG_SIZE = 224
IMAGE_EXTS = {".jpg", ".jpeg", ".png"}


# ── Arguments ─────────────────────────────────────────────────────────────

def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Bigkas FER v2 training")
    p.add_argument("--data-dir", default="./fer_dataset")
    p.add_argument("--out-dir", default="./fer_v2_output")
    p.add_argument("--seed", type=int, default=42)
    p.add_argument("--test-frac", type=float, default=0.2,
                   help="share of participants (per eyelid group) held out for test")
    p.add_argument("--val-frac", type=float, default=0.15,
                   help="share of participants (per eyelid group) for validation")
    p.add_argument("--batch-size", type=int, default=32)
    p.add_argument("--epochs-head", type=int, default=15)
    p.add_argument("--epochs-finetune", type=int, default=25)
    p.add_argument("--lr-head", type=float, default=1e-3)
    p.add_argument("--lr-finetune", type=float, default=1e-5)
    p.add_argument("--unfreeze", type=int, default=30,
                   help="number of top MobileNetV2 layers to unfreeze in phase 2")
    p.add_argument("--dropout", type=float, default=0.4)
    p.add_argument("--l2", type=float, default=1e-4)
    p.add_argument("--patience", type=int, default=5)
    p.add_argument("--no-pretrained", action="store_true",
                   help="random init instead of ImageNet (for offline smoke tests only)")
    return p.parse_args()


def set_seed(seed: int) -> None:
    random.seed(seed)
    np.random.seed(seed)
    tf.random.set_seed(seed)


# ── 1. Load the index of images ───────────────────────────────────────────

def load_index(data_dir: Path) -> pd.DataFrame:
    """One row per image: path, participant_id, label, eyelid."""
    meta_path = data_dir / "participants.csv"
    if not meta_path.exists():
        raise SystemExit(f"Missing {meta_path} (columns: participant_id,eyelid)")
    meta = pd.read_csv(meta_path, dtype=str).apply(lambda c: c.str.strip())
    bad = set(meta["eyelid"]) - set(EYELID_GROUPS)
    if bad:
        raise SystemExit(f"participants.csv: eyelid must be one of {EYELID_GROUPS}, got {bad}")
    eyelid_of = dict(zip(meta["participant_id"], meta["eyelid"]))

    rows = []
    for pid_dir in sorted(p for p in data_dir.iterdir() if p.is_dir()):
        pid = pid_dir.name
        if pid not in eyelid_of:
            print(f"  ⚠️  {pid}: not in participants.csv, skipped")
            continue
        for label in CLASSES:
            label_dir = pid_dir / label
            if not label_dir.is_dir():
                continue
            for f in sorted(label_dir.iterdir()):
                if f.suffix.lower() in IMAGE_EXTS:
                    rows.append((str(f), pid, label, eyelid_of[pid]))

    df = pd.DataFrame(rows, columns=["path", "participant_id", "label", "eyelid"])
    if df.empty:
        raise SystemExit(f"No images found under {data_dir}/<participant>/<label>/")
    df["y"] = df["label"].map(CLASSES.index)
    return df


# ── 2. Subject-independent split ──────────────────────────────────────────

def split_by_participant(df: pd.DataFrame, test_frac: float, val_frac: float,
                         seed: int) -> pd.DataFrame:
    """Assigns whole participants to train/val/test, separately within each
    eyelid group, so both groups appear in every split when possible."""
    rng = random.Random(seed)
    split_of: dict[str, str] = {}
    for group in EYELID_GROUPS:
        pids = sorted(df.loc[df.eyelid == group, "participant_id"].unique())
        rng.shuffle(pids)
        n = len(pids)
        if n == 0:
            print(f"  ⚠️  no {group} participants: the subgroup report can't compare groups")
            continue
        # At least one test participant per group when there are 3+;
        # otherwise everything trains and the group is missing from test.
        n_test = max(1, round(n * test_frac)) if n >= 3 else 0
        n_val = max(1, round(n * val_frac)) if n - n_test >= 3 else 0
        for i, pid in enumerate(pids):
            split_of[pid] = "test" if i < n_test else "val" if i < n_test + n_val else "train"
        if n < 3:
            print(f"  ⚠️  only {n} {group} participant(s): all used for training, none tested")

    df = df.copy()
    df["split"] = df["participant_id"].map(split_of)

    # Leakage check: no participant in more than one split.
    per_pid = df.groupby("participant_id")["split"].nunique()
    assert (per_pid == 1).all(), "a participant landed in two splits"

    missing = set(CLASSES) - set(df.loc[df.split == "train", "label"])
    if missing:
        raise SystemExit(f"Training set has no images for {sorted(missing)}")
    return df


def describe_split(df: pd.DataFrame) -> dict:
    out = {}
    for split in ["train", "val", "test"]:
        part = df[df.split == split]
        out[split] = {
            "images": int(len(part)),
            "participants": {g: sorted(part.loc[part.eyelid == g, "participant_id"].unique().tolist())
                             for g in EYELID_GROUPS},
            "per_class": {c: int((part.label == c).sum()) for c in CLASSES},
        }
    return out


# ── 3. Balanced sample weights ────────────────────────────────────────────

def sample_weights(part: pd.DataFrame) -> np.ndarray:
    """w = cell_balance × participant_balance, normalised to mean 1.

    * cell_balance: each (label, eyelid) cell gets the same total weight, so
      minority states (confused, frustrated) and the smaller eyelid group
      count as much as the rest.
    * participant_balance: within a cell, each participant gets the same
      total weight, so one person with many photos can't dominate again.
    """
    cell = part["label"] + "|" + part["eyelid"]
    cell_pid = cell + "|" + part["participant_id"]
    n_cells = cell.nunique()
    pids_in_cell = part.groupby(cell)["participant_id"].nunique()
    imgs_in_cell_pid = cell_pid.map(cell_pid.value_counts())
    # 1/n_cells per cell, split equally across that cell's participants,
    # split equally across that participant's images in the cell.
    w = 1.0 / (n_cells * cell.map(pids_in_cell) * imgs_in_cell_pid)
    w = w.to_numpy(dtype=np.float32)
    return w / w.mean()


# ── 4. Input pipeline with targeted augmentation ──────────────────────────

def decode(path: tf.Tensor) -> tf.Tensor:
    raw = tf.io.read_file(path)
    img = tf.io.decode_image(raw, channels=3, expand_animations=False)
    img = tf.image.resize(img, (IMG_SIZE, IMG_SIZE))
    return tf.cast(img, tf.float32) / 255.0  # 0–1, same as the app


def make_augmenter(seed: int):
    # Small geometric changes only: ±~8°, ±10% zoom. Larger rotations or
    # crops would move the eyes/brows out of their usual place or out of
    # frame. Flip is safe: a raised brow on the left is still a raised brow.
    rotate = tf.keras.layers.RandomRotation(8 / 360, fill_mode="reflect", seed=seed)
    zoom = tf.keras.layers.RandomZoom((-0.10, 0.10), fill_mode="reflect", seed=seed + 1)

    def augment(img: tf.Tensor) -> tf.Tensor:
        img = tf.image.random_flip_left_right(img)
        img = tf.image.random_brightness(img, 0.15)       # lighting
        img = tf.image.random_contrast(img, 0.8, 1.2)     # camera/exposure
        img = rotate(img[None], training=True)[0]          # head tilt
        img = zoom(img[None], training=True)[0]            # camera distance
        return tf.clip_by_value(img, 0.0, 1.0)

    return augment


def make_dataset(part: pd.DataFrame, batch: int, training: bool,
                 weights: np.ndarray | None, seed: int) -> tf.data.Dataset:
    paths = part["path"].to_numpy()
    labels = part["y"].to_numpy(dtype=np.int32)
    tensors = (paths, labels) if weights is None else (paths, labels, weights)
    ds = tf.data.Dataset.from_tensor_slices(tensors)
    if training:
        ds = ds.shuffle(len(part), seed=seed, reshuffle_each_iteration=True)
    augment = make_augmenter(seed) if training else None

    def load(*item):
        img = decode(item[0])
        if augment is not None:
            img = augment(img)
        y = tf.one_hot(item[1], len(CLASSES))
        return (img, y) if len(item) == 2 else (img, y, item[2])

    return ds.map(load, num_parallel_calls=tf.data.AUTOTUNE).batch(batch).prefetch(tf.data.AUTOTUNE)


# ── 5. Model ──────────────────────────────────────────────────────────────

def build_model(dropout: float, l2: float, pretrained: bool):
    base = tf.keras.applications.MobileNetV2(
        input_shape=(IMG_SIZE, IMG_SIZE, 3),
        include_top=False,
        weights="imagenet" if pretrained else None,
        pooling="avg",
    )
    base.trainable = False

    inputs = tf.keras.Input((IMG_SIZE, IMG_SIZE, 3), name="image_0_1")
    # App sends 0–1; MobileNetV2 expects -1..1.
    x = tf.keras.layers.Rescaling(2.0, offset=-1.0)(inputs)
    # training=False keeps BatchNorm in inference mode even after unfreezing,
    # so small, unbalanced batches can't wreck the pretrained statistics.
    x = base(x, training=False)
    x = tf.keras.layers.Dropout(dropout)(x)
    outputs = tf.keras.layers.Dense(
        len(CLASSES), activation="softmax",
        kernel_regularizer=tf.keras.regularizers.l2(l2), name="fer_head",
    )(x)
    return tf.keras.Model(inputs, outputs, name="bigkas_fer_v2"), base


def compile_model(model, lr: float) -> None:
    model.compile(
        optimizer=tf.keras.optimizers.Adam(lr),
        loss=tf.keras.losses.CategoricalCrossentropy(label_smoothing=0.05),
        weighted_metrics=["accuracy"],
    )


def callbacks(patience: int, ckpt: str):
    return [
        tf.keras.callbacks.EarlyStopping(monitor="val_loss", patience=patience,
                                         restore_best_weights=True, verbose=1),
        tf.keras.callbacks.ReduceLROnPlateau(monitor="val_loss", factor=0.5,
                                             patience=max(2, patience // 2), verbose=1),
        tf.keras.callbacks.ModelCheckpoint(ckpt, monitor="val_loss",
                                           save_best_only=True, save_weights_only=True),
    ]


# ── 6. Evaluation ─────────────────────────────────────────────────────────

def subgroup_report(test: pd.DataFrame, probs: np.ndarray, out_dir: Path) -> dict:
    from sklearn.metrics import (balanced_accuracy_score, confusion_matrix,
                                 f1_score, precision_recall_fscore_support)

    y_true = test["y"].to_numpy()
    y_pred = probs.argmax(axis=1)
    report: dict = {"classes": CLASSES}

    def block(mask: np.ndarray) -> dict | None:
        if mask.sum() == 0:
            return None
        t, p = y_true[mask], y_pred[mask]
        prec, rec, f1, sup = precision_recall_fscore_support(
            t, p, labels=range(len(CLASSES)), zero_division=0)
        return {
            "images": int(mask.sum()),
            "participants": int(test.loc[mask, "participant_id"].nunique()),
            "accuracy": float((t == p).mean()),
            "balanced_accuracy": float(balanced_accuracy_score(t, p)),
            "macro_f1": float(f1_score(t, p, average="macro", labels=range(len(CLASSES)), zero_division=0)),
            # Per-class accuracy = recall: of the photos showing this state,
            # how many the model got right.
            "per_class_accuracy": {c: float(rec[i]) for i, c in enumerate(CLASSES)},
            "per_class_precision": {c: float(prec[i]) for i, c in enumerate(CLASSES)},
            "support": {c: int(sup[i]) for i, c in enumerate(CLASSES)},
            "confusion_matrix": confusion_matrix(t, p, labels=range(len(CLASSES))).tolist(),
        }

    report["overall"] = block(np.ones(len(test), bool))
    report["by_eyelid"] = {g: block((test["eyelid"] == g).to_numpy()) for g in EYELID_GROUPS}

    mono, non = report["by_eyelid"]["monolid"], report["by_eyelid"]["non_monolid"]
    if mono and non:
        report["gap_non_monolid_minus_monolid"] = {
            "accuracy": non["accuracy"] - mono["accuracy"],
            "balanced_accuracy": non["balanced_accuracy"] - mono["balanced_accuracy"],
            "per_class_accuracy": {c: non["per_class_accuracy"][c] - mono["per_class_accuracy"][c]
                                   for c in CLASSES},
        }

    # Accuracy per person: shows whether a group average hides one person
    # the model fails on completely.
    report["by_participant"] = {}
    pids = test["participant_id"].to_numpy()
    eyelids = test["eyelid"].to_numpy()
    for pid in sorted(set(pids)):
        idx = np.flatnonzero(pids == pid)
        report["by_participant"][pid] = {
            "eyelid": str(eyelids[idx[0]]),
            "images": int(len(idx)),
            "accuracy": float((y_pred[idx] == y_true[idx]).mean()),
        }

    plot_confusions(report, out_dir)
    write_markdown(report, out_dir / "evaluation_report.md")
    return report


def plot_confusions(report: dict, out_dir: Path) -> None:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    panels = [("All test participants", report["overall"])] + [
        (f"{g.replace('_', '-')} participants", report["by_eyelid"][g]) for g in EYELID_GROUPS
    ]
    panels = [(t, b) for t, b in panels if b]
    fig, axes = plt.subplots(1, len(panels), figsize=(5.2 * len(panels), 4.6))
    axes = np.atleast_1d(axes)
    for ax, (title, b) in zip(axes, panels):
        cm = np.array(b["confusion_matrix"], dtype=float)
        rows = cm.sum(axis=1, keepdims=True)
        norm = np.divide(cm, rows, out=np.zeros_like(cm), where=rows > 0)
        ax.imshow(norm, vmin=0, vmax=1, cmap="Blues")
        for i in range(len(CLASSES)):
            for j in range(len(CLASSES)):
                ax.text(j, i, f"{int(cm[i, j])}\n{norm[i, j]:.0%}", ha="center", va="center",
                        fontsize=8, color="white" if norm[i, j] > 0.5 else "black")
        ax.set_xticks(range(len(CLASSES)), CLASSES, rotation=30)
        ax.set_yticks(range(len(CLASSES)), CLASSES)
        ax.set_xlabel("Predicted")
        ax.set_ylabel("Actual")
        ax.set_title(f"{title}\nacc {b['accuracy']:.0%} · balanced {b['balanced_accuracy']:.0%} "
                     f"· n={b['participants']} people")
    fig.tight_layout()
    fig.savefig(out_dir / "confusion_matrices.png", dpi=150)
    plt.close(fig)


def write_markdown(report: dict, path: Path) -> None:
    def pct(v): return "—" if v is None else f"{v:.1%}"
    lines = ["# Bigkas FER v2 — subject-independent evaluation", "",
             "Test participants never appear in training or validation.", ""]
    groups = [("Overall", report["overall"])] + [(g, report["by_eyelid"][g]) for g in EYELID_GROUPS]
    lines += ["| Group | People | Images | Accuracy | Balanced acc. | Macro F1 |",
              "|---|---|---|---|---|---|"]
    for name, b in groups:
        if b:
            lines.append(f"| {name} | {b['participants']} | {b['images']} | {pct(b['accuracy'])} | "
                         f"{pct(b['balanced_accuracy'])} | {pct(b['macro_f1'])} |")
        else:
            lines.append(f"| {name} | 0 | 0 | — | — | — |")
    lines += ["", "## Per-class accuracy (recall)", "",
              "| State | Monolid | Non-monolid | Gap (non − mono) |", "|---|---|---|---|"]
    mono, non = report["by_eyelid"]["monolid"], report["by_eyelid"]["non_monolid"]
    gap = report.get("gap_non_monolid_minus_monolid", {}).get("per_class_accuracy", {})
    for c in CLASSES:
        m = mono["per_class_accuracy"][c] if mono else None
        n = non["per_class_accuracy"][c] if non else None
        g = gap.get(c)
        lines.append(f"| {c} | {pct(m)} | {pct(n)} | {'—' if g is None else f'{g:+.1%}'} |")
    lines += ["", "## Per participant", "", "| Participant | Eyelid | Images | Accuracy |",
              "|---|---|---|---|"]
    for pid, b in sorted(report["by_participant"].items()):
        lines.append(f"| {pid} | {b['eyelid']} | {b['images']} | {pct(b['accuracy'])} |")
    lines += ["", "Small test groups give unstable numbers; report the number of people with every figure."]
    path.write_text("\n".join(lines), encoding="utf-8")


# ── 7. Export for the app ─────────────────────────────────────────────────

def export_tflite(model, out_path: Path) -> None:
    try:
        converter = tf.lite.TFLiteConverter.from_keras_model(model)
        tflite = converter.convert()
    except Exception:  # Keras 3 (TF 2.16+): go through a SavedModel
        saved = str(out_path.with_suffix("")) + "_savedmodel"
        model.export(saved)
        tflite = tf.lite.TFLiteConverter.from_saved_model(saved).convert()
    out_path.write_bytes(tflite)


def check_tflite(tflite_path: Path, model, test: pd.DataFrame, limit: int = 64) -> float:
    """Share of test images where the .tflite file and Keras agree."""
    interp = tf.lite.Interpreter(model_path=str(tflite_path))
    interp.allocate_tensors()
    inp, out = interp.get_input_details()[0], interp.get_output_details()[0]
    assert list(inp["shape"]) == [1, IMG_SIZE, IMG_SIZE, 3] and inp["dtype"] == np.float32
    assert list(out["shape"]) == [1, len(CLASSES)]
    agree = 0
    paths = test["path"].tolist()[:limit]
    for p in paths:
        x = decode(tf.constant(p)).numpy()[None]
        interp.set_tensor(inp["index"], x)
        interp.invoke()
        agree += int(interp.get_tensor(out["index"]).argmax() == model.predict(x, verbose=0).argmax())
    return agree / max(1, len(paths))


# ── Main ──────────────────────────────────────────────────────────────────

def main() -> None:
    args = parse_args()
    set_seed(args.seed)
    data_dir, out_dir = Path(args.data_dir), Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    print("=" * 66 + "\n  Bigkas FER v2 — subject-independent training\n" + "=" * 66)
    df = load_index(data_dir)
    print(f"\n📁 {len(df)} images · {df.participant_id.nunique()} participants")
    for g in EYELID_GROUPS:
        print(f"   {g:12} {df.loc[df.eyelid == g, 'participant_id'].nunique():3} people, "
              f"{(df.eyelid == g).sum():5} images")

    df = split_by_participant(df, args.test_frac, args.val_frac, args.seed)
    split_info = describe_split(df)
    for s, info in split_info.items():
        people = sum(len(v) for v in info["participants"].values())
        print(f"   {s:5} {info['images']:5} images · {people} people · {info['per_class']}")

    train, val, test = (df[df.split == s].reset_index(drop=True) for s in ["train", "val", "test"])
    if val.empty:
        raise SystemExit("No validation participants: add more participants (3+ per eyelid group).")

    w_train, w_val = sample_weights(train), sample_weights(val)
    train_ds = make_dataset(train, args.batch_size, True, w_train, args.seed)
    val_ds = make_dataset(val, args.batch_size, False, w_val, args.seed)

    model, base = build_model(args.dropout, args.l2, not args.no_pretrained)
    ckpt = str(out_dir / "best.weights.h5")

    print("\n🧠 Phase 1: frozen MobileNetV2, training the head")
    compile_model(model, args.lr_head)
    h1 = model.fit(train_ds, validation_data=val_ds, epochs=args.epochs_head,
                   callbacks=callbacks(args.patience, ckpt), verbose=2)

    print(f"\n🔧 Phase 2: unfreezing the top {args.unfreeze} layers at lr {args.lr_finetune}")
    base.trainable = True
    for layer in base.layers[:-args.unfreeze]:
        layer.trainable = False
    for layer in base.layers[-args.unfreeze:]:
        if isinstance(layer, tf.keras.layers.BatchNormalization):
            layer.trainable = False  # keep pretrained statistics
    compile_model(model, args.lr_finetune)  # recompile after changing trainable
    h2 = model.fit(train_ds, validation_data=val_ds, epochs=args.epochs_finetune,
                   callbacks=callbacks(args.patience, ckpt), verbose=2)

    report = None
    if test.empty:
        print("\n⚠️  No test participants, so no subject-independent accuracy. "
              "Add participants (3+ per eyelid group).")
    else:
        print("\n📊 Evaluating on unseen participants")
        probs = model.predict(make_dataset(test, args.batch_size, False, None, args.seed), verbose=0)
        report = subgroup_report(test, probs, out_dir)
        o = report["overall"]
        print(f"   overall   acc {o['accuracy']:.1%} · balanced {o['balanced_accuracy']:.1%} "
              f"· macro F1 {o['macro_f1']:.1%} · {o['participants']} people")
        for g in EYELID_GROUPS:
            b = report["by_eyelid"][g]
            if b:
                per = " ".join(f"{c} {b['per_class_accuracy'][c]:.0%}" for c in CLASSES)
                print(f"   {g:12} acc {b['accuracy']:.1%} · {b['participants']} people · {per}")
        if "gap_non_monolid_minus_monolid" in report:
            print(f"   gap (non − mono) accuracy: "
                  f"{report['gap_non_monolid_minus_monolid']['accuracy']:+.1%}")

    print("\n💾 Exporting TensorFlow Lite")
    tflite_path = out_dir / "fer_bigkas.tflite"
    export_tflite(model, tflite_path)
    agreement = check_tflite(tflite_path, model, test if not test.empty else val)
    print(f"   {tflite_path} ({tflite_path.stat().st_size / 1e6:.1f} MB) · "
          f"TFLite/Keras agreement {agreement:.0%}")

    metadata = {
        "exported_at": datetime.now().isoformat(timespec="seconds"),
        "classes": CLASSES,
        "input": {"shape": [1, IMG_SIZE, IMG_SIZE, 3], "dtype": "float32", "range": "0..1 RGB"},
        "split": "subject-independent (by participant_id, stratified by eyelid group)",
        "split_detail": split_info,
        "history": {"phase1": {k: [float(v) for v in vs] for k, vs in h1.history.items()},
                    "phase2": {k: [float(v) for v in vs] for k, vs in h2.history.items()}},
        "args": vars(args),
        "tflite_keras_agreement": agreement,
        "test_report": report,
    }
    (out_dir / "model_metadata.json").write_text(json.dumps(metadata, indent=2), encoding="utf-8")
    (out_dir / "labels.txt").write_text("\n".join(CLASSES), encoding="utf-8")

    print("\n✅ Done. Files in", out_dir)
    print("   fer_bigkas.tflite       → copy to assets/models/fer_bigkas.tflite")
    print("   evaluation_report.md    → subgroup tables for the paper")
    print("   confusion_matrices.png  → overall / monolid / non-monolid")
    print("   model_metadata.json     → classes must equal FER_MODEL_CLASSES in utils/fer.ts")


if __name__ == "__main__":
    main()
