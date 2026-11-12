// Expo's default Metro config, plus .tflite so the trained FER model
// (assets/models/fer_bigkas.tflite) can be bundled with require().
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push("tflite");

// Don't scan the Python servers' folders (LibreFace, Sapin-sapin speech,
// model weights, temp uploads): they're large and not part of the app.
const ignored = ["libreface_env", "speech_env", "weights_libreface", "tmp", "tmp_uploads", "__pycache__"];
config.resolver.blockList = [
  ...[].concat(config.resolver.blockList ?? []),
  ...ignored.map(
    (name) => new RegExp(`^${__dirname.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\/\\\\]${name}[\\/\\\\].*`),
  ),
];

module.exports = config;
