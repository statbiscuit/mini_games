export const debuggerQuestRooms = {
    start: {
        description: "<span class='blue'>You find yourself in a high-tech lab filled with glowing monitors. Your faithful companion</span> CAI <span class='blue'>greets you.</span>",
        companion: "<span class='blue'>           __\r\n      (___()\'`;\r\n      \/,    \/`\r\n      \\\\\"--\\\\ AWWOOF Welcome to the Debugger's Quest!</span> Which way should we go?",
        help: "<span class='blue'>Try asking</span> <span class='green'>CAI</span> <span class='blue'>for help!</span>",
        exits: { north: "lab" }
    },

    lab: {
        description: "<span class='blue'>You enter a laboratory filled with datasets and analysis tools. A script is analysing plant data: <span class='green'> summary(plant_data, Height)</span>, but a monitor displays an error...</span>",
        challenge: "<span class='green'>summary(plant_data, Height)</span>",
        prompt: "<span class='blue'>Can you debug this script? Enter the correct R command.</span>",
        hint: "<span class='blue'>Check the function used in the summary command. Does it correctly reference</span> <span class='green'>Height</span><span class='blue'>?</span>",
        companion: "<span class='blue'>           __\r\n      (___()\'`;\r\n      \/,    \/`\r\n      \\\\\"--\\\\ AWWOOF Hmmm... maybe it's a syntax issue?</span>",
        solution: "summary(plant_data$Height)",
        exits: {east: "treasureRoom"}
    },

    syntaxMaze: {
        description: "<span class='blue'>The next room contains a script attempting to filter gene expression data: <span class='green'>filter(gene_data, expression > 10)</span>, but it throws an error...</span>",
        challenge: "<span class='green'>filter(gene_data, expression > 10)</span>",
        prompt: "<span class='blue'>Can you debug this script? Enter the correct R command.</span>",
        hint: "<span class='blue'>Ensure that the</span> <span class='green'>tidyverse</span> <span class='blue'>package is loaded.",
        companion: "<span class='blue'>           __\r\n      (___()\'`;\r\n      \/,    \/`\r\n      \\\\\"--\\\\ AWWOOF I think you might be missing something at the start...</span>",
        solution: "library(tidyverse)",
        exits: {south: "dataTrapRoom" }
    },

    dataTrapRoom: {
        description: "<span class='blue'>You encounter a script meant to join two datasets: one with species information and another with habitat data. <span class='green'>merge(species_data, habitat_data, <span class = 'red'>key</span> = 'species_id')</span>. However, the merge isn't working as expected...</span>",
        challenge: "<span class='green'>merge(species_data, habitat_data, key = 'species_id')</span>",
        prompt: "<span class='blue'>Can you debug this script? Enter the correct R command.</span>",
        hint: "<span class='blue'>Does</span> <span class='green'>merge()</span> <span class='blue'>use</span> <span class='green'>key</span> <span class='blue'>or</span> <span class='green'>by</span> <span class='blue'>to specify the joining column?</span>",
        companion: "<span class='blue'>           __\r\n      (___()\'`;\r\n      \/,    \/`\r\n      \\\\\"--\\\\ AWWOOF Are you sure about that argument?</span>",
        solution: "merge(species_data, habitat_data, by = 'species_id')",
        exits: {west: "finalDebuggingChamber" }
    },

    finalDebuggingChamber: {
        description: "<span class='blue'>In the final chamber, a complex script aims to calculate mean survival rates: <span class='green'>mean(survival_data$survi<span class= 'red'>d</span>e, na.rm = TRUE)</span>, but produces an error...</span>",
        challenge: "<span class='green'>mean(survival_data$surdive, na.rm = TRUE)</span>",
        prompt: "<span class='blue'>Can you debug this script? Enter the correct R command.</span>",
        hint: "<span class='blue'>Check the column name used in the</span> <span class='green'>mean()</span> <span class='blue'>function. Does it match the dataset?</span>",
        companion: "<span class='blue'>           __\r\n      (___()\'`;\r\n      \/,    \/`\r\n      \\\\\"--\\\\  AWWOOF That column name seems off...</span>",
        solution: "mean(survival_data$survived, na.rm = TRUE)",
        exits: {north: "treasureRoom" }
    },

    treasureRoom: {
        description: "<span style='color: blue'>Whakamihi!!     ^    ^\r\n               \/ \\  \/\/\\\r\n |\\___\/|      \/   \\\/\/  .\\\r\n \/O  O  \\__  \/    \/\/  | \\ \\\r\n\/     \/  \\\/_\/    \/\/   |  \\  \\\r\n@___@\'    \\\/_   \/\/    |   \\   \\ \r\n   |       \\\/_ \/\/     |    \\    \\ \r\n   |        \\\/\/\/      |     \\     \\ \r\n  _|_ \/   )  \/\/       |      \\     _\\\r\n \'\/,_ _ _\/  ( ; -.    |    _ _\\.-~        .-~~~^-.\r\n ,-{        _      `-.|.-~-.           .~         `.\r\n  \'\/\\      \/                 ~-. _ .-~      .-~^-.  \\\r\n     `.   {            }                   \/      \\  \\\r\n   .----~-.\\        \\-\'                 .~         \\  `. \\^-.\r\n  \/\/\/.----..>    c   \\             _ -~             `.  ^-`   ^-_\r\n    \/\/\/-._ _ _ _ _ _ _}^ - - - - ~                     ~--,   .-~\r\n                                                          \/.-\'\r\n\r\n You found Andarna!!",
        challenge: "<span class='green'>mean(survival_data$surdive, na.rm = TRUE)</span>",
          companion: "<span class='blue'>           __\r\n      (___()\'`;\r\n      \/,    \/`\r\n      \\\\\"--\\\\ AWWOOF AWWOOF Does she want to</span> <span class='green'>PLAY</span> <span class='blue'>with us? AWWOOF</span>",
          help: "<span class='blue'>Your torch no longer works</span>",
          play: "<span class='blue'>Dragons do not play. We are far too regal to mix with mere mortals</span>",
          exits: {east: null},
      }
    };
