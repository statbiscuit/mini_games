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
    const parts = command.trim().split(/\s+/); // Split command into parts
    const direction = parts[1]; // Get direction from "go [direction]"

    if (!direction) {
        return `<span class="red">Where do you want to go? Maybe <span class="green">north, east, south, or west?</span>`;
    }
    

    const currentRoomData = modeRooms[currentRoom];

    //  1. Check if current room is locked
    if (currentRoomData.locked) {
        return `<span class="red">The exits are locked. Solve the challenge first!</span>`;
    }

    //  2. Check if the chosen direction exists
    const exits = currentRoomData.exits;
    if (exits && exits[direction]) {
        const nextRoom = exits[direction];
        const nextRoomData = modeRooms[nextRoom];

        //  3. Move to next room if unlocked
        currentRoom = nextRoom;
        return modeRooms[currentRoom].description;

    } else {
        return `<span class="red">You can't go that way. Maybe <span class="green">north, east, south, or west?</span></span>`;
    }
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

    // 1️⃣ First, check for default commands (e.g., go, CAI, look)
    output = handleDefaultCommands(command);
    if (output) {
        updateOutput(command, output);
        return;
    }

    // 2️⃣ Then, pass the command to the game-mode-specific handler
    switch (gameMode) {
        case "🐉 dragon hunt":
            output = handleDragonHuntCommands(command);
            break;

        case "🛠 debugger's quest":
            output = handleCodeQuestsCommands(command);
            break;

        case "📊 tidyverse trials":  // ✅ New case for Tidyverse Trials
        output = handleCodeQuestsCommands(command);
        break;

            default:
                output = `<span class="red">I don't recognize <span class="green">${command}</span>. Do you need <span class="green">help</span>?`;
        }

    updateOutput(command, output);
}

/********************************************
         DEFAULT COMMAND HANDLING
 ********************************************/
function handleDefaultCommands(command) {
    let output = '';

    if (command.startsWith("go")) {
        output = handleMovement(command); // Use the fixed movement logic
    } else {
        switch (command) {
            case 'look':
                output = modeRooms[currentRoom].description;
                break;

            case 'CAI':
                output = modeRooms[currentRoom].companion;
                break;

            case 'help':
                output = `<div class="blue">Available commands:</div>
                    <div class="command-list">
                        <div><span class="green">look</span> - Describe the current room.</div>
                        <div><span class="green">CAI</span> - Interact with your companion.</div>
                        <div><span class="green">go [direction]</span> - Move (north, south, east, west).</div>
                        <div><span class="green">clear</span> - Clear the terminal without resetting the game.</div>
                    </div>`;
                break;

            case 'clear':
                // Reset terminal to starting message without returning null
                outputEl.innerHTML = `<div><h3>Welcome to ${gameMode.toUpperCase()}!</h3><br>${modeRooms[currentRoom].description}</div>`;
                return '';

            default:
                return null; // Let game mode specific logic handle unknown commands
        }
    }

    return output;
}


/********************************************
    DRAGON HUNT SPECIFIC COMMAND HANDLING
 ********************************************/
function handleDragonHuntCommands(command) {
    let output = '';

    switch (command) {
        case 'torch':
            output = modeRooms[currentRoom].help;
            break;

        case 'PLAY':
            output = modeRooms[currentRoom].play;
            break;

        default:
            output = `<span class="red">I don't recognize <span class="green">${command}</span>. Do you need <span class="green">help</span>?`;
        }

    return output;
}

/**********************************************
     ROOMS 2-4 SPECIFIC COMMAND HANDLING
 **********************************************/
function handleCodeQuestsCommands(command) {
    let output = '';

    // checks to see if command is a default command
    const defaultCommands = ['CAI', 'look', 'help', 'clear'];
    if (defaultCommands.includes(command)) {
        return handleDefaultCommands(command); // Pass to default handler
    }

    //  Evaluate challenge solution
    if (modeRooms[currentRoom].challenge) {
        if (command === modeRooms[currentRoom].solution) {
            output = `<span class='green'>Correct! The issue is fixed.</span><br>`;
            output += "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Which way now? AWWOOF</span>";

            room.locked = false; 

        } else {
            output =  `<span class="red">I don't recognize </span><span class="green">${command}</span>.<br>${modeRooms[currentRoom].hint}`;
        }
    } else {
        output = `<span class="red">I don't recognize <span class="green">${command}</span>. Try asking <span class="green">CAI</span> for help.</span>`;
    }

    return output;
}
