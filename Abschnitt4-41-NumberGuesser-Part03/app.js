/*
GAME FUNCTION:
- Player must guess an umber between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

/*Note: in the console output (Devtools) numbers are colored blue and string are colored black*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI Elements
const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", function() {


  let guess = parseInt(guessInput.value);
  
  //Validate: NaN: not a number
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }
  
  // Check if won
  if(guess === winningNum) {
    // Game Over Won

    gameOver(true, `${winningNum} is correct! Congratulations! You Win!`);
    //
  } else {
    
    // Wrong number
    guessesLeft -= 1;
  
    console.log(guessesLeft);
    

    if(guessesLeft === 0) {
      //Game Over Lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)

    } else {

      // Change border color
      guessInput.style.borderColor = "red";

      // Clear Input
      guessInput.value = "";

      //Game continues - answer wrong
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");



    }
  }

});

// Game Over
function gameOver(won, msg) {
  // Disable input
  guessInput.disabled = true;
  // Change border color
  won === true ? guessInput.style.borderColor = "green" : guessInput.style.borderColor = "red";
  // Set message
  setMessage(msg, guessInput.style.borderColor);
}
// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
