//This is js file

let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelector = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelector.options[i] = new Option(voice.name, i))
  );
};

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});

voiceSelector.addEventListener("change", () => {
  speech.voice = voices[voiceSelector.value];
});
