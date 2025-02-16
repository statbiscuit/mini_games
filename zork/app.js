import { rooms } from './rooms.js';

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');

inputEl.focus();
inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const command = inputEl.value;
        handleCommand(command);
        inputEl.value = '';
    }
});

function formatText(text) {
    return text
        .replace(/\btorch\b/g, "<span class='item'>torch</span>")
        .replace(/\bCAI\b/g, "<span class='companion'>CAI</span>")
        .replace(/\bAWWOOF\b/g, "<span class='dog-sound'>AWWOOF</span>");
}

let currentRoom = 'start';
let inventory = [];


function handleCommand(command) {
    let output = '';

    if (command.startsWith("take ") || command.startsWith("use ")) {
        output = handleItemActions(command);
    } else if (command.startsWith("go ")) {
        output = handleMovement(command);
    } else if (rooms[currentRoom].puzzle) {
        output = handlePuzzle(command);
    } else {
        output = handleGeneralCommands(command);
    }

    document.getElementById('output').innerHTML += `
        <div class="prompt">></div>
        <div>${command}</div>
        <div>${formatText(output)}</div>
    `;
}

function handleMovement(command) {
    let direction = command.split(" ")[1];

    if (!rooms[currentRoom].exits[direction]) {
        return "You can't go that way.";
    }

    let nextRoom = rooms[currentRoom].exits[direction];

    // If a puzzle exists and hasn't been solved, block the path
    if (rooms[nextRoom].puzzle) {
        return `A puzzle blocks your way: ${rooms[nextRoom].puzzle.question}`;
    }

    // Check if the next room requires an item to enter
    if (rooms[nextRoom].requiredItem && !inventory.includes(rooms[nextRoom].requiredItem)) {
        return `You need a ${rooms[nextRoom].requiredItem} to enter this room.`;
    }

    currentRoom = nextRoom;
    return rooms[currentRoom].description;
}

function handleItemActions(command) {
    let words = command.split(" ");
    let action = words[0];
    let item = words[1];

    if (action === "take") {
        if (rooms[currentRoom].items && rooms[currentRoom].items.includes(item)) {
            inventory.push(item);
            rooms[currentRoom].items = rooms[currentRoom].items.filter(i => i !== item);
            return `You picked up the ${item}.`;
        } else {
            return `There is no ${item} here.`;
        }
    }

    if (action === "use") {
        if (inventory.includes(item)) {
            if (item === "torch" && currentRoom === "hallway") {
                return "You light the torch, revealing the hallway!";
            } else if (item === "key" && currentRoom === "treasureRoom") {
                return "You use the key to unlock the treasure chest!";
            } else {
                return `You used the ${item}, but nothing happens.`;
            }
        } else {
            return `You don't have a ${item}.`;
        }
    }

    return "Invalid item action.";
}

function handlePuzzle(command) {
    let puzzle = rooms[currentRoom].puzzle;

    if (!puzzle) {
        return "There is no puzzle here.";
    }

    if (command === puzzle.answer) {
        delete rooms[currentRoom].puzzle;  // Remove the puzzle after solving
        return "Correct! The door unlocks.";
    } else {
        return `Wrong answer. Hint: ${puzzle.hint}`;
    }
}

function handleGeneralCommands(command) {
    if (command === "look") {
        return rooms[currentRoom].description;
    } 
    if (command === "help") {
        return rooms[currentRoom].help || "Try exploring!";
    }
    if (command === "CAI") {
        return rooms[currentRoom].companion || "Your companion is silent.";
    }

    return `I don’t understand '${command}'.`;
}

// Initial description
outputEl.innerHTML += `<div><h3>Nau mai, haere mai.\nWelcome to the BIOSCI 220 Dragon Hunt!</h3></div><div>${rooms[currentRoom].description}</div>`;
