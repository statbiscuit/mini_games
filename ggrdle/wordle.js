/* Step 1: Dynamic Word Bank Selection */
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

// Event Listener: Play Button
playButton.addEventListener("click", () => {
  modeSelection.style.display = "none";
  wordleGame.style.display = "block";
  startGame("playWordBank"); // Use full word bank
});

// Event Listener: Learn Button
learnButton.addEventListener("click", () => {
  modeSelection.style.display = "none";
  subcategorySelection.style.display = "flex"; // Show subcategories
});

// Event Listener: Back Button
backButton.addEventListener("click", () => {
  subcategorySelection.style.display = "none";
  modeSelection.style.display = "flex"; // Return to mode selection
});

// Event Listener: Subcategory Buttons
subcategoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const category = event.target.dataset.category; // Get category from button
    subcategorySelection.style.display = "none";
    wordleGame.style.display = "block";
    startGame(category); // Start game with selected category
  });
});

// Function to Start the Game
function startGame(wordBankCategory) {
  let selectedWordBank;

  // Determine the correct word bank based on the category
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
      break;
  }

  console.log(`Starting game with category: ${wordBankCategory}`);
  console.log(`Word bank contains ${selectedWordBank.length} words.`);

  // Pass the selected word bank to initialize the game
  initGame(selectedWordBank);
}


function initGame(wordBank) {
  // Select a random word from the word bank
  const randomIndex = Math.floor(Math.random() * wordBank.length);
  const selectedWord = wordBank[randomIndex].word; // Assuming wordBank is an array of { word, description }
  console.log(`Selected word: ${selectedWord}`);

  // Reset game state (implemented below)
  resetGame();

  // Generate grid dynamically based on word length
  generateGrid(selectedWord.length);

  // Pass the selected word to the main game logic
  setupGame(selectedWord);
}

function resetGame() {
  win = false;
  lose = false;
  numberOfLetters = 0;
  currentWord = 1;

  // Clear the game grid and keyboard
  clearGrid();
  clearKeyboard();
}

function clearGrid() {
  const letterBoxes = document.querySelectorAll(".letter-box");
  letterBoxes.forEach((box) => {
    box.innerText = "";
    box.style = ""; // Reset all inline styles
  });
}

function clearKeyboard() {
  const keyboardButtons = document.querySelectorAll(".key-button");
  keyboardButtons.forEach((button) => {
    button.style = ""; // Reset all inline styles
  });
}

// Play Mode
playButton.addEventListener("click", () => {
  modeSelection.style.display = "none";
  wordleGame.style.display = "block";
  startGame("playWordBank"); // Start game with full word bank
});

// Learn Mode Subcategories
subcategoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const category = event.target.dataset.category; // Get category from button
    subcategorySelection.style.display = "none";
    wordleGame.style.display = "block";
    startGame(category); // Start game with the selected category
  });
});

/* Step 2: Dynamic Grid Generation */
function generateGrid(wordLength, maxAttempts = 6) {
  const gridContainer = document.querySelector(".wordle-words");

  // Clear any existing grid
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


/* Existing code */
const letters = document.querySelectorAll(".key-button");
const boxes = document.querySelectorAll(".letter-box");
const loading = document.querySelector(".loading");

let win = false;
let lose = false;
let numberOfLetters = 0;
let currentWord = 1;

let wordlist = ['point','blank', 'count', 'label','spoke','theme','aaply'];

async function init() {
  // Getting the word
    let rand = Math.floor(Math.random() * wordlist.length);
    const processedWord = wordlist[rand]; 

  // Getting the keyboard and virtual keyboard inputs

  document.addEventListener("keydown", function onPressKey(event) {
    const key = event.key;
    handleInputs(key, processedWord.toUpperCase());
  });

  for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener("click", function onPressButton(event) {
      const button = event.target.dataset.key;
      handleInputs(button, processedWord.toUpperCase());
    });
  }
}

// Handle letters
function handleInputs(value, wordOfTheDay) {
  if (!win && !lose) {
    if (value == "Enter") {
      enterTyped(wordOfTheDay);
    } else if (value == "Backspace") {
      backspaceTyped();
    } else if (isLetter(value)) {
      letterTyped(value);
    } else {
      // Numbers and others characters, do nothing
    }
  }
}

function letterTyped(letter) {
  const wordLength = document.querySelector(".row").children.length; // Dynamic word length
  if (
    numberOfLetters % wordLength != 0 ||
    numberOfLetters == 0 ||
    numberOfLetters / wordLength < currentWord
  ) {
    numberOfLetters++;
  }
  document.getElementById("letter-" + numberOfLetters).innerText = letter;
  addLetterAnimation();
}


function backspaceTyped() {
  if (numberOfLetters != 0) {
    const wordLength = document.querySelector(".row").children.length; // Dynamic word length
    removeLetterAnimation();
    if (numberOfLetters % wordLength != 0 || numberOfLetters / currentWord === wordLength) {
      document.getElementById("letter-" + numberOfLetters).innerText = "";
      numberOfLetters--;
    }
  }
}

function enterTyped(wordOfTheDay) {
  const wordLength = document.querySelector(".row").children.length; // Dynamic word length
  let comparativeWord = "";
  let index;

  if (numberOfLetters < wordLength) {
    index = 1;
  } else {
    index = numberOfLetters - wordLength + 1;
  }

  // Build the guessed word
  for (index; index <= numberOfLetters; index++) {
    comparativeWord += document.getElementById("letter-" + index).innerText;
  }

  // Validate the guessed word
  validWordTyped(wordOfTheDay, comparativeWord);
}

				       
function isLetter(key) {
  return /^[a-zA-Z]$/.test(key);
}

// Handle words

function repeatedLettersCouter(word) {
  // This function turns the word into an object, counting every time that a letter appears in the word
  let letters = new Object();
  for (let i = 0; i < word.length; i++) {
    let counter = 1;
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] == word[j]) {
        counter++;
      }
    }
    if (word[i] in letters) {
      continue;
    } else {
      letters[word[i]] = counter;
    }
  }
  return letters;
}

function validWordTyped(wordOfTheDay, comparativeWord) {
  // Styling css
  let position = 0;
  wotdObj = repeatedLettersCouter(wordOfTheDay);
  cwObj = repeatedLettersCouter(comparativeWord);

  for (let i = numberOfLetters - 4; i <= numberOfLetters; i++) {
    const typedCurrentLetter = document.getElementById("letter-" + i);
    typedCurrentLetter.style.color = "#fff";
    for (let j = 0 - 5; j < 5; j++) {
      // Correct letter in th correct place
      if (typedCurrentLetter.innerText === wordOfTheDay[j] && position === j) {
        typedCurrentLetter.style.backgroundColor = "#006400";
        cwObj[typedCurrentLetter.innerText]--;
        wotdObj[typedCurrentLetter.innerText]--;
      } else if (
        typedCurrentLetter.innerText != wordOfTheDay[j] &&
        position === j
      ) {
        typedCurrentLetter.style.backgroundColor = "#888888";
      }
    }
    position++;
    if (typedCurrentLetter.innerText in wotdObj) {
      if (
        cwObj[typedCurrentLetter.innerText] > 0 &&
        wotdObj[typedCurrentLetter.innerText] > 0
      ) {
        typedCurrentLetter.style.backgroundColor = "#daa520";
        cwObj[typedCurrentLetter.innerText]--;
        wotdObj[typedCurrentLetter.innerText]--;
      }
    }
  }

  // Checking whether user won or lost
  if (numberOfLetters / 5 == currentWord) {
    console.log(currentWord);
    if (wordOfTheDay == comparativeWord) {
      win = true;
      winEffect();
      //alert("You win!!");
    } else {
      currentWord++;
      if (currentWord == 7) {
        lose = true;
        alert("You lose :-|");
      }
    }
  }
}

function invalidWordTyped() {
  let flash = numberOfLetters;
  do {
    const animate = document.getElementById("letter-" + flash);
    animate.style.animation = "";
    setTimeout(() => (animate.style.animation = "flash 1s ease"), 5);
    flash--;
  } while (flash % 5 != 0);
}

//Others Css effects
function winEffect() {
  document.querySelector(".wordle-title").classList.add("win-animation");
}

function appearOrDisappearLoading() {
  let visibility = document.querySelector(".loading").style.visibility;
  if (visibility == "hidden") {
    document.querySelector(".loading").style.visibility = "visible";
  } else {
    document.querySelector(".loading").style.visibility = "hidden";
  }
}

function removeLetterAnimation() {
  const animate = document.getElementById("letter-" + numberOfLetters);
  animate.style.animation = "";
  setTimeout(() => (animate.style.animation = "shrinks 0.8s ease"), 5);
}

function addLetterAnimation() {
  const animate = document.getElementById("letter-" + numberOfLetters);
  animate.style.animation = "";
  setTimeout(() => (animate.style.animation = "stretch 0.8s ease"), 5);
}

init();
