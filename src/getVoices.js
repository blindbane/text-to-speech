const getVoices = new Promise((resolve, reject) => {
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      const voices = window.speechSynthesis.getVoices();
      resolve(voices);
    };
  } else {
    const voices = window.speechSynthesis.getVoices();
    resolve(voices);
  }
  reject(new Error("Speech API only supported by Chrome and FireFox."));
});

export default getVoices;
