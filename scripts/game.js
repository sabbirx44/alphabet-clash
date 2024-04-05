// game.js
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;

    // Stop the game if pressed "ESC"
    if (playerPressed === 'Escape') {
        gameOver();
        return;
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();

    if (playerPressed === currentAlphabet) {
        updateScore();
        continueGame();
    } else {
        updateLife();
        if (getTextElementValueById('life') === 0) {
            gameOver();
        }
    }
}

function continueGame() {
    const alphabet = getARandomAlphabet();
    setAlphabetOnScreen(alphabet);
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home');
    hideElementById('final-score');
    showElementById('playground');

    setTextElementValueById('life', 5);
    setTextElementValueById('score', 0);
    continueGame();
}

function gameOver() {
    hideElementById('playground');
    showElementById('final-score');

    const lastScore = getTextElementValueById('score');
    setTextElementValueById('point', lastScore);
    removeBackgroundColorById(getElementTextById('current-alphabet'));
}

function updateScore() {
    const currentScore = getTextElementValueById('score');
    const newScore = currentScore + 1;
    setTextElementValueById('score', newScore);
}

function updateLife() {
    const life = getTextElementValueById('life');
    const newLife = life - 1;
    setTextElementValueById('life', newLife);
}

function setAlphabetOnScreen(alphabet) {
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
}

document.addEventListener('keyup', handleKeyboardButtonPress);