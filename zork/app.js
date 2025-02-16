/********************************************
               GAME SETUP
 ********************************************/

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');

inputEl.focus();
inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const command = inputEl.value.trim().replace(/\s+/g, " "); // Trim and normalize spaces
        handleCommand(command); // Process the command
        inputEl.value = ''; // Clear input field
    }
});

// Track the player's current room
let currentRoom = 'start';
let gameMode = null; // Current game mode (null until selected)
let modeRooms = null;  // Stores the selected mode’s room structure


// import rooms
import { dragonHuntRooms } from './rooms/dragonHuntRooms.js';
import { debuggerQuestRooms } from './rooms/debuggerQuestRooms.js';
import { tidyverseTrialsRooms } from './rooms/tidyverseTrialsRooms.js';
import { packageProphecyRooms } from './rooms/packageProphecyRooms.js';

/********************************************
             GAME MODE HANDLING
 ********************************************/
function startGameMode(mode) {
    const availableModes = {
        "dragon hunt": dragonHuntRooms,
        "debugger quest": debuggerQuestRooms,
        "tidyverse trials": tidyverseTrialsRooms,
        "package prophecy": packageProphecyRooms
    };

    if (availableModes[mode]) {
        gameMode = mode;
        modeRooms = availableModes[mode]; // Load the correct room structure
        currentRoom = "start"; // Reset player position
        
        // Hide the menu and show the game
        document.getElementById("mode-selection").style.display = "none";
        document.getElementById("terminal").style.display = "block";

        outputEl.innerHTML = `<h3>Welcome to ${mode.toUpperCase()}!</h3><br>${modeRooms[currentRoom].description}`;
    }
}

document.addEventListener("keydown", function (event) {
    if (!gameMode) {
        if (event.key === "1") startGameMode("dragon hunt");
        else if (event.key === "2") startGameMode("debugger quest");
        else if (event.key === "3") startGameMode("tidyverse trials");
        else if (event.key === "4") startGameMode("package prophecy");
    }
});

/********************************************
             COMMAND HANDLING
 ********************************************/

function handleCommand(command) {
    if (!gameMode) {
        outputEl.innerHTML += `<div class="red">Select a game mode first.</div>`;
        return;
    }

    let output = '';
    
    if (command === "") return; // Ignore empty input

    // Check if the command is a movement command (e.g., "go north")
    if (command.startsWith("go ")) {
        output = handleMovement(command);
    } else {
        switch (command) {
            case 'PLAY':
                output = modeRooms[currentRoom].play;
                break;

            case 'torch':
                output = modeRooms[currentRoom].help;
                break;

            case 'CAI':
                output = modeRooms[currentRoom].companion;
                break;

            case 'look':
                output = modeRooms[currentRoom].description;
                break;

            case 'help':
                output = `<div class="blue">Available commands:</div><div class="command-list">
                    <div><span class="green">look</span> - Describe the current room.</div>
                    <div><span class="green">CAI</span> - Interact with your companion.</div>
                    <div><span class="green">torch</span> - Use your torch.</div>
                    <div><span class="green">PLAY</span> - Try playing with something.</div>
                    <div><span class="green">go [direction]</span> - Move (north, south, east, west).</div>
                    <div><span class="green">clear</span> - Clear the terminal without resetting the game.`
                break;

                case 'clear':
                    if (!gameMode) {
                        outputEl.innerHTML = `<div><h3>Nau mai, haere mai.<br>Welcome to zoRk!</h3><br>Select a game mode to begin.</div>`;
                    } else {
                        outputEl.innerHTML = `<div><h3>Welcome to ${gameMode.toUpperCase()}!</h3><br>${modeRooms[currentRoom].description}</div>`;
                    }
                    return;                
;

            default:
                output = `<span class="red">I don't recognise <span class="green">${command}<span class="red">. Do you need <span class="green">help</span>?`;
        }
    }

    updateOutput(command, output);
}


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
             OUTPUT HANDLING
 ********************************************/

function updateOutput(command, output) {
    outputEl.innerHTML += `<div class="prompt">> <span class="green">${command}</span></div><div class="output-line">${output}</div>`;
}

// Display initial game message
outputEl.innerHTML += `<div><h3>Nau mai, haere mai.<br>Welcome to zoRk!</h3><br>${modeRooms[currentRoom].description}</div>`;
