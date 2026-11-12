"""
libreface_server.py — local analysis server for the Bigkas "Expression check" screen.

The app (components/LiveExpressionChecker.tsx) POSTs one JPEG frame at a time to
    http://<this PC's IPv4>:8000/analyze   (form field: "file")
and expects JSON:
    { "expression": str, "head_pose": {pitch, yaw, roll}, "action_units": {AU: intensity 0-5} }

The app's speech check (utils/speech.ts) POSTs a recording to
    /transcribe   (form fields: "file", "language" = tagalog | kapampangan | waray)
which is passed on to the Sapin-sapin speech server (utils/speech_server.py,
port 8001) and returns its JSON: { "language": str, "transcript": str }.

Run from the folder that contains this file (so ./weights_libreface is found):
    python libreface_server.py
or:
    python -m uvicorn libreface_server:app --host 0.0.0.0 --port 8000
"""

import os
import secrets
import traceback
import uuid

import libreface
import uvicorn
from fastapi import Depends, FastAPI, File, Form, Header, HTTPException, UploadFile

UPLOAD_DIR = "tmp_uploads"   # incoming frames (deleted after each request)
TEMP_DIR = "tmp"             # LibreFace's aligned faces
WEIGHTS_DIR = "./weights_libreface"
os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(TEMP_DIR, exist_ok=True)

app = FastAPI(title="Bigkas LibreFace server")

# Access key. Once the server is public (ngrok), anyone who finds the address
# could send it images. Set FER_API_KEY before starting, and the same value as
# EXPO_PUBLIC_FER_API_KEY in the app; requests without it get 401.
API_KEY = os.environ.get("FER_API_KEY", "")
if not API_KEY:
    print("WARNING: FER_API_KEY is not set, so /analyze and /transcribe accept requests from anyone.")


def require_key(x_api_key: str = Header(default="")):
    if API_KEY and not secrets.compare_digest(x_api_key, API_KEY):
        raise HTTPException(status_code=401, detail="Invalid or missing access key.")


def to_number_map(value) -> dict:
    """LibreFace returns numpy numbers; JSON needs plain floats."""
    if not isinstance(value, dict):
        return {}
    out = {}
    for key, v in value.items():
        try:
            out[str(key)] = float(v)
        except (TypeError, ValueError):
            pass
    return out


@app.get("/")
def health():
    # Open http://<PC IP>:8000/ to check the server is reachable.
    return {"status": "ok"}


# A plain (non-async) function: FastAPI runs it in a worker thread, so the slow
# LibreFace call doesn't block the server.
@app.post("/analyze", dependencies=[Depends(require_key)])
def analyze(file: UploadFile = File(...)):
    # LibreFace names its temp files using image_path.split("/"), so the path
    # must use forward slashes (a Windows "\\" path would break it).
    path = f"{UPLOAD_DIR}/{uuid.uuid4().hex}.jpg"
    with open(path, "wb") as f:
        f.write(file.file.read())

    try:
        result = libreface.get_facial_attributes_image(
            path,
            temp_dir=TEMP_DIR,
            device="cpu",
            weights_download_dir=WEIGHTS_DIR,
        )
    except Exception as error:
        # Print the full traceback in the server window so the real cause is
        # visible (no face found, library version problem, download failure...).
        traceback.print_exc()
        raise HTTPException(status_code=422, detail=f"Analysis failed: {error}")
    finally:
        try:
            os.remove(path)
        except OSError:
            pass

    return {
        "expression": str(result.get("facial_expression") or ""),
        "head_pose": to_number_map(
            {k: result.get(k) for k in ("pitch", "yaw", "roll") if k in result}
        ),
        "action_units": to_number_map(result.get("au_intensities")),
    }


# ── Speech: pass-through to the Sapin-sapin speech server ──────────────────
# utils/speech_server.py runs Sapin-sapin AI's Whisper models in speech_env on
# port 8001 (its own Python, because those models need a newer torch than
# LibreFace). ngrok's free plan exposes one address, so the app sends speech
# here too: this checks the access key and forwards the recording.
SPEECH_SERVER_URL = os.environ.get("SPEECH_SERVER_URL", "http://127.0.0.1:8001").rstrip("/")
SPEECH_TIMEOUT_S = 120   # the first request for a language loads its model


@app.post("/transcribe", dependencies=[Depends(require_key)])
def transcribe(
    file: UploadFile = File(...),
    language: str = Form(""),
    lang: str = Form(""),     # older name, accepted too
    target: str = Form(""),
):
    import requests

    chosen = (language or lang or "tagalog").strip().lower()
    try:
        reply = requests.post(
            f"{SPEECH_SERVER_URL}/transcribe",
            files={"file": (file.filename or "speech.wav", file.file.read(), file.content_type or "audio/wav")},
            data={"language": chosen, "target": target},
            timeout=SPEECH_TIMEOUT_S,
        )
    except requests.RequestException as error:
        print(f"Speech server not reachable at {SPEECH_SERVER_URL}: {error}")
        raise HTTPException(status_code=503, detail="Speech server is offline.")
    try:
        data = reply.json()
    except ValueError:
        data = {"detail": reply.text[:200]}
    if not reply.ok:
        raise HTTPException(status_code=reply.status_code, detail=data.get("detail", "Speech server error."))
    print(f"[speech {chosen}] {data.get('transcript')!r}")
    return data

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)