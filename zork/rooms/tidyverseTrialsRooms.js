export const tidyverseTrialsRooms = {
    // START ROOM — No challenge here
    start: {
      description: "<span class='blue'>You enter the Data Lab, where datasets float mid-air and R code powers the world around you. Your faithful companion</span> CAI <span class='blue'>greets you.</span>",
      companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Let's tidy some data, friend! Which way should we</span> go<span class = 'blue'>?</span>",
      locked: false,
      exits: { north: 'filterLab' },
      isStart: true
    },
  
    // FILTER LAB --> Data Filtering
    filterLab: {
      description: "<span class='blue'>Rows of data float in front of you, but some are clearly incorrect. You need to filter them out.</span><br><br><span class='green'>Challenge:</span> Use <strong>filter()</strong> to select rows where <code>height > 150</code> from <code>plant_data</code>.",
      locked: true,
      challenge: true,
      hint: "<span class='yellow'>Hint: Try <code>filter(plant_data, height > 150)</code>.</span>",
      companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Remember to use <code>library(dplyr)</code> if needed!</span>",
      solution: "filter(plant_data, height > 150)",
      exits: { east: 'mutateLab' }
    },
  
    // MUTATE LAB --> Data Transformation
    mutateLab: {
      description: "<span class='blue'>You enter a room filled with half-complete datasets. A screen reads:</span><br><br><span class='green'>Challenge:</span> Use <strong>mutate()</strong> to add a <code>BMI</code> column to <code>plant_data</code> using <code>weight / (height^2)</code>.",
      locked: true,
      challenge: true,
      hint: "<span class='yellow'>Hint: <code>mutate(plant_data, BMI = weight / (height^2))</code></span>",
      companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Think of <code>mutate()</code> as adding a snack to your lunchbox.</span>",
      solution: "mutate(plant_data, BMI = weight / (height^2))",
      exits: { north: 'summariseLab' }
    },
  
    // SUMMARISE LAB --> Aggregation
    summariseLab: {
      description: "<span class='blue'>Multiple datasets swirl around you, showing plant species and their growth rates.</span><br><br><span class='green'>Challenge:Use <code>summarise()</code> to calculate the <code>avg_height</code> of <code>plant_data</code>.",
      locked: true,
      challenge: true,
      hint: "<span class='yellow'>Hint: summarise(avg_height = mean(height, na.rm = TRUE))</code></span>",
      companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Don't forget <code>group_by()</code> before <code>summarise()</code>!</span>",
      solution: "summarise(avg_height = mean(height, na.rm = TRUE))",
      exits: { east: 'ggplotLab' }
    },
  
    // GGPLOT LAB --> Data Visualisation
    ggplotLab: {
      description: "<span class='blue'>The walls glow with graphs of all kinds. A terminal blinks: 'Create a scatterplot.'</span><br><br><span class='green'>Challenge:</span> Use <strong>ggplot2</strong> to create a scatterplot of <code>height</code> vs <code>weight</code>.",
      locked: true,
      challenge: true,
      hint: "<span class='yellow'>Hint: <code>ggplot(plant_data, aes(x = height, y = weight)) + geom_point()</code></span>",
      companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF A scatterplot is like a map — every point has a story.</span>",
      solution: "ggplot(plant_data, aes(x = height, y = weight)) + geom_point()",
      exits: { west: 'joinLab' }
    },
  
    // JOIN LAB --> Data Joining
    joinLab: {
      description: "<span class='blue'>Two datasets hover in front of you, waiting to be joined together.</span><br><br><span class='green'>Challenge:</span> Use <strong>left_join()</strong> to combine <code>plant_data</code> with <code>species_info</code> on <code>species_id</code>.",
      locked: true,
      challenge: true,
      hint: "<span class='yellow'>Hint: <code>left_join(plant_data, species_info, by = 'species_id')</code></span>",
      companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF AWWOOF Think of <code>left_join()</code> like a paw shake — it connects data!</span>",
      solution: "left_join(plant_data, species_info, by = 'species_id')",
      exits: { east: 'finalRoom' }
    },
  
    // FINAL ROOM
    finalRoom: {
      description: "<span class='yellow'>Whakamihi!!     ^    ^\r\n               \/ \\  \/\/\\\r\n |\\___\/|      \/   \\\/\/  .\\\r\n \/O  O  \\__  \/    \/\/  | \\ \\\r\n\/     \/  \\\/_\/    \/\/   |  \\  \\\r\n@___@\'    \\\/_   \/\/    |   \\   \\ \r\n   |       \\\/_ \/\/     |    \\    \\ \r\n   |        \\\/\/\/      |     \\     \\ \r\n  _|_ \/   )  \/\/       |      \\     _\\\r\n \'\/,_ _ _\/  ( ; -.    |    _ _\\.-~        .-~~~^-.\r\n ,-{        _      `-.|.-~-.           .~         `.\r\n  \'\/\\      \/                 ~-. _ .-~      .-~^-.  \\\r\n     `.   {            }                   \/      \\  \\\r\n   .----~-.\\        \\-\'                 .~         \\  `. \\^-.\r\n  \/\/\/.----..>    c   \\             _ -~             `.  ^-`   ^-_\r\n    \/\/\/-._ _ _ _ _ _ _}^ - - - - ~                     ~--,   .-~\r\n                                                          \/.-\'\r\n\r\n <span style='color: blue'>You’ve completed the Tidyverse Trials! A grand Andarna lights up!!</span>",
      companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF You did it, pal! Time to celebrate!</span>",
      locked: false,
      exits: {},
      isFinal: true
    }
  };
  