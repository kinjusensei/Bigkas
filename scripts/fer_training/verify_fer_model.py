"""
verify_fer_model.py — check a trained FER model before copying it into the app.
===========================================================================
  python verify_fer_model.py --model-dir fer_v2_output --app-dir ../..

Checks that:
  * fer_bigkas.tflite loads and has the input/output the app sends/reads:
    float32 [1,224,224,3] in, float32 [1,4] out
  * outputs are probabilities (sum to 1) and change with the input
  * model_metadata.json lists the classes in the same order as
    FER_MODEL_CLASSES in utils/fer.ts (read from the app, if --app-dir given)
  * the metadata's test report exists, and prints the headline numbers

Exit code 0 = safe to copy to assets/models/fer_bigkas.tflite.
Needs: numpy, plus tensorflow OR ai-edge-litert (either interpreter works).
===========================================================================
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

import numpy as np

EXPECTED_CLASSES = ["confused", "engaged", "frustrated", "neutral"]


def interpreter(path: str):
    try:
        from ai_edge_litert.interpreter import Interpreter
    except ImportError:
        import tensorflow as tf  # type: ignore

        Interpreter = tf.lite.Interpreter
    m = Interpreter(model_path=path)
    m.allocate_tensors()
    return m


def app_classes(app_dir: Path) -> list[str] | None:
    fer_ts = app_dir / "utils" / "fer.ts"
    if not fer_ts.exists():
        return None
    text = fer_ts.read_text(encoding="utf-8")
    block = re.search(r"FER_MODEL_CLASSES[^=]*=\s*\[(.*?)\]", text, re.S)
    return re.findall(r'"([a-z_]+)"', block.group(1)) if block else None


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--model-dir", default="./fer_v2_output")
    ap.add_argument("--app-dir", default=None, help="Bigkas project root, to compare with utils/fer.ts")
    args = ap.parse_args()
    d = Path(args.model_dir)
    problems: list[str] = []

    model_path, meta_path = d / "fer_bigkas.tflite", d / "model_metadata.json"
    for p in (model_path, meta_path):
        if not p.exists():
            print(f"❌ missing {p}")
            return 1
    size_mb = model_path.stat().st_size / 1e6
    print(f"📦 {model_path} — {size_mb:.1f} MB")
    if size_mb < 1:
        problems.append("model file is under 1 MB — probably empty or a failed download")

    m = interpreter(str(model_path))
    i, o = m.get_input_details()[0], m.get_output_details()[0]
    print(f"   input  {list(i['shape'])} {np.dtype(i['dtype']).name}")
    print(f"   output {list(o['shape'])} {np.dtype(o['dtype']).name}")
    if list(i["shape"]) != [1, 224, 224, 3] or i["dtype"] != np.float32:
        problems.append("input must be float32 [1,224,224,3] (the app sends 0–1 RGB)")
    if list(o["shape"]) != [1, 4] or o["dtype"] != np.float32:
        problems.append("output must be float32 [1,4]")

    rng = np.random.default_rng(0)
    outs = []
    for x in (np.zeros((1, 224, 224, 3), np.float32),
              np.ones((1, 224, 224, 3), np.float32),
              rng.random((1, 224, 224, 3), dtype=np.float32)):
        m.set_tensor(i["index"], x)
        m.invoke()
        outs.append(m.get_tensor(o["index"])[0].copy())
    sums = [float(v.sum()) for v in outs]
    print(f"   output sums {[round(s, 3) for s in sums]} (should be 1.0)")
    if any(abs(s - 1) > 0.02 for s in sums):
        problems.append("outputs don't sum to 1 — the model is missing its softmax")
    if np.allclose(outs[0], outs[1], atol=1e-4) and np.allclose(outs[1], outs[2], atol=1e-4):
        problems.append("output is the same for every input — the model didn't learn anything")

    meta = json.loads(meta_path.read_text(encoding="utf-8"))
    classes = meta.get("classes")
    print(f"🏷️  metadata classes {classes}")
    if classes != EXPECTED_CLASSES:
        problems.append(f"classes must be {EXPECTED_CLASSES} in that order")
    if args.app_dir:
        in_app = app_classes(Path(args.app_dir))
        print(f"   app FER_MODEL_CLASSES {in_app}")
        if in_app is None:
            problems.append("couldn't read FER_MODEL_CLASSES from utils/fer.ts")
        elif in_app != classes:
            problems.append("utils/fer.ts FER_MODEL_CLASSES doesn't match the model's classes")

    report = meta.get("test_report")
    if report and report.get("overall"):
        ov = report["overall"]
        print(f"📊 test: acc {ov['accuracy']:.1%} · balanced {ov['balanced_accuracy']:.1%} "
              f"· macro F1 {ov['macro_f1']:.1%} · {ov['participants']} unseen people")
        gap = report.get("gap_non_monolid_minus_monolid")
        if gap:
            print(f"   gap non_monolid − monolid: {gap['accuracy']:+.1%}")
        if ov["balanced_accuracy"] < 0.4:
            print("   ⚠️  balanced accuracy is close to chance (25%) — check before shipping")
    else:
        print("⚠️  no test report in the metadata (no test participants?)")
    agreement = meta.get("tflite_keras_agreement")
    if agreement is not None and agreement < 0.95:
        problems.append(f"TFLite/Keras agreement is only {agreement:.0%}")

    if problems:
        print("\n❌ Not ready:")
        for p in problems:
            print("   •", p)
        return 1
    print("\n✅ Ready: copy fer_bigkas.tflite to assets/models/fer_bigkas.tflite")
    return 0


if __name__ == "__main__":
    sys.exit(main())
