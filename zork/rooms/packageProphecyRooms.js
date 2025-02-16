export const packageProphecyRooms = {
    start: {
        description: "The world is breaking. A missing package must be found.",
        exits: { north: "installRoom" }
    },
    installRoom: {
        description: "A library is missing. Can you install the right package?",
        exits: { south: "start" }
    }
};
