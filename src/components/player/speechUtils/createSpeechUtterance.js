function createSpeechUtterance(text, rate, voice, voices, cb) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voices.find(v => v.name === voice.name);
  utterance.rate = rate;

  utterance.onend = function calledOnSpeechAPIonendEvent() {
    cb();
  };

  return utterance;
}

export default createSpeechUtterance;
