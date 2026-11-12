"""
check_server.py: is the real Bigkas server working right now?

Calls the running server the same way the app does (through ngrok by
default) with real files, and prints a pass/fail list:
  * the server is up (GET /)
  * requests without the access key are rejected
  * LibreFace reads the photos in assets/test_photos
  * Sapin-sapin transcribes the sample recordings

Start start_libreface.bat first, then from the Bigkas folder:
    libreface_env\\Scripts\\python scripts\\check_server.py
    libreface_env\\Scripts\\python scripts\\check_server.py --url http://127.0.0.1:8000

The address and key come from .env.local (EXPO_PUBLIC_FER_SERVER_URL,
EXPO_PUBLIC_FER_API_KEY) unless --url / --key are given. The key is never
printed. Exit code 0 = everything passed.

For tests that check the code without a running server, see tests/ and
npm test.
"""

from __future__ import annotations

import argparse
import sys
import time
from pathlib import Path

import requests

ROOT = Path(__file__).resolve().parents[1]
PHOTOS = ROOT / "assets" / "test_photos"
# Sample recordings in the Bigkas folder: file → (language, what was said).
RECORDINGS = {
    "tagalog1.wav": ("tagalog", ""),
    "magandang umaga.wav": ("tagalog", "magandang umaga"),
    "mayap a bengi.wav": ("kapampangan", "mayap a bengi"),
}
HEADERS = {"ngrok-skip-browser-warning": "true"}

results: list[tuple[bool, str]] = []


def report(ok: bool, text: str) -> None:
    results.append((ok, text))
    print(("  ✅ " if ok else "  ❌ ") + text, flush=True)


def note(text: str) -> None:
    print("  ⚠️  " + text, flush=True)


def read_env() -> dict[str, str]:
    env = {}
    path = ROOT / ".env.local"
    if path.exists():
        for line in path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                name, value = line.split("=", 1)
                env[name.strip()] = value.strip().strip('"').strip("'")
    return env


def detail(response: requests.Response) -> str:
    try:
        return str(response.json().get("detail", response.text[:120]))
    except ValueError:
        return response.text[:120].replace("\n", " ")


def check_health(url: str) -> bool:
    try:
        r = requests.get(f"{url}/", headers=HEADERS, timeout=15)
    except requests.RequestException as error:
        report(False, f"Server not reachable at {url} ({type(error).__name__})")
        return False
    if r.status_code == 200 and r.headers.get("content-type", "").startswith("application/json"):
        report(True, f"Server is up ({r.elapsed.total_seconds():.1f} s)")
        return True
    report(False, f"Server answered HTTP {r.status_code}: {detail(r)}")
    if "ngrok" in r.text.lower():
        note("That's ngrok's page: the tunnel is up but the LibreFace server isn't.")
    return False


def check_key(url: str, key: str) -> None:
    if not key:
        note("No access key set, so anyone can use the server (set FER_API_KEY).")
        return
    photo = next(iter(sorted(PHOTOS.glob("*.png"))), None)
    files = {"file": ("x.jpg", photo.read_bytes() if photo else b"x", "image/jpeg")}
    r = requests.post(f"{url}/analyze", files=files, headers=HEADERS, timeout=30)
    report(r.status_code == 401, f"Request without the key is rejected (HTTP {r.status_code})")
    r = requests.post(
        f"{url}/analyze", files=files, headers={**HEADERS, "X-API-Key": "wrong"}, timeout=30
    )
    report(r.status_code == 401, f"Request with a wrong key is rejected (HTTP {r.status_code})")


def check_libreface(url: str, headers: dict) -> None:
    photos = sorted(p for p in PHOTOS.glob("*") if p.suffix.lower() in (".png", ".jpg", ".jpeg"))
    if not photos:
        note(f"No photos in {PHOTOS} to test LibreFace with.")
        return
    for photo in photos:
        started = time.time()
        try:
            r = requests.post(
                f"{url}/analyze",
                files={"file": (photo.name, photo.read_bytes(), "image/jpeg")},
                headers=headers,
                timeout=120,  # the first frame loads LibreFace's weights
            )
        except requests.RequestException as error:
            report(False, f"LibreFace {photo.name}: {type(error).__name__}")
            continue
        seconds = time.time() - started
        if r.status_code == 200:
            expression = r.json().get("expression") or "(none)"
            report(True, f"LibreFace {photo.name}: {expression} ({seconds:.1f} s)")
        elif r.status_code == 422:
            report(False, f"LibreFace {photo.name}: no face found ({detail(r)})")
        else:
            report(False, f"LibreFace {photo.name}: HTTP {r.status_code} {detail(r)}")


def check_speech(url: str, headers: dict) -> None:
    found = [(ROOT / name, *info) for name, info in RECORDINGS.items() if (ROOT / name).exists()]
    if not found:
        note("No sample recordings (.wav) in the Bigkas folder to test Sapin-sapin with.")
        return
    for path, language, said in found:
        started = time.time()
        try:
            r = requests.post(
                f"{url}/transcribe",
                files={"file": (path.name, path.read_bytes(), "audio/wav")},
                data={"language": language, "target": said},
                headers=headers,
                timeout=180,  # the first request per language loads its model
            )
        except requests.RequestException as error:
            report(False, f"Sapin-sapin {path.name}: {type(error).__name__}")
            continue
        seconds = time.time() - started
        if r.status_code != 200:
            report(False, f"Sapin-sapin {path.name} ({language}): HTTP {r.status_code} {detail(r)}")
            continue
        body = r.json()
        text = body.get("transcript", "")
        score = body.get("similarity")
        extra = f", {round(score * 100)}% like “{said}”" if score is not None else ""
        report(bool(text.strip()), f"Sapin-sapin {path.name} ({language}): “{text}” ({seconds:.1f} s{extra})")


def main() -> int:
    try:  # emoji in a Windows terminal
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    env = read_env()
    ap = argparse.ArgumentParser(description="Check the running Bigkas server.")
    ap.add_argument("--url", default=env.get("EXPO_PUBLIC_FER_SERVER_URL", "http://127.0.0.1:8000"))
    ap.add_argument("--key", default=env.get("EXPO_PUBLIC_FER_API_KEY", ""))
    ap.add_argument("--skip-speech", action="store_true", help="only check LibreFace")
    args = ap.parse_args()
    url = args.url.rstrip("/")
    headers = {**HEADERS, **({"X-API-Key": args.key} if args.key else {})}

    print(f"\nBigkas server check — {url}\n")
    if check_health(url):
        check_key(url, args.key)
        print()
        check_libreface(url, headers)
        if not args.skip_speech:
            print()
            check_speech(url, headers)

    passed = sum(ok for ok, _ in results)
    failed = len(results) - passed
    print(f"\n{passed} passed, {failed} failed")
    if failed:
        print("Check that start_libreface.bat's windows are all running (speech server,")
        print("LibreFace server, ngrok) and that the key matches .env.local.")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
