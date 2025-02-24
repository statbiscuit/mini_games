import { debuggerQuestRooms } from './debuggerQuestRooms.js';
import { tidyverseTrialsRooms } from './tidyverseTrialsRooms.js';
import { statQuestSanctuary } from './statQuestSanctuary.js';
import { biostatsLabyrinth } from './biostatsLabyrinth.js';

export const randomModeRooms = (() => {
    // Collect all rooms from existing game modes
    const allRooms = [
        ...Object.values(debuggerQuestRooms),
        ...Object.values(tidyverseTrialsRooms),
        ...Object.values(statQuestSanctuary),
        ...Object.values(biostatsLabyrinth)
    ];

    // Filter out "start" and "final" rooms from the pool
    const playableRooms = allRooms.filter(room => !room.isStart && !room.isFinal);

    // Shuffle Function (Fisher-Yates Shuffle)
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Random Direction Picker
    function getRandomDirection() {
        const directions = ["north", "east", "south", "west"];
        return directions[Math.floor(Math.random() * directions.length)];
    }

    // Randomly select rooms for this playthrough
    const selectedRooms = shuffle(playableRooms).slice(0, 5); // Pick 5 random rooms

    // Build the random game mode
    const randomRooms = {
        start: {
            description: "<span class='blue'>Welcome to the world of <strong>zoRk</strong>!<span class = 'green'> CAI</span> greets you.</span>",
            companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Anything can happen here! Choose wisely, friend! Where should we</span><span class = 'green'> go</span>",
            locked: false,
            exits: { north: 'room1' } // Start room always points north
        }
    };

    // Link selected rooms with random directions
    selectedRooms.forEach((room, index) => {
        const roomKey = `room${index + 1}`;
        const randomDirection = getRandomDirection();

        randomRooms[roomKey] = {
            ...room,
            exits: {
                [randomDirection]: index < selectedRooms.length - 1 ? `room${index + 2}` : 'andarnaLair'
            },
            locked: true // Each room is locked until solved
        };
    });
    
    // Final Room - Andarna (The Dragon)
    randomRooms['andarnaLair'] = {
        description: "<span class='red'>Whakamihi!!     ^    ^\r\n               \/ \\  \/\/\\\r\n |\\___\/|      \/   \\\/\/  .\\\r\n \/O  O  \\__  \/    \/\/  | \\ \\\r\n\/     \/  \\\/_\/    \/\/   |  \\  \\\r\n@___@\'    \\\/_   \/\/    |   \\   \\ \r\n   |       \\\/_ \/\/     |    \\    \\ \r\n   |        \\\/\/\/      |     \\     \\ \r\n  _|_ \/   )  \/\/       |      \\     _\\\r\n \'\/,_ _ _\/  ( ; -.    |    _ _\\.-~        .-~~~^-.\r\n ,-{        _      `-.|.-~-.           .~         `.\r\n  \'\/\\      \/                 ~-. _ .-~      .-~^-.  \\\r\n     `.   {            }                   \/      \\  \\\r\n   .----~-.\\        \\-\'                 .~         \\  `. \\^-.\r\n  \/\/\/.----..>    c   \\             _ -~             `.  ^-`   ^-_\r\n    \/\/\/-._ _ _ _ _ _ _}^ - - - - ~                     ~--,   .-~\r\n                                                          \/.-\'\r\n\r\n <span style='color: blue'>You’ve completed zoRk! A grand Andarna lights up!!</span>",
        companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF! You did it!</span>",
        locked: false,
        exits: {},
        isFinal: true
    };

    return randomRooms;
})();
