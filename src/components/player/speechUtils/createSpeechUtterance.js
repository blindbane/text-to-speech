function createSpeechUtterance(text, rate, voice, voices, cb) {
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voices.find(v => v.name === voice.name);
  utterance.rate = rate;

  utterance.onend = function(event) {
    // console.log(
    //   'Utterance has finished being spoken after ' +
    //     event.elapsedTime +
    //     ' milliseconds.'
    // );
    cb();
  };

  return utterance;
}

export default createSpeechUtterance;
