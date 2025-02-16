// rooms.js - Defines all game rooms and their properties

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

// Export rooms object so it can be used in app.js
export { rooms };
