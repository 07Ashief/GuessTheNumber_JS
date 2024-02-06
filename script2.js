// Initializing game variables
let playGame = true;
let numGuess = 1;
let randomNumber = parseInt(Math.random() * 10 + 1);

// Logging the random number to the console
console.log(`randomNumber : ${randomNumber}`);

// Selecting HTML elements
const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const lowOrHi = document.querySelector(".lowOrHi");
const prevGuess = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const newG = document.querySelector(".resultParas");

// Creating a paragraph element
let p = document.createElement("p");

// Checking if the game is ongoing
if (playGame) {
  // Adding a click event listener to the submit button
  submit.addEventListener("click", function (e) {
    // Preventing default form submission behavior
    e.preventDefault();

    // Extracting the user's guess from the input field
    const guess = parseInt(userInput.value);

    // Checking if the guess is valid
    if (guess === 0 || guess < 0 || guess > 100 || isNaN(guess)) {
      alert(`Please enter a valid number`);
    } else {
      // Checking the guess and displaying the result
      checkGuess(guess);
      displayGuess(guess);
    }
  });
}

// Function to check the user's guess
function checkGuess(guess) {
  if (guess === randomNumber) {
    // Displaying a message for a correct guess
    lowOrHi.innerHTML = `Awesome! You guessed it right`;

    // Ending and starting a new game
    endGame();
    newGame();
  } else if (numGuess === 10) {
    // Displaying a message for reaching the maximum number of guesses
    lowOrHi.innerHTML = `Game Over! The random number was ${randomNumber}. <b>Play again</b>`;

    // Ending and starting a new game
    endGame();
    newGame();
  } else if (guess < randomNumber) {
    // Displaying a message for a low guess
    lowOrHi.innerHTML = `Guessed number too low`;
  } else if (guess > randomNumber) {
    // Displaying a message for a high guess
    lowOrHi.innerHTML = `Guessed number too high`;
  }
}

// Function to display the user's guess
function displayGuess(guess) {
  // Resetting the input field
  userInput.value = "";

  // Displaying the guess in the previous guesses section
  prevGuess.innerHTML += `${guess}, `;

  // Incrementing the guess count
  numGuess++;

  // Displaying the remaining guesses
  remaining.innerHTML = 11 - numGuess;
}

// Function to end the game
function endGame() {
  // Disabling the input field
  userInput.setAttribute("disabled", "");

  // Creating a new game button
  p.innerHTML = `<h2 id='newGame'>Start a new game</h2>`;
  newG.appendChild(p);

  // Starting a new game when the button is clicked
  newGame();
}

// Function to start a new game
function newGame() {
  // Selecting the new game button
  const startOver = document.querySelector("#newGame");

  // Adding a click event listener to the new game button
  startOver.addEventListener("click", function (e) {
    // Enabling the input field
    userInput.removeAttribute("disabled");

    // Generating a new random number
    randomNumber = parseInt(Math.random() * 10 + 1);

    // Resetting the previous guesses section and guess count
    prevGuess.innerHTML = "";
    numGuess = 1;

    // Logging the new random number to the console
    console.log(`randomNumber: ${randomNumber}`);

    // Resetting the lowOrHi and p elements
    lowOrHi.innerHTML = "";
    p.innerHTML = "";
  });
}

/* Notes

Game Initialization: Initializing variables for game state, guess count, and a random number.
HTML Element Selection: Selecting relevant HTML elements using query selectors.
Random Number Generation: Generating a random number for the user to guess.
Event Listeners: Adding event listeners to the submit button and the new game button.
Guess Checking: Verifying the user's guess against the random number and displaying appropriate messages.
Displaying Guesses: Showing the user's guesses in the UI and updating the remaining guess count.
Ending the Game: Disabling the input field, displaying a new game button, and handling new game initiation.
New Game Function: Enabling the input field, generating a new random number, and resetting game-related elements when starting a new game.


*/