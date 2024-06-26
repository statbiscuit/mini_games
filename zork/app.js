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

let currentRoom = 'start';

const rooms = {
    start: {
        description: " <span style='color: blue'>You are in a dark room, alone, apart from your faithful companion </span> CAI",
	companion: "<span style='color: blue'>           __\r\n      (___()\'`;\r\n      \/,    \/`\r\n      \\\\\"--\\\\ AWWOOF Looks like there's a door over there.\nDo you have any treats? No? Just a </span> torch<span style='color: blue'>... AWWOOF </span>",
	help: "<span style='color: blue'>There is a door to your north, perhaps you should </span> go north?",
	play: "<span style='color: blue'>There is no one to </span> play <span style='color: blue'>with here</span>",
        exits: {north: 'hallway'},
    },
    hallway: {
        description: "<span style='color: blue'>You are in a long hallway and your</span> torch<span style='color: blue'> flickers out</span>",
	companion: "<span style='color: blue'>           __\r\n      (___()\'`;\r\n      \/,    \/`\r\n      \\\\\"--\\\\ AWWOOF Which way now? AWWOOF</span>",
	// help: "There is a door to the south and another one to the east.",
	help: "<span style='color: blue'>Your torch no longer works</span>",
	play: "<span style='color: blue'>There is no one to play with here</span>",
        exits: {south: 'start', east: 'treasureRoom'},
    },
    treasureRoom: {
        description: "<span style='color: blue'>Whakamihi!!     ^    ^\r\n               \/ \\  \/\/\\\r\n |\\___\/|      \/   \\\/\/  .\\\r\n \/O  O  \\__  \/    \/\/  | \\ \\\r\n\/     \/  \\\/_\/    \/\/   |  \\  \\\r\n@___@\'    \\\/_   \/\/    |   \\   \\ \r\n   |       \\\/_ \/\/     |    \\    \\ \r\n   |        \\\/\/\/      |     \\     \\ \r\n  _|_ \/   )  \/\/       |      \\     _\\\r\n \'\/,_ _ _\/  ( ; -.    |    _ _\\.-~        .-~~~^-.\r\n ,-{        _      `-.|.-~-.           .~         `.\r\n  \'\/\\      \/                 ~-. _ .-~      .-~^-.  \\\r\n     `.   {            }                   \/      \\  \\\r\n   .----~-.\\        \\-\'                 .~         \\  `. \\^-.\r\n  \/\/\/.----..>    c   \\             _ -~             `.  ^-`   ^-_\r\n    \/\/\/-._ _ _ _ _ _ _}^ - - - - ~                     ~--,   .-~\r\n                                                          \/.-\'\r\n\r\n You found Andarna!!",
	companion: "<span style='color: blue'>           __\r\n      (___()\'`;\r\n      \/,    \/`\r\n      \\\\\"--\\\\ AWWOOF AWWOOF Does she want to</span> PLAY <span style='color: blue'>with us? AWWOOF</span>",
	help: "<span style='color: blue'>Your torch no longer works</span>",
	play: "<span style='color: blue'>Dragons do not play. We are far too regal to mix with mere mortals</span>",
        exits: {west: 'hallway'},
    }
};

function handleCommand(command) {
    let output = '';

    switch(command) {

     case 'PLAY':
	output = rooms[currentRoom].play
	break;
	
    case 'torch':
	output = rooms[currentRoom].help
	break;
	
    case 'CAI':
	output = rooms[currentRoom].companion
	break;
	
    case 'look':
        output = rooms[currentRoom].description;
        break;

    case 'go north':
        if(rooms[currentRoom].exits.north) {
            currentRoom = rooms[currentRoom].exits.north;
            output = rooms[currentRoom].description;
        } else {
            output = "You can't go that way.";
        }
        break;

    case 'go south':
        if(rooms[currentRoom].exits.south) {
            currentRoom = rooms[currentRoom].exits.south;
            output = rooms[currentRoom].description;
        } else {
            output = "You can't go that way.";
        }
        break;

    case 'go east':
        if(rooms[currentRoom].exits.east) {
            currentRoom = rooms[currentRoom].exits.east;
            output = rooms[currentRoom].description;
        } else {
            output = "You can't go that way.";
        }
        break;

    case 'go west':
        if(rooms[currentRoom].exits.west) {
            currentRoom = rooms[currentRoom].exits.west;
            output = rooms[currentRoom].description;
        } else {
            output = "You can't go that way.";
        }
        break;

    default:
        output = 'I don\'t understand ' + command;
    }
    outputEl.innerHTML += `<div class="prompt">></div><div>${command}</div><div>${output}</div>`;
}

// Initial description
outputEl.innerHTML += `<div><h3>Nau mai, haere mai.\nWelcome to the BIOSCI 220 Dragon Hunt!</h3></div><div>${rooms[currentRoom].description}</div>`;
