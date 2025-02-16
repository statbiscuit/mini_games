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

        case 'go north':
        case 'go south':
        case 'go east':
        case 'go west':
            output = handleMovement(command);
            break;

        default:
            output = `I don't understand "<strong>${command}</strong>"`;
    }

    updateOutput(command, output);
}

/********************************************
             MOVEMENT HANDLING
 ********************************************/

function handleMovement(command) {
    const direction = command.split(' ')[1]; // Extract direction
    if (rooms[currentRoom].exits[direction]) {
        currentRoom = rooms[currentRoom].exits[direction];
        return rooms[currentRoom].description;
    } else {
        return `You can't go that way.`;
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
