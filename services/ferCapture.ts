// Takes one face photo from the speaking camera's photo output and returns it
// as a square FER_INPUT_SIZE image, for the FER collector and the model.
//
// Uses the camera that's already on screen (PracticeCamera's extra output),
// so no second or hidden camera is opened.
//
// Experimental: the centre crop and the rotation for each orientation are
// unverified; check saved photos on a physical Android device.
import type { CameraPhotoOutput } from "react-native-vision-camera";

import { FER_INPUT_SIZE } from "../utils/fer";

type Photo = Awaited<ReturnType<CameraPhotoOutput["capturePhoto"]>>;
export type FERImage = Awaited<ReturnType<Photo["toImageAsync"]>>;

const ROTATION: Record<string, number> = { up: 0, right: 90, down: 180, left: 270 };

// The collector and the model share one camera; skip a capture while
// another is still running.
let busy = false;

export async function captureFaceImage(
  photoOutput: CameraPhotoOutput,
  size = FER_INPUT_SIZE,
): Promise<FERImage | null> {
  if (busy) return null;
  busy = true;
  let photo: Photo | null = null;
  try {
    photo = await photoOutput.capturePhoto(
      { flashMode: "off", enableShutterSound: false },
      {},
    );
    let image = await photo.toImageAsync();
    const degrees = ROTATION[photo.orientation] ?? 0;
    if (degrees) image = await image.rotateAsync(degrees);
    const side = Math.min(image.width, image.height);
    const x = Math.round((image.width - side) / 2);
    const y = Math.round((image.height - side) / 2);
    const square = await image.cropAsync(x, y, x + side, y + side);
    return await square.resizeAsync(size, size);
  } finally {
    photo?.dispose();
    busy = false;
  }
}
