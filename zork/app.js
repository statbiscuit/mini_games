/********************************************
               GAME SETUP
 ********************************************/

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');

// Track the player's current room
let currentRoom = 'start';
let gameMode = null; // Current game mode (null until selected)
let modeRooms = null;  // Stores the selected mode’s room structure

// Import rooms
import { dragonHuntRooms } from './rooms/dragonHuntRooms.js';
import { debuggerQuestRooms } from './rooms/debuggerQuestRooms.js';
import { tidyverseTrialsRooms } from './rooms/tidyverseTrialsRooms.js';
import { prophecyRooms } from './rooms/prophecyRooms.js';





/********************************************
             HELPER FUNCTIONS
 ********************************************/

// Display current room description
function displayRoomDescription() {
    if (!modeRooms || !modeRooms[currentRoom]) {
        outputEl.innerHTML += `<span class="red">Error: Room data missing for <span class="green">${currentRoom}</span>.</span>`;
        return;
    }
    let roomDesc = `<div><h3>Welcome to ${gameMode ? gameMode.toUpperCase() : 'zoRk'}!</h3><br>${modeRooms[currentRoom].description}</div>`;
    outputEl.innerHTML = roomDesc;

    // Show challenge if in Debugger's Quest
    if (gameMode === "🛠 debugger's quest" && modeRooms[currentRoom].challenge) {
        outputEl.innerHTML += `<br><span class='green'>${modeRooms[currentRoom].challenge}</span>`;
    }
}

/********************************************
             GAME MODE HANDLING
 ********************************************/
function startGameMode(mode) {
    console.log(`Game mode clicked: ${mode}`);

    const availableModes = {
        "🐉 dragon hunt": dragonHuntRooms,
        "🛠 debugger's quest": debuggerQuestRooms,
        "📊 tidyverse trials": tidyverseTrialsRooms,
        "📂 the package prophecy": prophecyRooms
    };

    if (availableModes[mode]) {
        console.log(`Starting game mode: ${mode}`);
        gameMode = mode;
        modeRooms = availableModes[mode];
        currentRoom = "start";

        document.getElementById("mode-selection").style.display = "none";
        document.getElementById("terminal").style.display = "block";

        displayRoomDescription();
    } else {
        console.error(`Invalid game mode: ${mode}`);
    }
}

/********************************************
             EVENT LISTENERS
 ********************************************/
document.addEventListener("DOMContentLoaded", () => {
    window.startGameMode = startGameMode;

    console.log("Attaching event listeners to game mode buttons...");

    // Attach listeners to mode selection buttons
    document.querySelectorAll("#mode-selection button").forEach(button => {
        button.addEventListener("click", (event) => {
            const selectedMode = event.target.innerText.toLowerCase().trim();
            startGameMode(selectedMode);
        });
    });

    // Keydown listener for game mode selection and command handling
    document.addEventListener("keydown", (event) => {
        if (!gameMode) {
            if (event.key === "1") startGameMode("🐉 dragon hunt");
            else if (event.key === "2") startGameMode("🛠 debugger's quest");
            else if (event.key === "3") startGameMode("📊 tidyverse trials");
            else if (event.key === "4") startGameMode("📂 the package prophecy");
        } else if (event.key === "Enter") {
            const command = inputEl.value.trim().replace(/\s+/g, " ");
            handleCommand(command);
            inputEl.value = '';
        }
    });

    // Display initial message
    displayRoomDescription();
});


/********************************************
             OUTPUT HANDLING
 ********************************************/
function updateOutput(command, output) {
    outputEl.innerHTML += `<div class="prompt">> <span class="green">${command}</span></div><div class="output-line">${output}</div>`;
}

// Improving user input handling
inputEl.focus();
inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const command = inputEl.value.trim().replace(/\s+/g, " "); // Trim and normalize spaces
        handleCommand(command); // Process the command
        inputEl.value = ''; // Clear input field
    }
});

/********************************************
             MOVEMENT HANDLING
 ********************************************/
function handleMovement(command) {
    const direction = command.split(/\s+/)[1]; // Extract direction, handling extra spaces

    if (modeRooms[currentRoom].exits[direction]) {
        currentRoom = modeRooms[currentRoom].exits[direction];
        return modeRooms[currentRoom].description;
    } else {
        return `<span class="red">You can't go that way.</span>`;
    }
}

/********************************************
             COMMAND HANDLING
 ********************************************/
function handleCommand(command) {
    if (!gameMode) {
        updateOutput(command, `<span class="red">Select a game mode first.</span>`);
        return;
    }

    if (command === "") return; // Ignore empty input

    let output = '';
    // General command handling
    if (command.startsWith("go ")) {
        output = handleMovement(command);
    } else if (gameMode === "🛠 debugger's quest"  // Debugger's Quest: Check for challenge solution
        && modeRooms[currentRoom].challenge 
        && command !== "CAI" 
        && command !== "look") {
        if (command === modeRooms[currentRoom].solution) {
            output = `<span class='blue'>Correct! The issue is fixed.</span><br>`;
            output += "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Which way now? AWWOOF</span>";
        } else {
            output = `<span class='red'>Incorrect. Try again.</span> <br>${modeRooms[currentRoom].hint}`;
        }
    } else {
        switch (command) {
            case 'PLAY':
                output = modeRooms[currentRoom].play || "Nothing to play here.";
                break;

            case 'torch':
                output = modeRooms[currentRoom].help || "No torch here.";
                break;

            case 'CAI':
                output = modeRooms[currentRoom].companion || "CAI is silent... maybe there's nothing to hint at.";
                break;

            case 'look':
                displayRoomDescription();
                return;

            case 'help':
                output = `<div class="blue">General commands:</div><div class="command-list">
                    <div><span class="green">look</span> - Describe the current room.</div>
                    <div><span class="green">CAI</span> - Interact with your companion.</div>
                    <div><span class="green">go [direction]</span> - Move (north, south, east, west).</div>
                    <div><span class="green">clear</span> - Clear the terminal without resetting the game.</div></div>`;
                break;

            case 'clear':
                displayRoomDescription();
                return;

            default:
                output = `<span class="red">I don't recognize <span class="green">${command}</span>. Do you need <span class="green">help</span>?`;
        }
    }

    updateOutput(command, output);
}

