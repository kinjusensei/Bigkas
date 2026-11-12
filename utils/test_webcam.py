from importlib import import_module

try:
    cv2 = import_module("cv2")
    libreface = import_module("libreface")
except ModuleNotFoundError as e:
    raise SystemExit(
        f"Missing dependency: {e.name}. Install the project's webcam and LibreFace dependencies."
    ) from e

cap = cv2.VideoCapture(0)
print("Press SPACE to analyze a frame, Q to quit")

while True:
    ok, frame = cap.read()
    if not ok:
        print("Could not read from webcam")
        break
    cv2.imshow("LibreFace test", frame)
    key = cv2.waitKey(1) & 0xFF

    if key == ord(" "):
        cv2.imwrite("capture.jpg", frame)
        try:
            r = libreface.get_facial_attributes("capture.jpg")
            strong = {k: v for k, v in r["au_intensities"].items() if v > 0.3}
            print("Expression:", r["facial_expression"])
            print("Strong action units:", strong)
            print("Head pose (pitch, yaw, roll):", r["pitch"], r["yaw"], r["roll"])
        except Exception as e:
            print("No face detected or error:", e)
    elif key == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()