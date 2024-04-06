// Utility functions

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function setElementTextById(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerText = text;
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    return element.innerText;
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomIndex = Math.round(Math.random() * 25);
    return alphabets[randomIndex];
}

function increaseScore(score) {
    return score + 1;
}

function decreaseLife(life) {
    return life - 1;
}