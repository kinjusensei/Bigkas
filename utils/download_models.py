"""Download the SapinSapin speech-recognition models for Bigkas.

Run (inside the NEW speech environment, not libreface_env):
    python utils\\download_models.py

Models are saved in the Hugging Face cache
(C:\\Users\\<you>\\.cache\\huggingface\\hub) and reused by the server.
"""
from huggingface_hub import snapshot_download

MODELS = {
    "Tagalog (Filipino)": "sapinsapin/whisper-small-fsc",
    "Kapampangan": "sapinsapin/whisper-small-pld-pam",
    # Repo name not confirmed. If it does not exist, the script says so and continues.
    "Waray": "sapinsapin/whisper-small-pld-war",
}

failed = []
for label, repo in MODELS.items():
    print(f"\n=== {label}: {repo} ===")
    try:
        path = snapshot_download(
            repo_id=repo,
            # skip duplicate weight formats we do not need
            ignore_patterns=["*.msgpack", "*.h5", "*.onnx", "*.ot"],
        )
        print("Saved to:", path)
    except Exception as e:
        print(f"Could not download {repo}: {e}")
        failed.append(repo)

print("\n--- Done ---")
if failed:
    print("These did not download (check the exact name at huggingface.co/sapinsapin):")
    for r in failed:
        print(" -", r)
else:
    print("All models downloaded.")