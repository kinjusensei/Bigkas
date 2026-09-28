import PracticeTone from "./components/Practice/PracticeTone";

export default function ToneTestScreen() {
  return (
    <PracticeTone
      expectedTone="high"
      onToneConfirmed={(result) => {
        console.log("Tone result:", result);
      }}
    />
  );
}
