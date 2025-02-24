export const dragonHuntRooms = {
  start: {
      description: "<span class='blue'>You are in a dark room, alone, apart from your faithful companion</span> CAI",
      companion: "<span class='blue'>           __\r\n      (___()\'`;\r\n      \/,    \/`\r\n      \\\\\"--\\\\ AWWOOF Looks like there's a door over there.\nDo you have any treats? No? Just a</span> <span class='green'>torch</span><span class='blue'>... AWWOOF</span>",
      help: "<span class='blue'>There is a door to your north, perhaps you should</span> <span class='green'>go north?</span>",
      play: "<span class='blue'>There is no one to</span> <span class='green'>play</span> <span class='blue'>with here</span>",
      exits: {north: 'hallway'},
      isStart: true
  },
  hallway: {
      description: "<span class='blue'>You are in a long hallway and your</span> <span class='green'>torch</span> <span class='blue'>flickers out</span>",
      companion: "<span class='blue'>           __\r\n      (___()\'`;\r\n      \/,    \/`\r\n      \\\\\"--\\\\ AWWOOF Which way now? AWWOOF</span>",
      help: "<span class='blue'>Your torch no longer works</span>",
      play: "<span class='blue'>There is no one to play with here</span>",
      exits: {south: 'start', east: 'treasureRoom'},
  },
  treasureRoom: {
    description: "<span style='color: blue'>Whakamihi!!     ^    ^\r\n               \/ \\  \/\/\\\r\n |\\___\/|      \/   \\\/\/  .\\\r\n \/O  O  \\__  \/    \/\/  | \\ \\\r\n\/     \/  \\\/_\/    \/\/   |  \\  \\\r\n@___@\'    \\\/_   \/\/    |   \\   \\ \r\n   |       \\\/_ \/\/     |    \\    \\ \r\n   |        \\\/\/\/      |     \\     \\ \r\n  _|_ \/   )  \/\/       |      \\     _\\\r\n \'\/,_ _ _\/  ( ; -.    |    _ _\\.-~        .-~~~^-.\r\n ,-{        _      `-.|.-~-.           .~         `.\r\n  \'\/\\      \/                 ~-. _ .-~      .-~^-.  \\\r\n     `.   {            }                   \/      \\  \\\r\n   .----~-.\\        \\-\'                 .~         \\  `. \\^-.\r\n  \/\/\/.----..>    c   \\             _ -~             `.  ^-`   ^-_\r\n    \/\/\/-._ _ _ _ _ _ _}^ - - - - ~                     ~--,   .-~\r\n                                                          \/.-\'\r\n\r\n You found Andarna!!",
      companion: "<span class='blue'>           __\r\n      (___()\'`;\r\n      \/,    \/`\r\n      \\\\\"--\\\\ AWWOOF AWWOOF Does she want to</span> <span class='green'>PLAY</span> <span class='blue'>with us? AWWOOF</span>",
      help: "<span class='blue'>Your torch no longer works</span>",
      play: "<span class='blue'>Dragons do not play. We are far too regal to mix with mere mortals</span>",
      exits: {west: 'hallway'},
  }
};


