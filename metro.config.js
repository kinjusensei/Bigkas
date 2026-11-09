// Expo's default Metro config, plus .tflite so the trained FER model
// (assets/models/fer_bigkas.tflite) can be bundled with require().
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push("tflite");

module.exports = config;
