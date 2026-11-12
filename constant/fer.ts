// Switches for the trained-FER pipeline (components/fer, services/FERInferenceService.ts).
//
// Collecting training photos: dev builds only, and even there nothing is
// saved until the learner agrees on the visible "Help train" card.
export const FER_DATA_COLLECTION_ENABLED = __DEV__;

// Running the trained model. Off until a real model replaces the empty
// placeholder at assets/models/fer_bigkas.tflite (see
// scripts/fer_training/train_fer_model.py). The model only ever offers
// help; like the existing FER, it never affects a score.
export const FER_MODEL_ENABLED = true;

// How often a face photo is taken for collection and for the model.
export const FER_COLLECT_INTERVAL_MS = 500;
export const FER_INFERENCE_INTERVAL_MS = 1000;

// LibreFace on the Bigkas server (libreface_server.py, reached through
// EXPO_PUBLIC_FER_SERVER_URL) reads expressions in lessons and stories.
// When the server can't be reached, the trained on-phone model above takes
// over until it's back. Frames are sent over HTTPS and deleted after each
// request; nothing is saved.
export const LIBREFACE_ENABLED = true;
// Pause between frames sent to LibreFace (one request at a time).
export const LIBREFACE_INTERVAL_MS = 700;
// While the server is offline, try it again this often.
export const LIBREFACE_RETRY_MS = 15000;
