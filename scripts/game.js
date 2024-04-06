// Handles the main game logic
const gameState = {
    score: 0,
    life: 5,
};

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;

    // Stop the game if "ESC" is pressed
    if (playerPressed === 'Escape') {
        gameOver();
        return;
    }

    // Get the expected alphabet to be pressed
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const expectedAlphabet = currentAlphabetElement.innerText.toLowerCase();

    // Check if the pressed key matches the expected alphabet
    if (playerPressed === expectedAlphabet) {
        // Increase the score
        gameState.score = increaseScore(gameState.score);
        setTextElementValueById('score', gameState.score);

        // Start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        // Decrease the life count
        gameState.life = decreaseLife(gameState.life);
        setTextElementValueById('life', gameState.life);

        // Check if the game is over
        if (gameState.life === 0) {
            gameOver();
        }
    }
}

function continueGame() {
    // Generate a random alphabet
    const alphabet = getARandomAlphabet();
    setElementTextById('current-alphabet', alphabet);
    setBackgroundColorById(alphabet);
}

function play() {
    // Hide everything, show only the playground
    hideElementById('home');
    hideElementById('final-score');
    showElementById('playground');

    // Reset score and life
    gameState.score = 0;
    gameState.life = 5;
    setTextElementValueById('life', gameState.life);
    setTextElementValueById('score', gameState.score);

    continueGame();
}

function gameOver() {
    hideElementById('playground');
    showElementById('final-score');

    // Update final score
    setTextElementValueById('point', gameState.score);
    removeBackgroundColorById(getElementTextById('current-alphabet'));
}

document.addEventListener('keyup', handleKeyboardButtonPress);