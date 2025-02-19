export const tidyverseTrialsRooms = {
    start: {
        description: "You are in the Data Science Arena. Tables of data float around you.",
        exits: { east: "dataWrangleRoom" }
    },
    dataWrangleRoom: {
        description: "A dataset requires your transformation skills.",
        exits: { west: "start" }
    }
};


// What kind of distributions are there
// hints to data types
// continuous vs discrete