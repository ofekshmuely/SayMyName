const output = document.getElementById("output");
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.lang = "he-IL"; // Set language to Hebrew
recognition.interimResults = true;
recognition.continuous = true;

let isRecognizing = false;

recognition.onresult = (event) => {
  let transcript = "";
  for (let i = 0; i < event.results.length; i++) {
    transcript += event.results[i][0].transcript;
  }
  output.textContent = transcript;
};

recognition.onerror = (event) => {
  console.error("Error occurred in recognition:", event.error);
};

function toggleRecognition() {
  if (isRecognizing) {
    recognition.stop();
    isRecognizing = false;
  } else {
    recognition.start();
    isRecognizing = true;
  }
}
