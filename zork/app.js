/********************************************
               GAME SETUP
 ********************************************/

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');

inputEl.focus();
inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const command = inputEl.value.trim(); // Trim whitespace
        handleCommand(command); // Process the command
        inputEl.value = ''; // Clear input field
    }
});

// Track the player's current room
let currentRoom = 'start';

// import rooms
import { rooms } from './rooms.js';


/********************************************
             COMMAND HANDLING
 ********************************************/

function handleCommand(command) {
    let output = '';

    // Check if the command is a movement command (e.g., "go north")
    if (command.startsWith("go ")) {
        output = handleMovement(command);
    } else {
        switch (command) {
            case 'PLAY':
                output = rooms[currentRoom].play;
                break;

            case 'torch':
                output = rooms[currentRoom].help;
                break;

            case 'CAI':
                output = rooms[currentRoom].companion;
                break;

            case 'look':
                output = rooms[currentRoom].description;
                break;

            case 'help':
                output = `<div class="blue">Available commands:</div><div class="command-list">
                    <div><span class="green">look</span> - Describe the current room.</div>
                    <div><span class="green">CAI</span> - Interact with your companion.</div>
                    <div><span class="green">torch</span> - Use your torch.</div>
                    <div><span class="green">PLAY</span> - Try playing with something.</div>
                    <div><span class="green">go [direction]</span> - Move (north, south, east, west).</div></div>`
                    
                break;

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
    const direction = command.split(' ')[1]; // Extracts "north", "south", etc.

    if (rooms[currentRoom].exits[direction]) {
        currentRoom = rooms[currentRoom].exits[direction];
        return rooms[currentRoom].description;
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
outputEl.innerHTML += `<div><h3>Nau mai, haere mai.<br>Welcome to zoRk!</h3><br>${rooms[currentRoom].description}</div>`;
