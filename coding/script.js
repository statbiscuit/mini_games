import { getRandomNarrative } from './narratives.js';

const typingText = document.querySelector(".typing-text p"),
  inpField = document.querySelector(".wrapper .input-field"),
  tryAgainBtn = document.querySelector(".content button"),
  timeTag = document.querySelector(".time span b"),
  mistakeTag = document.querySelector(".mistake span"),
  wpmTag = document.querySelector(".wpm span"),
  cpmTag = document.querySelector(".cpm span"),
  narrativeDiv = document.getElementById("narrative"),
  outcomeDiv = document.getElementById("outcome");

let timer,
  maxTime = 15,
  timeLeft = maxTime,
  charIndex = 0,
  mistakes = 0,
  isTyping = false;

let currentNarrative;

// Initialize the game
function startGame() {
  resetGameState();
  currentNarrative = getRandomNarrative();
  displayNarrativeIntro();
}

// Display narrative introduction
function displayNarrativeIntro() {
  narrativeDiv.innerHTML = `
    <h2>${currentNarrative.title}</h2>
    <p>${currentNarrative.intro}</p>
    <button id="startChallenge">Start Typing Challenge</button>
  `;
  narrativeDiv.style.display = "block";
  outcomeDiv.style.display = "none";

  document.getElementById("startChallenge").addEventListener("click", () => {
    narrativeDiv.style.display = "none";
    loadParagraph();
    inpField.focus();
  });
}

// Load paragraph for typing challenge
function loadParagraph() {
  const ranIndex = Math.floor(Math.random() * paragraphs.length);
  typingText.innerHTML = "";
  paragraphs[ranIndex].split("").forEach((char) => {
    let span = `<span>${char}</span>`;
    typingText.innerHTML += span;
  });
  typingText.querySelectorAll("span")[0].classList.add("active");

  inpField.value = "";
  inpField.addEventListener("input", initTyping);
}

// Typing logic
function initTyping() {
  let characters = typingText.querySelectorAll("span");
  let typedChar = inpField.value.split("")[charIndex];
  if (charIndex < characters.length - 1 && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }
    if (typedChar == null) {
      if (charIndex > 0) {
        charIndex--;
        if (characters[charIndex].classList.contains("incorrect")) {
          mistakes--;
        }
        characters[charIndex].classList.remove("correct", "incorrect");
      }
    } else {
      if (characters[charIndex].innerText === typedChar) {
        characters[charIndex].classList.add("correct");
      } else {
        mistakes++;
        characters[charIndex].classList.add("incorrect");
      }
      charIndex++;
    }
    characters.forEach((span) => span.classList.remove("active"));
    characters[charIndex].classList.add("active");

    let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

    wpmTag.innerText = wpm;
    mistakeTag.innerText = mistakes;
    cpmTag.innerText = charIndex - mistakes;
  } else {
    evaluateSolution();
  }
}

// Timer logic
function initTimer() {
    if (timeLeft > 0) {
      timeLeft--;
      timeTag.innerText = timeLeft;
    } else {
      // Timer ran out, evaluate solution
      evaluateSolution();
    }
  }

// Evaluate the player's performance
function evaluateSolution() {
  clearInterval(timer);
  inpField.value = "";

  // Failure if the user hasn't finished typing or made too many mistakes
  const isIncomplete = charIndex < typingText.querySelectorAll("span").length;
  const hasTooManyMistakes = mistakes > 5; // Adjust this threshold as needed

  const success = !isIncomplete && !hasTooManyMistakes;
  
  outcomeDiv.innerHTML = `
    <h2>${success ? "Success!" : "Failure!"}</h2>
    <p>${success ? currentNarrative.success : currentNarrative.failure}</p>
    <button id="restartGame">Play Again</button>
  `;
  outcomeDiv.style.display = "block";
  narrativeDiv.style.display = "none";

  document.getElementById("restartGame").addEventListener("click", startGame);
}

// Reset the game state
function resetGameState() {
  clearInterval(timer);
  timeLeft = maxTime;
  charIndex = mistakes = 0;
  isTyping = false;

  inpField.value = "";
  timeTag.innerText = timeLeft;
  wpmTag.innerText = 0;
  mistakeTag.innerText = 0;
  cpmTag.innerText = 0;
}

// Start the game when the page loads
document.addEventListener("DOMContentLoaded", startGame);
