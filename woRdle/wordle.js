import {
  statisticalFunction,
  baseRFunctions,
  dataFrameFunctions,
  dplyrFunctions,
  tidyrFunctions,
  ggplot2Functions,
  stringRFunctions,
  generalTidyverseFunctions,
  magickFunctions,
  lubridateFunctions,
  playWordBank
} from "./words.js";

// Elements
const modeSelection = document.getElementById("mode-selection");
const subcategorySelection = document.getElementById("subcategory-selection");
const wordleGame = document.getElementById("wordle-game");
const playButton = document.getElementById("play-mode");
const learnButton = document.getElementById("learn-mode");
const backButton = document.getElementById("back-to-mode");
const subcategoryButtons = document.querySelectorAll(".subcategory-button");

// Hide all sections initially except mode selection
subcategorySelection.style.display = "none";
wordleGame.style.display = "none";

// Game Variables
let win = false;
let lose = false;
let numberOfLetters = 0;
let currentWord = 1;
let currentWordOfTheDay = "";

// Event Listeners for Mode Selection
playButton.addEventListener("click", () => {
  modeSelection.style.display = "none";
  wordleGame.style.display = "block";
  startGame("playWordBank"); // Use full word bank
});

learnButton.addEventListener("click", () => {
  modeSelection.style.display = "none";
  subcategorySelection.style.display = "flex"; // Show subcategories
});

backButton.addEventListener("click", () => {
  // Hide subcategory selection
  subcategorySelection.style.display = "none";

  // Ensure the game is completely hidden and not initialized
  wordleGame.style.display = "none";
  modeSelection.style.display = "flex"; // Show mode selection screen

  // Clear the game board completely
  document.querySelector(".wordle-words").innerHTML = "";
  document.querySelector(".keyboard").innerHTML = "";

  // Remove any ongoing game session
  selectedWordBank = [];
  currentWordOfTheDay = "";
  win = false;
  lose = false;
  numberOfLetters = 0;
  currentWord = 1;
});

subcategoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const category = event.target.dataset.category;
    if (!category) return; // Prevents accidental triggers

    // Hide subcategories and show the game only when a category is selected
    subcategorySelection.style.display = "none";
    wordleGame.style.display = "block"; // Game should only show if a subcategory is chosen
    startGame(category); // Start game with selected category
  });
});

// Start Game Function
let selectedWordBank = []; // Global variable to store the current word bank

function startGame(wordBankCategory) {
  switch (wordBankCategory) {
    case "statisticalFunction":
      selectedWordBank = statisticalFunction;
      break;
    case "baseRFunctions":
      selectedWordBank = baseRFunctions;
      break;
    case "dataFrameFunctions":
      selectedWordBank = dataFrameFunctions;
      break;
    case "dplyrFunctions":
      selectedWordBank = dplyrFunctions;
      break;
    case "tidyrFunctions":
      selectedWordBank = tidyrFunctions;
      break;
    case "ggplot2Functions":
      selectedWordBank = ggplot2Functions;
      break;
    case "stringRFunctions":
      selectedWordBank = stringRFunctions;
      break;
    case "generalTidyverseFunctions":
      selectedWordBank = generalTidyverseFunctions;
      break;
    case "magickFunctions":
      selectedWordBank = magickFunctions;
      break;
    case "lubridateFunctions":
      selectedWordBank = lubridateFunctions;
      break;
    case "playWordBank": // Default for Play mode
    default:
      selectedWordBank = playWordBank;
  }

  console.log(`Starting game with category: ${wordBankCategory}`);
  initGame(selectedWordBank);
}

function initGame(wordBank) {
  // Select a random word from the word bank
  const randomIndex = Math.floor(Math.random() * wordBank.length);
  const selectedWordData = wordBank[randomIndex];
  const selectedWord = selectedWordData.word;
  const wordDescription = selectedWordData.description; // Get the description
  currentWordOfTheDay = selectedWord.toUpperCase();
  console.log(`Word of the Day: ${currentWordOfTheDay}`);

  // Store the word description globally
  window.currentWordDescription = wordDescription;

  resetGame();

  // Generate grid dynamically based on word length
  generateGrid(selectedWord.length);
  generateKeyboard();
}

// Ensure that handleInputs only listens to a single `keydown` event
document.removeEventListener("keydown", handleKeyDown);
document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  const key = event.key;
  if (key === "Backspace" || key === "Enter" || isLetter(key)) {
    handleInputs(key.toUpperCase()); // Normalize key to uppercase
  }
}

// Buttons
const newWordButton = document.getElementById("new-word-button");
const homeButton = document.getElementById("home-button");

// Hint button
const hintButton = document.getElementById("hint-button");
const hintContainer = document.getElementById("hint-container");
const hintText = document.getElementById("hint-text");

// Event Listener for "Home"
homeButton.addEventListener("click", () => {
  resetGame();
  wordleGame.style.display = "none"; // Hide the game
  modeSelection.style.display = "flex"; // Show the mode selection screen
});

newWordButton.addEventListener("click", () => {
  resetGame();
  initGame(selectedWordBank); // Restart the game with the same word bank
  
  // ✅ Ensure the Hint button is visible when starting a new word
  hintButton.style.display = "block"; 
});


// Event listener for the Hint button
hintButton.addEventListener("click", () => {
  hintText.textContent = window.currentWordDescription; // Display the hint
  hintContainer.classList.remove("hidden"); // Make the hint container visible
});

function resetGame() {
  win = false;
  lose = false;
  numberOfLetters = 0;
  currentWord = 1;

  clearGrid();
  clearKeyboard();
  clearHint();
}

function clearGrid() {
  document.querySelector(".wordle-words").innerHTML = "";
}

function clearKeyboard() {
  document.querySelector(".keyboard").innerHTML = "";
}

function clearHint() {
  hintText.textContent = ""; // Clear the hint text
  hintContainer.classList.add("hidden"); // Hide the hint container
  hintButton.classList.remove("hidden"); // Ensure the Hint button is visible
  hintButton.disabled = false; // Ensure the Hint button is enabled
}

// Generate Grid
function generateGrid(wordLength, maxAttempts = 6) {
  const gridContainer = document.querySelector(".wordle-words");
  gridContainer.innerHTML = "";

  // Create rows and letter boxes
  for (let i = 0; i < maxAttempts; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < wordLength; j++) {
      const box = document.createElement("div");
      box.classList.add("letter-box");
      box.id = `letter-${i * wordLength + j + 1}`; // Unique ID for each box
      row.appendChild(box);
    }
    gridContainer.appendChild(row);
  }
}

// Generate Keyboard
function generateKeyboard() {
  const keyboardContainer = document.querySelector(".keyboard");

  // Clear existing keyboard
  keyboardContainer.innerHTML = "";

  // Define the keyboard layout
  const keyboardLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Backspace"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Enter"],
    ["Z", "X", "C", "V", "B", "N", "M", "_", "."],
  ];

  // Create rows of keys
  keyboardLayout.forEach((row) => {
    const kbRow = document.createElement("div");
    kbRow.classList.add("kb-line");

    row.forEach((key) => {
      const button = document.createElement("button");
      button.classList.add("key-button");
      button.dataset.key = key; // Store the key value for easy access
      button.textContent = key === "Backspace" ? "←" : key; // Use a symbol for Backspace
      button.setAttribute("aria-label", `Key ${key}`); // Accessibility label

      // Append the button to the row
      kbRow.appendChild(button);
    });

    // Append the row to the keyboard container
    keyboardContainer.appendChild(kbRow);
  });

  // Add event listeners to the dynamically created buttons
  const buttons = document.querySelectorAll(".key-button");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const key = event.target.dataset.key;
      handleInputs(key); // Use handleInputs for key handling
    });
  });
}

// Handle Inputs
function handleInputs(value) {
  if (!win && !lose) {
    if (value === "ENTER") {
      enterTyped(currentWordOfTheDay);
    } else if (value === "BACKSPACE") {
      backspaceTyped();
    } else if (isLetter(value)) {
      letterTyped(value);
    }
  }
}

function letterTyped(letter) {
  const wordLength = currentWordOfTheDay.length;
  const maxLetters = wordLength * currentWord;
  if (numberOfLetters < maxLetters) {
    numberOfLetters++;
    const letterBox = document.getElementById(`letter-${numberOfLetters}`);
    letterBox.innerText = letter.toUpperCase();
  }
}

function backspaceTyped() {
  if (numberOfLetters > (currentWord - 1) * currentWordOfTheDay.length) {
    const letterBox = document.getElementById(`letter-${numberOfLetters}`);
    letterBox.innerText = "";
    numberOfLetters--;
  }
}

function enterTyped(wordOfTheDay) {
  const wordLength = wordOfTheDay.length;
  const startIndex = (currentWord - 1) * wordLength + 1;
  let guessedWord = "";

  // Collect the guessed word
  for (let i = 0; i < wordLength; i++) {
    const letterBox = document.getElementById(`letter-${startIndex + i}`);
    const letter = letterBox.innerText.trim(); // Trim to remove spaces or empty strings
    guessedWord += letter || " "; // Use a space to represent missing letters
  }

  guessedWord = guessedWord.toUpperCase();

  // Validate input
  if (guessedWord.trim().length !== wordLength || guessedWord.includes(" ")) {
    alert("Word is incomplete!");
    return;
  }

  // Style the current row
  styleRow(startIndex, wordLength, wordOfTheDay, guessedWord);

  // Check if the guessed word is correct
  if (guessedWord === wordOfTheDay) {
    win = true;
    winEffect();
    return;
  }

  // Proceed to the next attempt or end the game if guesses are exhausted
  if (currentWord < 6) {
    currentWord++;
  } else {
    lose = true;
    showModal("You Lose!", `The correct word was: ${wordOfTheDay}`);
    hintButton.classList.add("hidden");
    hintButton.disabled = true;
  }
}

function styleRow(startIndex, wordLength, wordOfTheDay, guessedWord) {
  const wordArray = wordOfTheDay.split("");
  const guessedArray = guessedWord.split("");
  const remainingLetters = [...wordArray]; // To track unmatched letters for yellow styling

  // First pass: Style correct letters in the correct position (green)
  for (let i = 0; i < wordLength; i++) {
    const letterBox = document.getElementById(`letter-${startIndex + i}`);
    const letter = guessedArray[i];

    if (wordArray[i] === letter) {
      letterBox.style.backgroundColor = "#6aaa64"; // Green
      letterBox.style.color = "#fff";
      remainingLetters[i] = null; // Mark this position as matched

      // Update the keyboard button for this letter
      const keyButton = document.querySelector(`[data-key="${letter}"]`);
      if (keyButton) {
        keyButton.style.backgroundColor = "#6aaa64"; // Green
        keyButton.style.color = "#fff";
      }
    }
  }

  // Second pass: Style correct letters in the wrong position (yellow)
  for (let i = 0; i < wordLength; i++) {
    const letterBox = document.getElementById(`letter-${startIndex + i}`);
    const letter = guessedArray[i];

    if (wordArray[i] !== letter && remainingLetters.includes(letter)) {
      letterBox.style.backgroundColor = "#c9b458"; // Yellow
      letterBox.style.color = "#fff";
      remainingLetters[remainingLetters.indexOf(letter)] = null; // Mark this letter as matched

      // Update the keyboard button for this letter
      const keyButton = document.querySelector(`[data-key="${letter}"]`);
      if (keyButton) {
        keyButton.style.backgroundColor = "#c9b458"; // Yellow
        keyButton.style.color = "#fff";
      }
    } else if (wordArray[i] !== letter) {
      // Incorrect letter (gray)
      letterBox.style.backgroundColor = "#787c7e"; // Gray
      letterBox.style.color = "#fff";

      // Update the keyboard button for this letter
      const keyButton = document.querySelector(`[data-key="${letter}"]`);
      if (keyButton) {
        keyButton.style.backgroundColor = "#787c7e"; // Gray
        keyButton.style.color = "#fff";
      }
    }
  }
}

function isLetter(key) {
  return /^[a-zA-Z_.]$/.test(key);
}

function winEffect() {
  showModal("You Win!", "Congratulations on guessing the correct word!");
  document.querySelector(".wordle-title").classList.add("win-animation");
  
  // Disable keyboard input
  document.querySelectorAll(".key-button").forEach((button) => {
    button.disabled = true;
  });

  // ✅ Hide the Hint button
  hintButton.style.display = "none"; 
}


function showModal(title, message) {
  const modal = document.getElementById("result-modal");
  const resultTitle = document.getElementById("result-title");
  const resultMessage = document.getElementById("result-message");
  const closeButton = document.getElementById("close-modal");

  resultTitle.textContent = title;
  resultMessage.textContent = message;

  modal.classList.remove("hidden");

  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    resetGame();
  });
}
