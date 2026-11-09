// Switches for the trained-FER pipeline (components/fer, services/FERInferenceService.ts).
//
// Collecting training photos: dev builds only, and even there nothing is
// saved until the learner agrees on the visible "Help train" card.
export const FER_DATA_COLLECTION_ENABLED = __DEV__;

// Running the trained model. Off until a real model replaces the empty
// placeholder at assets/models/fer_bigkas.tflite (see
// scripts/fer_training/train_fer_model.py). The model only ever offers
// help; like the existing FER, it never affects a score.
export const FER_MODEL_ENABLED = false;

// How often a face photo is taken for collection and for the model.
export const FER_COLLECT_INTERVAL_MS = 2000;
export const FER_INFERENCE_INTERVAL_MS = 1000;
