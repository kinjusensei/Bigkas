import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { CAMERA_PROBLEM_TEXT, classifyCameraError } from "./cameraErrors.ts";

describe("classifyCameraError", () => {
  test("the Android privacy switch / device policy error", () => {
    assert.equal(
      classifyCameraError(new Error("Camera is disabled, probably due to a device policy!")),
      "disabled",
    );
    assert.equal(classifyCameraError({ message: "system/camera-is-restricted" }), "disabled");
  });

  test("camera already in use", () => {
    assert.equal(classifyCameraError(new Error("Camera is already in use by another app")), "in-use");
    assert.equal(classifyCameraError("device/camera-already-in-use"), "in-use");
    assert.equal(classifyCameraError(new Error("The maximum number of cameras are open")), "in-use");
  });

  test("permission and missing device", () => {
    assert.equal(classifyCameraError(new Error("Camera permission denied")), "permission");
    assert.equal(classifyCameraError(new Error("No camera device found")), "no-device");
  });

  test("anything else, including empty values", () => {
    assert.equal(classifyCameraError(new Error("Something odd")), "other");
    assert.equal(classifyCameraError(undefined), "other");
    assert.equal(classifyCameraError(null), "other");
  });

  test("the privacy message is the one the app shows", () => {
    assert.match(CAMERA_PROBLEM_TEXT.disabled.body, /Camera Access in your Android Quick Settings/);
  });
});
