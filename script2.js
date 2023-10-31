let playGame = true;
let numGuess = 1;

let randomNumber = parseInt(Math.random() * 10 + 1);
console.log(`randomNumber : ${randomNumber}`);
const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const lowOrHi = document.querySelector(".lowOrHi");
const prevGuess = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const newG = document.querySelector(".resultParas");

p = document.createElement("p");

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    if (guess === 0 || guess < 0 || guess > 10 || isNaN(guess)) {
      alert(`please enter a valid number`);
    } else {
      checkGuess(guess);
      displayGuess(guess);
    }
  });
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    lowOrHi.innerHTML = `Awesome! You guessed it right`;
    endGame();
    newGame();
  } else if (numGuess === 3) {
    lowOrHi.innerHTML = `Game Over ! and the random number was ${randomNumber} <b>Play again<b>`;
    endGame();
    newGame();
  } else if (guess < randomNumber) {
    lowOrHi.innerHTML = `Guessed number too low`;
  } else if (guess > randomNumber) {
    lowOrHi.innerHTML = `Guessed number too high`;
  }
}

function displayGuess(guess) {
  userInput.value = "";
  prevGuess.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = 4 - numGuess;
}

function endGame() {
  userInput.setAttribute("disabled", "");
  p.innerHTML = `<h2 id = 'newGame'>Start a new game</h2>`;
  newG.appendChild(p);
  newGame();
}

function newGame() {
  const startOver = document.querySelector("#newGame");
  startOver.addEventListener("click", function (e) {
    userInput.removeAttribute("disabled");
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess.innerHTML = "";
    numGuess = 1;
    console.log(`randomNumber: ${randomNumber}`);
    lowOrHi.innerHTML = ''
    p.innerHTML = ''
  });
}
