export const rooms = {
    start: {
        description: "You are in a dark room, alone, apart from your faithful companion CAI.",
        companion: "AWWOOF Looks like there's a door over there.\nDo you have any treats? No? Just a torch... AWWOOF",
        help: "There is a door to your north, perhaps you should go north?",
        exits: { north: "hallway" },
        items: ["torch"],  // Players start with a torch
    },
    hallway: {
        description: "You are in a long hallway and your torch flickers out.",
        companion: "AWWOOF Which way now? AWWOOF",
        help: "Your torch no longer works.",
        exits: { south: "start", east: "puzzleRoom" },
        requiredItem: "torch",  // Must have a torch to see
    },
    puzzleRoom: {
        description: "A mystical riddle glows on the wall...",
        puzzle: {
            question: "What function in R calculates the mean?",
            answer: "mean",
            hint: "It's a base R function for averaging numbers."
        },
        exits: { west: "hallway", east: "treasureRoom" },
    },
    treasureRoom: {
        description: "Whakamihi!! You found Andarna!!",
        companion: "AWWOOF AWWOOF Does she want to PLAY with us? AWWOOF",
        help: "Your torch no longer works.",
        exits: { west: "puzzleRoom" },
        requiredItem: "key",  // Players must find a key before entering
    }
};


