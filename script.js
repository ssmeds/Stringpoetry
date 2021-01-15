// let form = document.createElement("FORM");
// form.setAttribute("id", "userForm");
// document.body.appendChild(form);

let input = document.createElement("INPUT");
input.setAttribute("id", "userInput");
document.body.appendChild(input);

input.addEventListener("keypress", function (e) {
  let userNumber = document.getElementById("userInput").value;
  if (e.key === 'Enter') {
    
    if (userNumber > 15) {
      alert("Please enter a number under 16.");
    }
    randomWords(userNumber);
  }
})

function randomWords(userNumber) {
  let randomNumber = 0;

  for (let i = 0; i <= userNumber - 1; i++) {
    randomNumber = Math.floor(Math.random(2) * Math.floor(16));
    // randomNumber++;
    console.log(words[randomNumber]);
    let userWordsDisplay = document.createElement("DIV");
    userWordsDisplay.innerHTML = words[randomNumber];
    userWordsDisplay.innerHTML = "";
    document.body.insertAdjacentElement("beforeend",userWordsDisplay);
  }
}


// let userNumberInput = document.createElement("INPUT");
// document.body.appendChild(userNumberInput);
// let userNumber = userNumberInput.value;
// console.log(userNumber);

// let userNumberBtn = document.createElement("BUTTON");
// document.body.appendChild(userNumberBtn);
// userNumberBtn.innerHTML = "Click me!";

// userNumberBtn.addEventListener("click", function () {
//   // let randomNumber = Math.floor(Math.random(2) * Math.floor(16));
//   console.log(userNumber);
// })


// Skapa en array med 15 korta ord
const words = ["dog", "hello", "for", "bye", "good", "jacket", "high", "pale", "young", "ball", "vegetable", "cat", "bicycle", "car", "computer"];

// Skapa en ny tom array som ska innehålla alla ord man klickar på
const newWordsArray = [];

// Skapa en for-loop som skapar en knapp per ord i arrayen
for (let i = 0; i < words.length; i++) {
  let btn = document.createElement("BUTTON");
  document.body.appendChild(btn)
  btn.setAttribute("class", "btn");
  btn.setAttribute("id", words[i]);
  btn.innerHTML = words[i];

  let wordBtn = document.getElementById(words[i]);

  wordBtn.addEventListener("click", function () {

    newWordsArray.push(words[i]);
    console.log(words[i]);
    console.log(newWordsArray);
    this.style.backgroundColor = "red";
  })
}

let printBtn = document.createElement("BUTTON");
printBtn.setAttribute("id", "printBtn");
printBtn.innerHTML = "Print!";
document.body.appendChild(printBtn);

let stringDisplay = document.createElement("DIV");
stringDisplay.setAttribute("id", "stringDisplay");
stringDisplay.setAttribute("height", "200px");

document.body.appendChild(stringDisplay);

printBtn.addEventListener("click", function () {
  let joinedArray = newWordsArray.join(" ");
  stringDisplay.innerHTML = "";
  stringDisplay.insertAdjacentHTML("beforeend", joinedArray);
})