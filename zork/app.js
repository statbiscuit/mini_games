/********************************************
               GAME SETUP
 ********************************************/

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');

// Track the player's current room
let currentRoom = 'start';
let gameMode = null; // Current game mode (null until selected)
let modeRooms = null;  // Stores the selected mode’s room structure

// Import rooms (Updated to ProphecyRooms.js)
import { dragonHuntRooms } from './rooms/dragonHuntRooms.js';
import { debuggerQuestRooms } from './rooms/debuggerQuestRooms.js';
import { tidyverseTrialsRooms } from './rooms/tidyverseTrialsRooms.js';
import { prophecyRooms } from './rooms/ProphecyRooms.js';  // Updated import

/********************************************
             GAME MODE HANDLING
 ********************************************/
function startGameMode(mode) {
    console.log(`Game mode clicked: ${mode}`); // Debugging log

    const availableModes = {
        "🐉 dragon hunt": dragonHuntRooms,
        "🛠 debugger's quest": debuggerQuestRooms,  
        "📊 tidyverse trials": tidyverseTrialsRooms,
        "📂 the package prophecy": prophecyRooms
    };    

    if (availableModes[mode]) {
        console.log(`Starting game mode: ${mode}`); // Debugging log

        gameMode = mode;
        modeRooms = availableModes[mode]; // Load the correct room structure
        currentRoom = "start"; // Reset player position
        
        // Hide the menu and show the game
        document.getElementById("mode-selection").style.display = "none";
        document.getElementById("terminal").style.display = "block";

        outputEl.innerHTML = `<h3>Welcome to ${mode.toUpperCase()}!</h3><br>${modeRooms[currentRoom].description}`;
    } else {
        console.error(`Invalid game mode: ${mode}`);
    }
}

// Make `startGameMode` globally available after page load
document.addEventListener("DOMContentLoaded", () => {
    window.startGameMode = startGameMode;

    console.log("Attaching event listeners to game mode buttons...");

    // Attach event listeners to buttons
    document.querySelectorAll("#mode-selection button").forEach(button => {
        button.addEventListener("click", (event) => {
            let selectedMode = event.target.innerText.toLowerCase().trim();

            console.log(`Button clicked: ${selectedMode}`);  // Debugging log
            startGameMode(selectedMode);
        });
    });
});


// Number input handling to select game mode
document.addEventListener("keydown", function (event) {
    if (!gameMode) {
        if (event.key === "1") startGameMode("🐉 dragon hunt");
        else if (event.key === "2") startGameMode("🛠 debugger's quest");
        else if (event.key === "3") startGameMode("📊 tidyverse trials");
        else if (event.key === "4") startGameMode("📂 the package prophecy");
    }
});

/********************************************
             OUTPUT HANDLING
 ********************************************/

function updateOutput(command, output) {
    outputEl.innerHTML += `<div class="prompt">> <span class="green">${command}</span></div><div class="output-line">${output}</div>`;
}



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
    } else if (gameMode === "🛠 debugger's quest" 
        && modeRooms[currentRoom].challenge 
        && command !== "CAI" 
        && command !== "look") {
        // Debugger Quest Handling: Check if the command is the correct solution
        if (command === modeRooms[currentRoom].solution) {
            output = `<span class='blue'>Correct! The issue is fixed.</span> <br>`;
        
            // Move to the next room if an exit exists
            output += "<span class='blue'>           __\r\n      (___()\'`;\r\n      \/,    \/`\r\n      \\\\\"--\\\\ AWWOOF Which way now? AWWOOF</span>";
        }        
    } else {
        switch (command) {
            case 'PLAY':
                output = modeRooms[currentRoom].play;
                break;

            case 'torch':
                output = modeRooms[currentRoom].help;
                break;

            case 'CAI':
                if (modeRooms[currentRoom].companion) {
                    output = modeRooms[currentRoom].companion; // Displays CAI’s message
                } else {
                    output = `<span class="blue">CAI is silent... maybe there's nothing to hint at.</span>`;
                }
                break;
                

            case 'look':
                output = modeRooms[currentRoom].description;
                
                // Ensure challenge is displayed in Debugger's Quest
                if (gameMode === "🛠 debugger's quest" && modeRooms[currentRoom].challenge) {
                    output += `<br><span class='green'>${modeRooms[currentRoom].challenge}</span>`;
                }
                break;
                

            case 'help':
                output = `<div class="blue">General commands:</div><div class="command-list">
                    <div><span class="green">look</span> - Describe the current room.</div>
                    <div><span class="green">CAI</span> - Interact with your companion.</div>
                    <div><span class="green">go [direction]</span> - Move (north, south, east, west).</div>
                    <div><span class="green">clear</span> - Clear the terminal without resetting the game.</div></div>`
                break;

            case 'clear':
                outputEl.innerHTML = `<div><h3>Welcome to ${gameMode.toUpperCase()}!</h3><br>${modeRooms[currentRoom].description}`;
                
                if (gameMode === "🛠 debugger's quest" && modeRooms[currentRoom].challenge) {
                    outputEl.innerHTML += `<br><span class='green'>${modeRooms[currentRoom].challenge}</span>`;
                }
                return;
                

            default:
                output = `<span class="red">I don't recognize <span class="green">${command}</span>. Do you need <span class="green">help</span>?`;
        }
    }

    updateOutput(command, output);
}

/********************************************
             MOVEMENT HANDLING
 ********************************************/
function handleMovement(command) {
    const direction = command.split(/\s+/)[1]; // Extract direction

    if (modeRooms[currentRoom].exits[direction]) {
        currentRoom = modeRooms[currentRoom].exits[direction];

        // Prevent repeating room descriptions multiple times
        return `<br>${modeRooms[currentRoom].description}`;
    } else {
        return `<span class="red">You can't go that way.</span>`;
    }
}

/********************************************
             MOVEMENT HANDLING
 ********************************************/
// Display initial game message
if (modeRooms) {
    outputEl.innerHTML += `<div><h3>Nau mai, haere mai.<br>Welcome to zoRk!</h3><br>${modeRooms[currentRoom].description}</div>`;
} else {
    outputEl.innerHTML += `<div><h3>Nau mai, haere mai.<br>Welcome to zoRk!</h3><br>Select a game mode to begin.</div>`;
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


