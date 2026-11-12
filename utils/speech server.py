import difflib
import os
import re
import shutil
import subprocess
import tempfile
import uuid

import librosa
import uvicorn
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.responses import HTMLResponse
from transformers import pipeline

MODELS = {
    "tagalog": "sapinsapin/whisper-small-fsc",
    "kapampangan": "sapinsapin/whisper-small-pld-pam",
    "waray": "sapinsapin/whisper-small-pld-war",
}

app = FastAPI(title="Bigkas Speech")
_pipes = {}


def get_pipe(language: str):
    if language not in MODELS:
        raise HTTPException(400, f"language must be one of: {', '.join(MODELS)}")
    if language not in _pipes:
        _pipes[language] = pipeline(
            "automatic-speech-recognition", model=MODELS[language], device=-1
        )
    return _pipes[language]


def load_audio(path: str):
    try:
        audio, _ = librosa.load(path, sr=16000, mono=True)
        return audio
    except Exception:
        pass
    if not shutil.which("ffmpeg"):
        raise HTTPException(
            415,
            "Could not read this audio format and ffmpeg is not installed. "
            "Send a .wav file or install ffmpeg.",
        )
    wav_path = path + ".wav"
    try:
        subprocess.run(
            ["ffmpeg", "-y", "-i", path, "-ar", "16000", "-ac", "1", wav_path],
            check=True, capture_output=True,
        )
        audio, _ = librosa.load(wav_path, sr=16000, mono=True)
        return audio
    except subprocess.CalledProcessError:
        raise HTTPException(415, "ffmpeg could not decode this audio file.")
    finally:
        if os.path.exists(wav_path):
            os.remove(wav_path)


def normalize(text: str) -> str:
    text = text.lower().replace("\u2019", "'")
    text = re.sub(r"[^\w\s']", " ", text)
    return re.sub(r"\s+", " ", text).strip()


@app.get("/health")
def health():
    return {"ok": True, "languages": list(MODELS), "loaded": list(_pipes)}


@app.post("/transcribe")
def transcribe(
    file: UploadFile = File(...),
    language: str = Form(...),
    target: str = Form(""),
):
    pipe = get_pipe(language.lower().strip())

    suffix = os.path.splitext(file.filename or "")[1].lower() or ".wav"
    path = os.path.join(tempfile.gettempdir(), f"bigkas_{uuid.uuid4().hex}{suffix}")
    with open(path, "wb") as f:
        f.write(file.file.read())
    try:
        audio = load_audio(path)
        if len(audio) < 1600:
            raise HTTPException(422, "Recording is too short.")
        text = pipe(audio)["text"].strip()
    finally:
        if os.path.exists(path):
            os.remove(path)

    result = {"language": language, "transcript": text}
    if target.strip():
        score = difflib.SequenceMatcher(
            None, normalize(text), normalize(target)
        ).ratio()
        result["target"] = target
        result["similarity"] = round(score, 3)
    return result


PAGE = """<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bigkas speech test</title>
<style>
  body { font-family: system-ui, sans-serif; max-width: 560px; margin: 24px auto; padding: 0 16px; }
  h1 { font-size: 1.3rem; }
  label { display: block; margin-top: 12px; font-weight: 600; }
  select, input { width: 100%; padding: 8px; font-size: 1rem; box-sizing: border-box; }
  button { margin-top: 16px; padding: 14px 20px; font-size: 1.1rem; cursor: pointer; width: 100%; }
  button.rec { background: #c62828; color: #fff; }
  #status { margin-top: 14px; color: #555; }
  #heard { font-size: 1.8rem; font-weight: 700; margin-top: 10px; word-break: break-word; }
  #score { font-size: 1.1rem; margin-top: 6px; }
</style>
</head>
<body>
<h1>Bigkas speech test</h1>

<label for="lang">Language</label>
<select id="lang">
  <option value="tagalog">Tagalog</option>
  <option value="kapampangan">Kapampangan</option>
  <option value="waray">Waray</option>
</select>

<label for="target">Word to say (optional, gives a score)</label>
<input id="target" placeholder="for example: kumusta">

<button id="btn">Start recording</button>
<div id="status"></div>
<div id="heard"></div>
<div id="score"></div>

<script>
const btn = document.getElementById('btn');
const statusEl = document.getElementById('status');
const heardEl = document.getElementById('heard');
const scoreEl = document.getElementById('score');

let recorder = null;
let chunks = [];
let stream = null;

function encodeWav(samples, sampleRate) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  const write = (o, s) => { for (let i = 0; i < s.length; i++) view.setUint8(o + i, s.charCodeAt(i)); };
  write(0, 'RIFF');
  view.setUint32(4, 36 + samples.length * 2, true);
  write(8, 'WAVE');
  write(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  write(36, 'data');
  view.setUint32(40, samples.length * 2, true);
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return new Blob([buffer], { type: 'audio/wav' });
}

async function toWav16k(blob) {
  const arr = await blob.arrayBuffer();
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const decoded = await ctx.decodeAudioData(arr);
  ctx.close();
  const length = Math.ceil(decoded.duration * 16000);
  const offline = new OfflineAudioContext(1, length, 16000);
  const src = offline.createBufferSource();
  src.buffer = decoded;
  src.connect(offline.destination);
  src.start();
  const rendered = await offline.startRendering();
  return encodeWav(rendered.getChannelData(0), 16000);
}

async function send(wav) {
  const fd = new FormData();
  fd.append('file', wav, 'speech.wav');
  fd.append('language', document.getElementById('lang').value);
  fd.append('target', document.getElementById('target').value);
  statusEl.textContent = 'Listening... (the first time for a language is slow while its model loads)';
  try {
    const res = await fetch('/transcribe', { method: 'POST', body: fd });
    const data = await res.json();
    if (!res.ok) { statusEl.textContent = data.detail || 'Error'; return; }
    statusEl.textContent = 'I heard:';
    heardEl.textContent = data.transcript || '(nothing)';
    if (data.similarity !== undefined) {
      scoreEl.textContent = 'Match with "' + data.target + '": ' + Math.round(data.similarity * 100) + '%';
    }
  } catch (e) {
    statusEl.textContent = 'Request failed: ' + e;
  }
}

btn.addEventListener('click', async () => {
  if (recorder && recorder.state === 'recording') {
    recorder.stop();
    return;
  }
  heardEl.textContent = '';
  scoreEl.textContent = '';
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (e) {
    statusEl.textContent = 'Microphone not available. Allow it in the browser, and open this page at http://127.0.0.1:8001';
    return;
  }
  chunks = [];
  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = async () => {
    stream.getTracks().forEach(t => t.stop());
    btn.classList.remove('rec');
    btn.textContent = 'Start recording';
    statusEl.textContent = 'Processing...';
    try {
      const wav = await toWav16k(new Blob(chunks));
      await send(wav);
    } catch (e) {
      statusEl.textContent = 'Could not process the recording: ' + e;
    }
  };
  recorder.start();
  btn.classList.add('rec');
  btn.textContent = 'Stop recording';
  statusEl.textContent = 'Recording... say the word, then press Stop.';
});
</script>
</body>
</html>
"""


@app.get("/", response_class=HTMLResponse)
def home():
    return PAGE


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)