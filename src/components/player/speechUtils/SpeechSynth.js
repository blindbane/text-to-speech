class SpeechSynth {
  constructor() {
    this.synth = window.speechSynthesis;
  }
  play(utterance) {
    this.synth.speak(utterance);
    return undefined;
  }
  stop() {
    this.synth.cancel();
    return undefined;
  }
  pause() {
    this.synth.pause();
    return undefined;
  }
  resume() {
    this.synth.resume();
  }
}

const synth = new SpeechSynth();

export default synth;
