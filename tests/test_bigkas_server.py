"""
API tests for libreface_server.py: LibreFace (/analyze) and the /transcribe
pass-through to the Sapin-sapin speech server.

Run from the Bigkas folder:
    libreface_env\\Scripts\\python -m unittest discover tests -v

LibreFace and the speech server are replaced by stand-ins, so this runs in
seconds without the real models, a webcam or ngrok, and checks how the API
behaves: access key, success replies, no-face, bad input, speech server
offline, and that uploads are deleted. To check the real running server,
use scripts/check_server.py instead.
"""

import os
import socket
import sys
import tempfile
import threading
import time
import types
import unittest
from pathlib import Path

import requests
import uvicorn
from fastapi import FastAPI, File, Form, HTTPException, UploadFile

ROOT = Path(__file__).resolve().parents[1]
API_KEY = "test-key"


def free_port() -> int:
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


class LiveServer:
    """Runs a FastAPI app with uvicorn in a background thread."""

    def __init__(self, app, port):
        self.url = f"http://127.0.0.1:{port}"
        self.server = uvicorn.Server(
            uvicorn.Config(app, host="127.0.0.1", port=port, log_level="warning")
        )
        self.thread = threading.Thread(target=self.server.run, daemon=True)

    def start(self):
        self.thread.start()
        for _ in range(100):
            if self.server.started:
                return self
            time.sleep(0.05)
        raise RuntimeError("test server didn't start")

    def stop(self):
        self.server.should_exit = True
        self.thread.join(timeout=5)


# ── Stand-in for LibreFace ─────────────────────────────────────────────────
# A frame whose bytes contain NOFACE fails like LibreFace does when it finds
# no face; anything else reads as Happiness.
libreface_calls = []


def fake_get_facial_attributes_image(path, temp_dir, device, weights_download_dir):
    libreface_calls.append(path)
    if b"NOFACE" in Path(path).read_bytes():
        raise ValueError("no face found")
    return {
        "facial_expression": "Happiness",
        "au_intensities": {"au_12": 2.5, "au_6": 1, "broken": "n/a"},
        "pitch": 1.5,
        "yaw": -2,
        "roll": 0.25,
    }


fake_libreface = types.ModuleType("libreface")
fake_libreface.get_facial_attributes_image = fake_get_facial_attributes_image
sys.modules["libreface"] = fake_libreface

# ── Stand-in for the Sapin-sapin speech server (utils/speech_server.py) ────
speech_app = FastAPI()
speech_received = {}


@speech_app.post("/transcribe")
def fake_transcribe(
    file: UploadFile = File(...),
    language: str = Form(...),
    target: str = Form(""),
):
    if language not in ("tagalog", "kapampangan", "waray"):
        raise HTTPException(400, "language must be one of: tagalog, kapampangan, waray")
    speech_received.update(
        language=language,
        target=target,
        filename=file.filename,
        size=len(file.file.read()),
    )
    return {"language": language, "transcript": "mayap a bengi"}


server = None
speech = None
tmp = None
old_cwd = None


def setUpModule():
    global server, speech, tmp, old_cwd
    # The server writes uploads relative to the folder it runs in.
    old_cwd = os.getcwd()
    tmp = tempfile.TemporaryDirectory()
    os.chdir(tmp.name)

    speech_port = free_port()
    os.environ["FER_API_KEY"] = API_KEY
    os.environ["SPEECH_SERVER_URL"] = f"http://127.0.0.1:{speech_port}"
    sys.path.insert(0, str(ROOT))
    global libreface_server
    import libreface_server  # noqa: E402  (after the stand-ins and settings)

    speech = LiveServer(speech_app, speech_port).start()
    server = LiveServer(libreface_server.app, free_port()).start()


def tearDownModule():
    server.stop()
    speech.stop()
    os.chdir(old_cwd)
    tmp.cleanup()


def key(value=API_KEY):
    return {"X-API-Key": value}


def jpeg(content=b"\xff\xd8\xff fake face frame"):
    return {"file": ("frame.jpg", content, "image/jpeg")}


def wav():
    return {"file": ("speech.wav", b"RIFF" + b"\x00" * 3000, "audio/wav")}


def uploads_left():
    folder = Path(tmp.name, "tmp_uploads")
    return list(folder.iterdir()) if folder.exists() else []


class HealthTests(unittest.TestCase):
    def test_health_needs_no_key(self):
        r = requests.get(f"{server.url}/", timeout=5)
        self.assertEqual(r.status_code, 200)
        self.assertEqual(r.json(), {"status": "ok"})


class AnalyzeTests(unittest.TestCase):
    url = property(lambda self: f"{server.url}/analyze")

    def test_rejects_missing_key(self):
        r = requests.post(self.url, files=jpeg(), timeout=5)
        self.assertEqual(r.status_code, 401)

    def test_rejects_wrong_key(self):
        r = requests.post(self.url, files=jpeg(), headers=key("wrong"), timeout=5)
        self.assertEqual(r.status_code, 401)

    def test_reads_a_face(self):
        r = requests.post(self.url, files=jpeg(), headers=key(), timeout=5)
        self.assertEqual(r.status_code, 200)
        body = r.json()
        self.assertEqual(body["expression"], "Happiness")
        self.assertEqual(body["head_pose"], {"pitch": 1.5, "yaw": -2.0, "roll": 0.25})
        # Numbers only; values that aren't numbers are dropped.
        self.assertEqual(body["action_units"], {"au_12": 2.5, "au_6": 1.0})

    def test_no_face_is_422(self):
        r = requests.post(self.url, files=jpeg(b"NOFACE"), headers=key(), timeout=5)
        self.assertEqual(r.status_code, 422)
        self.assertIn("Analysis failed", r.json()["detail"])

    def test_missing_file_is_422(self):
        r = requests.post(self.url, headers=key(), timeout=5)
        self.assertEqual(r.status_code, 422)

    def test_frame_path_uses_forward_slashes(self):
        # LibreFace splits paths on "/", so a Windows "\\" path would break it.
        requests.post(self.url, files=jpeg(), headers=key(), timeout=5)
        self.assertNotIn("\\", libreface_calls[-1])

    def test_frames_are_deleted(self):
        requests.post(self.url, files=jpeg(), headers=key(), timeout=5)
        requests.post(self.url, files=jpeg(b"NOFACE"), headers=key(), timeout=5)
        self.assertEqual(uploads_left(), [])


class TranscribeTests(unittest.TestCase):
    url = property(lambda self: f"{server.url}/transcribe")

    def test_rejects_missing_key(self):
        r = requests.post(self.url, files=wav(), data={"language": "tagalog"}, timeout=5)
        self.assertEqual(r.status_code, 401)

    def test_forwards_to_the_speech_server(self):
        r = requests.post(
            self.url,
            files=wav(),
            data={"language": "kapampangan", "target": "mayap a bengi"},
            headers=key(),
            timeout=10,
        )
        self.assertEqual(r.status_code, 200)
        self.assertEqual(r.json(), {"language": "kapampangan", "transcript": "mayap a bengi"})
        self.assertEqual(speech_received["language"], "kapampangan")
        self.assertEqual(speech_received["target"], "mayap a bengi")
        self.assertEqual(speech_received["filename"], "speech.wav")
        self.assertEqual(speech_received["size"], 3004)

    def test_accepts_the_old_lang_field(self):
        r = requests.post(
            self.url, files=wav(), data={"lang": "WARAY "}, headers=key(), timeout=10
        )
        self.assertEqual(r.status_code, 200)
        self.assertEqual(speech_received["language"], "waray")

    def test_defaults_to_tagalog(self):
        r = requests.post(self.url, files=wav(), headers=key(), timeout=10)
        self.assertEqual(r.status_code, 200)
        self.assertEqual(speech_received["language"], "tagalog")

    def test_passes_speech_server_errors_through(self):
        r = requests.post(
            self.url, files=wav(), data={"language": "klingon"}, headers=key(), timeout=10
        )
        self.assertEqual(r.status_code, 400)
        self.assertIn("language must be one of", r.json()["detail"])

    def test_speech_server_offline_is_503(self):
        original = libreface_server.SPEECH_SERVER_URL
        libreface_server.SPEECH_SERVER_URL = f"http://127.0.0.1:{free_port()}"
        try:
            r = requests.post(
                self.url, files=wav(), data={"language": "tagalog"}, headers=key(), timeout=10
            )
        finally:
            libreface_server.SPEECH_SERVER_URL = original
        self.assertEqual(r.status_code, 503)
        self.assertEqual(r.json()["detail"], "Speech server is offline.")


if __name__ == "__main__":
    unittest.main(verbosity=2)
