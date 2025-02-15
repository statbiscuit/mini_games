const wordDisplay = document.querySelector(".word-display"); // Points to the area where the word (guessed) so far will appear
const guessesText = document.querySelector(".guesses-text b"); // Points to the text showing how many guesses the player has made
const keyboardDiv = document.querySelector(".keyboard"); // Refers to the on-screen keyboard where players click letters
const hangmanImage = document.querySelector(".hangman-box img"); // Refers to the image of the hangman (or equivalent) that changes as guesses go wrong
const gameModal = document.querySelector(".game-modal"); // Points to the modal window that shows at the end of the game
const playAgainBtn = gameModal.querySelector("button"); // Refers to the "Play Again" button inside the modal

// Initializing game variables
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

// Resets the game to its starting state (whenever a word is selected or the game restarts)
const resetGame = () => {
    // Ressetting game variables and UI elements
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/kawakawa_00.png";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

const getRandomWord = () => {
    // Selecting a random word and hint from the wordList
    // const { word, hint } = wordList[1] // Use when testing to see if every word works
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word; // Making currentWord as random word
    document.querySelector(".hint-text b").innerText = hint; // Updates the hint displayed in the .hint-text element
    resetGame(); // Calls resetGame to initialise the game with the new word
}

const gameOver = (isVictory) => {
    // After game complete.. showing modal with relevant details
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("h4").innerText = isVictory ? 'You Win!' : 'Game Over';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

// Main gaim logic to process each letter guessed by the player
const initGame = (button, clickedLetter) => {
    // Checking if clickedLetter is exist on the currentWord
    if(currentWord.includes(clickedLetter)) {
        // Showing all correct letters on the word display
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // If clicked letter doesn't exist then update the wrongGuessCount and hangman image
        wrongGuessCount++;
        hangmanImage.src = `images/kawakawa_${wrongGuessCount}.png`;
    }
    button.disabled = true; // Disabling the clicked button so user can't click again
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Calling gameOver function if any of these condition meets
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

const keyboardRows = [
    ['q', 'w', 'e', 'ē', 'r', 't', 'y', 'u', 'ū', 'i', 'ī', 'o', 'ō', 'p'],
    ['a', 'ā', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

// Get the keyboard row containers
const keyboardDivs = document.querySelectorAll(".keyboard-row");

// Generate buttons for each row
keyboardRows.forEach((row, rowIndex) => {
    row.forEach((letter) => {
        const button = document.createElement("button");
        button.innerText = letter;
        button.addEventListener("click", (e) => initGame(e.target, letter));
        keyboardDivs[rowIndex].appendChild(button);
    });
});

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);
