"""
train_fer_model.py
===========================================================================
Trains a MobileNetV2-based facial expression classifier using
MediaPipe Model Maker, then exports it as a .tflite file for Bigkas.

SETUP (run once):
  pip install mediapipe-model-maker tensorflow pillow

FOLDER STRUCTURE expected:
  fer_training_data/
    confused/     *.jpg
    engaged/      *.jpg  (face images labeled "engaged")
    frustrated/   *.jpg
    neutral/      *.jpg

  → You get this ZIP from the dev-only FER data screen (/fer-data) in the app.
  → Unzip it, then point DATA_DIR at the unzipped folder.
  → The labels must match FER_MODEL_CLASSES in utils/fer.ts (alphabetical,
    the order Model Maker numbers them). Empty class folders are skipped.

TARGET: ≥300 images per class for good accuracy.
===========================================================================
"""

import os
import json
import shutil
from pathlib import Path
from datetime import datetime

# ── MediaPipe Model Maker ─────────────────────────────────────────────────
from mediapipe_model_maker import image_classifier

# ── Config ────────────────────────────────────────────────────────────────

DATA_DIR    = './fer_training_data'   # unzipped folder from app export
OUTPUT_DIR  = './fer_model_output'
MODEL_NAME  = 'fer_bigkas.tflite'
EPOCHS      = 20
BATCH_SIZE  = 32
TRAIN_SPLIT = 0.85   # 85% train, 15% test


def check_data(data_dir: str) -> dict:
    """Count images per class and warn if any class is below minimum."""
    MIN_IMAGES = 100  # absolute minimum; 300+ recommended
    counts = {}
    for cls in sorted(os.listdir(data_dir)):
        cls_path = os.path.join(data_dir, cls)
        if not os.path.isdir(cls_path):
            continue
        images = [f for f in os.listdir(cls_path)
                  if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
        if not images:
            print(f'  ⏭️  {cls}: empty, skipped')
            continue
        counts[cls] = len(images)
        if len(images) < MIN_IMAGES:
            print(f'  ⚠️  {cls}: only {len(images)} images (need ≥{MIN_IMAGES})')
        else:
            print(f'  ✅  {cls}: {len(images)} images')
    return counts


def preprocess_images(data_dir: str, out_dir: str, target_size=(224, 224)):
    """
    Resize all images to 224×224 (MobileNetV2 input size) and ensure
    they are RGB JPEGs. Saves preprocessed copies to out_dir.
    """
    from PIL import Image

    print('\n📐 Preprocessing images...')
    for cls in sorted(os.listdir(data_dir)):
        src_cls = os.path.join(data_dir, cls)
        dst_cls = os.path.join(out_dir, cls)
        if not os.path.isdir(src_cls):
            continue
        # An empty class folder makes Dataset.from_folder fail.
        if not any(f.lower().endswith(('.jpg', '.jpeg', '.png'))
                   for f in os.listdir(src_cls)):
            continue
        os.makedirs(dst_cls, exist_ok=True)

        for fname in os.listdir(src_cls):
            if not fname.lower().endswith(('.jpg', '.jpeg', '.png')):
                continue
            src = os.path.join(src_cls, fname)
            dst = os.path.join(dst_cls, Path(fname).stem + '.jpg')
            try:
                img = Image.open(src).convert('RGB')
                img = img.resize(target_size, Image.LANCZOS)
                img.save(dst, 'JPEG', quality=92)
            except Exception as e:
                print(f'  skip {fname}: {e}')

    print('  Done.')


def train(processed_dir: str, output_dir: str):
    """Fine-tune MobileNetV2 using MediaPipe Model Maker."""
    os.makedirs(output_dir, exist_ok=True)

    print('\n📂 Loading dataset...')
    data = image_classifier.Dataset.from_folder(processed_dir)
    train_data, test_data = data.split(TRAIN_SPLIT)
    print(f'  Train: {len(train_data)} images')
    print(f'  Test:  {len(test_data)} images')

    print('\n🧠 Training MobileNetV2...')
    spec = image_classifier.SupportedModels.MOBILENET_V2

    hparams = image_classifier.HParams(
        epochs=EPOCHS,
        batch_size=BATCH_SIZE,
        learning_rate=0.001,
        export_dir=output_dir,
    )

    model = image_classifier.ImageClassifier.create(
        train_data=train_data,
        model_spec=spec,
        validation_data=test_data,
        hparams=hparams,
    )

    print('\n📊 Evaluating...')
    loss, accuracy = model.evaluate(test_data)
    print(f'  Loss:     {loss:.4f}')
    print(f'  Accuracy: {accuracy * 100:.1f}%')

    if accuracy < 0.70:
        print('\n  ⚠️  Accuracy below 70%. Consider collecting more data.')
        print('      Recommended: 300+ images per class, diverse lighting/angles.')
    else:
        print('\n  ✅  Accuracy looks good for a supplementary FER model.')

    print('\n💾 Exporting TFLite model...')
    tflite_path = os.path.join(output_dir, MODEL_NAME)
    model.export_model(MODEL_NAME)

    # Save metadata
    metadata = {
        'exported_at': datetime.now().isoformat(),
        'accuracy': float(accuracy),
        'loss': float(loss),
        'epochs': EPOCHS,
        'batch_size': BATCH_SIZE,
        'classes': data.label_names,
        'input_size': [224, 224, 3],
        'model_file': MODEL_NAME,
    }
    with open(os.path.join(output_dir, 'model_metadata.json'), 'w') as f:
        json.dump(metadata, f, indent=2)

    print(f'\n✅ Model saved: {output_dir}/{MODEL_NAME}')
    print(f'   Classes:   {data.label_names}')
    print(f'   Copy {MODEL_NAME} to the Bigkas app:')
    print(f'   → assets/models/fer_bigkas.tflite  (bundled by metro.config.js)')

    return tflite_path, metadata


def main():
    print('=' * 60)
    print('  Bigkas FER Model Training')
    print('=' * 60)

    # 1. Check source data
    print(f'\n📁 Checking data in: {DATA_DIR}')
    if not os.path.exists(DATA_DIR):
        print(f'\n❌ Data directory not found: {DATA_DIR}')
        print('   Export training data from the app first (FERDataExporter screen).')
        return

    counts = check_data(DATA_DIR)
    total = sum(counts.values())
    print(f'\n   Total images: {total}')

    # 2. Preprocess
    processed_dir = DATA_DIR + '_processed'
    preprocess_images(DATA_DIR, processed_dir)

    # 3. Train
    tflite_path, metadata = train(processed_dir, OUTPUT_DIR)

    # 4. Cleanup processed temp dir
    shutil.rmtree(processed_dir, ignore_errors=True)

    print('\n' + '=' * 60)
    print('  Next steps:')
    print('  1. Copy fer_bigkas.tflite to assets/models/fer_bigkas.tflite')
    print('  2. Check FER_MODEL_CLASSES in utils/fer.ts matches:')
    print(f'     {metadata["classes"]}')
    print('  3. Set FER_MODEL_ENABLED = true in constant/fer.ts')
    print('  4. Make a new EAS build and test on a physical Android device')
    print('=' * 60)


if __name__ == '__main__':
    main()
