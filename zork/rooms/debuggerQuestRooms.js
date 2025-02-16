export const debuggerQuestRooms = {
    start: {
        description: "You are inside the Debugger’s Chamber. Errors appear on the walls.",
        exits: { north: "fixRoom" }
    },
    fixRoom: {
        description: "A corrupted script blocks your way.",
        exits: { south: "start" }
    }
};
