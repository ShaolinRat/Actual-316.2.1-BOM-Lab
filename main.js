let gameStarted = false;
let numberToGuess = null;
let playerGuess = null;

function testNumber(guess) {
  if (guess < numberToGuess) {
    document.getElementById("feedback").textContent =
      "Too LOW. Try a bigger number!";
    document.getElementById("number-guess").focus();
  } else if (guess > numberToGuess) {
    document.getElementById("feedback").textContent =
      "Too HIGH. Try going smaller this time!";
    document.getElementById("number-guess").focus();
  } else {
    document.getElementById("feedback").textContent =
      "You got it!!! Well done!";
    gameStarted = false;
    numberToGuess = null;
    document.getElementById("number-guess").focus();
    setInterval(() => {
      document.getElementById("feedback").textContent =
        "Lets see if you can guess the random number between 1 and 100!";
      document.getElementById("number-guess").value = "";
    }, 3000);
  }
}

function startGame() {
  gameStarted = true;
  numberToGuess = Math.floor(Math.random() * 100) + 1;
  testNumber(playerGuess);
}

document.getElementById("submit").addEventListener("click", () => {
  console.log(gameStarted);
  if (!gameStarted) {
    playerGuess = document.getElementById("number-guess").value;
    startGame();
  } else {
    playerGuess = document.getElementById("number-guess").value;
    testNumber(playerGuess);
  }
});
