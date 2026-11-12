"""
API tests for utils/speech_server.py, the Sapin-sapin speech server.

Run from the Bigkas folder (either Python works):
    libreface_env\\Scripts\\python -m unittest discover tests -v

The Whisper models are replaced by a stand-in, so nothing is downloaded;
this checks the API: which model each language uses, the reply, the
similarity score, and the errors for bad input.
"""

import importlib.util
import math
import socket
import struct
import sys
import tempfile
import threading
import time
import types
import unittest
import wave
from pathlib import Path

import requests
import uvicorn

ROOT = Path(__file__).resolve().parents[1]

# ── Stand-in for transformers' Whisper pipeline ───────────────────────────
models_loaded = []


def fake_pipeline(task, model, device):
    models_loaded.append(model)
    return lambda audio: {"text": "  Kumusta po  "}


fake_transformers = types.ModuleType("transformers")
fake_transformers.pipeline = fake_pipeline
sys.modules["transformers"] = fake_transformers


def free_port() -> int:
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


def make_wav(path: Path, seconds: float, rate: int = 16000) -> Path:
    """A plain tone, enough for the server to decode."""
    frames = int(seconds * rate)
    with wave.open(str(path), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(rate)
        w.writeframes(
            b"".join(
                struct.pack("<h", int(8000 * math.sin(2 * math.pi * 220 * i / rate)))
                for i in range(frames)
            )
        )
    return path


speech = None
server = None
thread = None
tmp = None
url = ""


def setUpModule():
    global speech, server, thread, tmp, url
    spec = importlib.util.spec_from_file_location(
        "speech_server_under_test", ROOT / "utils" / "speech_server.py"
    )
    speech = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(speech)

    port = free_port()
    url = f"http://127.0.0.1:{port}"
    server = uvicorn.Server(
        uvicorn.Config(speech.app, host="127.0.0.1", port=port, log_level="warning")
    )
    thread = threading.Thread(target=server.run, daemon=True)
    thread.start()
    for _ in range(100):
        if server.started:
            break
        time.sleep(0.05)
    tmp = tempfile.TemporaryDirectory()


def tearDownModule():
    server.should_exit = True
    thread.join(timeout=5)
    tmp.cleanup()


def post(language=None, target="", seconds=1.0):
    path = make_wav(Path(tmp.name, f"t{time.time_ns()}.wav"), seconds)
    data = {"target": target}
    if language is not None:
        data["language"] = language
    with path.open("rb") as f:
        return requests.post(
            f"{url}/transcribe",
            files={"file": ("speech.wav", f, "audio/wav")},
            data=data,
            timeout=60,
        )


class SpeechServerTests(unittest.TestCase):
    def test_health_lists_the_three_languages(self):
        r = requests.get(f"{url}/health", timeout=5)
        self.assertEqual(r.status_code, 200)
        self.assertEqual(r.json()["languages"], ["tagalog", "kapampangan", "waray"])

    def test_each_language_uses_its_sapin_sapin_model(self):
        expected = {
            "tagalog": "sapinsapin/whisper-small-fsc",
            "kapampangan": "sapinsapin/whisper-small-pld-pam",
            "waray": "sapinsapin/whisper-small-pld-war",
        }
        self.assertEqual(speech.MODELS, expected)
        for language, model in expected.items():
            r = post(language)
            self.assertEqual(r.status_code, 200, r.text)
            self.assertIn(model, models_loaded)

    def test_returns_the_trimmed_transcript(self):
        r = post("tagalog")
        self.assertEqual(r.json(), {"language": "tagalog", "transcript": "Kumusta po"})

    def test_scores_against_the_target(self):
        body = post("tagalog", target="kumusta po").json()
        self.assertEqual(body["target"], "kumusta po")
        self.assertEqual(body["similarity"], 1.0)
        self.assertLess(post("tagalog", target="salamat").json()["similarity"], 0.5)

    def test_language_is_case_insensitive(self):
        self.assertEqual(post(" Kapampangan ").status_code, 200)

    def test_unknown_language_is_400(self):
        r = post("klingon")
        self.assertEqual(r.status_code, 400)
        self.assertIn("language must be one of", r.json()["detail"])

    def test_missing_language_is_422(self):
        self.assertEqual(post(None).status_code, 422)

    def test_too_short_recording_is_422(self):
        r = post("tagalog", seconds=0.05)
        self.assertEqual(r.status_code, 422)
        self.assertEqual(r.json()["detail"], "Recording is too short.")


if __name__ == "__main__":
    unittest.main(verbosity=2)
