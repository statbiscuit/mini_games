export const rooms = {
    start: {
        description: "You are in a dark room, alone, apart from your faithful companion CAI.",
        companion: `
           __
      (___()'`;
      /,    /`;
      \\"--\\ AWWOOF Looks like there's a door over there.
      Do you have any treats? No? Just a torch... AWWOOF`,
        help: "There is a door to your north, perhaps you should go north?",
        play: "There is no one to play with here.",
        exits: { north: 'hallway' }
    },

    hallway: {
        description: "You are in a long hallway and your torch flickers out.",
        companion: `
           __
      (___()'`;
      /,    /`;
      \\"--\\ AWWOOF Which way now? AWWOOF`,
        help: "Your torch no longer works.",
        play: "There is no one to play with here.",
        exits: { south: 'start', east: 'treasureRoom' }
    },

    treasureRoom: {
        description: `
Whakamihi!!     
     ^    ^
    / \\  //\\
 |\\___/|      /   \\/\\/  .\\
 /O  O  \\__  /    \\/\\/  | \\ \\
/     /  \\/_/    \\/\\/   |  \\  \\
@___@'    \\/_   \\/\\/    |   \\   \\ 
   |       \\/_ \\/\\/     |    \\    \\ 
   |        \\/\\/\\/      |     \\     \\ 
  _|_ /   )  \\/\\/       |      \\     _\\
 '/,_ _ _/  ( ; -.    |    _ _\\.-~        .-~~~^-.
 ,-{        _      `-.|.-~-.           .~         `.
  '/\\      /                 ~-. _ .-~      .-~^-.  \\
     `.   {            }                   /      \\  \\
   .----~-.\\        \\-'                 .~         \\  `. \\^-.
  /\\/\\/\\.----..>    c   \\             _ -~             `.  ^-`   ^-_
    /\\/\\/-._ _ _ _ _ _ _}^ - - - - ~                     ~--,   .-~
                                                          /.-'

You found Andarna!!`,
        companion: `
           __
      (___()'`;
      /,    /`;
      \\"--\\ AWWOOF AWWOOF Does she want to PLAY with us? AWWOOF`,
        help: "Your torch no longer works.",
        play: "Dragons do not play. We are far too regal to mix with mere mortals.",
        exits: { west: 'hallway' }
    }
};
