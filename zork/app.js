// Select input and output elements
const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');

// Auto-focus input on load
inputEl.focus();

// Load room data from external file (rooms.js)
import { rooms } from './rooms.js';

// Track the current room
let currentRoom = 'start';

// Command Constants
const COMMANDS = {
    LOOK: 'look',
    TORCH: 'torch',
    COMPANION: 'CAI',
    PLAY: 'PLAY',
    MOVE_NORTH: 'go north',
    MOVE_SOUTH: 'go south',
    MOVE_EAST: 'go east',
    MOVE_WEST: 'go west'
};

// Handle user input
inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const command = inputEl.value.trim().toLowerCase();
        processCommand(command);
        inputEl.value = ''; // Clear input field
    }
});

// Process player commands
function processCommand(command) {
    let output = '';

    switch (command) {
        case COMMANDS.PLAY:
            output = rooms[currentRoom].play || "You can't play here.";
            break;

        case COMMANDS.TORCH:
            output = rooms[currentRoom].help || "Nothing happens.";
            break;

        case COMMANDS.COMPANION:
            output = rooms[currentRoom].companion || "Your companion is silent.";
            break;

        case COMMANDS.LOOK:
            output = rooms[currentRoom].description;
            break;

        default:
            // Handle movement dynamically
            if (command.startsWith('go ')) {
                output = movePlayer(command.split(' ')[1]);
            } else {
                output = `I don't understand "${command}". Try another command.`;
            }
    }

    updateOutput(command, output);
}

// Move player to a new room
function movePlayer(direction) {
    if (rooms[currentRoom].exits[direction]) {
        currentRoom = rooms[currentRoom].exits[direction];
        return rooms[currentRoom].description;
    }
    return "You can't go that way.";
}

// Update game output
function updateOutput(command, output) {
    outputEl.innerHTML += `
        <div class="prompt">></div>
        <div>${command}</div>
        <div>${output}</div>
    `;
}

// Initialize the game with a welcome message
outputEl.innerHTML += `
    <div><h3>Nau mai, haere mai. Welcome to zoRk!</h3></div>
    <div>${rooms[currentRoom].description}</div>
`;
