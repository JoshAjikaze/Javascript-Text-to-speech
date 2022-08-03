const textarea = document.querySelector("textarea"),
  speechBtn = document.querySelector("button");

console.log(speechBtn);

function textToSpeech(text) {
  let utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance); //speaks out loud
}

speechBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (textarea.value !== "") {
    textToSpeech(textarea.value);
  } else {
    textToSpeech("empty");
  }

  textarea.value = "";
});

let arrrayContainer = document.querySelector("#arrayContainer");
console.log(arrrayContainer);
const array = ["arr1", "arr2", "arr3"];
array.push("New Element");
for (i = 0; i < array.length; i++) {
  let temp = `<p>${array[i]} <button>Done</buton> <button>del</button></p>`;
  arrrayContainer.innerHTML += temp;
}
