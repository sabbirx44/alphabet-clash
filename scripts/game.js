// Game state variables
const gameState = {
    life: 5,
    score: 0,
};

// Function to handle keyboard button press events
function handleKeyboardButtonPress(event) {
    // Check if the player pressed the "Escape" key
    if (event.key === 'Escape') {
        // If so, end the game
        gameOver();
        return;
    }

    // Get the current alphabet displayed on the screen
    const currentAlphabet = document.getElementById('current-alphabet').textContent.toLowerCase();

    // Check if the player pressed the correct key
    if (event.key.toLowerCase() === currentAlphabet) {
        // If so, update the score and continue the game
        updateScore();
        continueGame();
    } else {
        // If not, update the player's life
        updateLife();

        // Check if the player has run out of lives
        if (gameState.life === 0) {
            // If so, end the game
            gameOver();
        }
    }
}

// Function to start a new game
function play() {
    // Hide the home and final score sections
    hideElement('home');
    hideElement('final-score');

    // Show the playground section
    showElement('playground');

    // Reset the player's life and score
    setElementText('life', 5);
    setElementText('score', 0);

    // Start the game
    continueGame();
}

// Function to update the game and display a new random alphabet
function continueGame() {
    // Get a new random alphabet
    const alphabet = getRandomAlphabet();

    // Display the new alphabet on the screen
    setAlphabetOnScreen(alphabet);

    // Set the background color for the new alphabet
    setBackgroundColorByElement(document.getElementById(alphabet));
}

// Function to end the game
function gameOver() {
    // Hide the playground section
    hideElement('playground');

    // Show the final score section
    showElement('final-score');

    // Display the final score
    setElementText('point', gameState.score);

    // Remove the background color from the last alphabet
    setBackgroundColorByElement(document.getElementById(getElementText('current-alphabet')), false);
}

// Function to update the player's score
function updateScore() {
    // Increment the score
    gameState.score += 1;

    // Update the score display
    setElementText('score', gameState.score);
}

// Function to update the player's life
function updateLife() {
    // Decrement the life
    gameState.life -= 1;

    // Update the life display
    setElementText('life', gameState.life);
}

// Function to set the alphabet on the screen
function setAlphabetOnScreen(alphabet) {
    document.getElementById('current-alphabet').textContent = alphabet;
}

// Function to hide an element by its ID
function hideElement(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}

// Function to show an element by its ID
function showElement(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}

// Function to set the background color of an element
function setBackgroundColorByElement(element, add = true) {
    if (add) {
        element.classList.add('bg-[#FFA500]');
    } else {
        element.classList.remove('bg-[#FFA500]');
    }
}

// Function to get the text content of an element by its ID
function getElementText(elementId) {
    return document.getElementById(elementId).textContent;
}

// Function to set the text content of an element by its ID
function setElementText(elementId, value) {
    document.getElementById(elementId).textContent = value;
}

// Function to get a random alphabet
function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    return alphabets[Math.floor(Math.random() * 26)];
}

// Add an event listener to capture keyboard button presses
document.addEventListener('keyup', handleKeyboardButtonPress);