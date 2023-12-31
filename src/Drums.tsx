import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
}
const Drums = ({ audioClip }: DrumProps) => {
  const playSound = (clip: AudioClip) => {
    const sound = document.getElementById(clip.keyTrigger) as HTMLAudioElement;
    sound.volume = 0.15;
    sound.play().catch(console.error);
    document.getElementById("display")!.innerText = clip.description;
  };

  return (
    <button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playSound(audioClip)}
    >
      <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
      {audioClip.keyTrigger}
    </button>
  );
};

export default Drums;
