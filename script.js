let randomNum = Math.floor(Math.random() * 100) + 1; // Generate random number
let attempts = 0;

function number_guessing_game() {
    let userGuess = parseInt(document.getElementById('guessInput').value); // Get user input
    let message = document.getElementById('message');
    attempts++;

    if (userGuess === randomNum) {
        message.textContent = `Congratulations! You guessed the number ${userGuess} correctly.`;
        message.className = "success";
    } else if (userGuess > randomNum) {
        message.textContent = `Too high! Try again.`;
        message.className = "fail";
    } else {
        message.textContent = `Too low! Try again.`;
        message.className = "fail";
    }

    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
}

function restartGame() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = 'Attempts: 0';
    document.getElementById('message').className = '';
}
