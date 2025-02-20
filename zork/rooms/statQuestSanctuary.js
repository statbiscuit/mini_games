export const statQuestSanctuary = {
    start: {
      description: "<span class='blue'>You stand at the gates of the StatQuest Sanctuary, where core statistical knowledge is the key to moving forward. Your faithful companion</span> CAI <span class='blue'>is by your side.</span>",
      companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Welcome, explorer! Let’s tackle some stats together. The sanctuary awaits. Which way should we</span> go?",
      locked: false,
      exits: { north: 'distributionHall' }
    },
  
    // Distribution Hall —-> Normal Distribution
    distributionHall: {
      description: "<span class='blue'>Tall columns line the hall, each representing a bell curve. A shimmering prompt reads:</span><br><br><span class='green'>Challenge:</span> Generate 100 random values from a normal distribution with mean 0 and standard deviation 1 using <code>rnorm()</code>.",
      locked: true,
      challenge: true,
      hint: "<span class='yellow'>Hint: Try <code>rnorm(100, mean = 0, sd = 1)</code></span>",
      companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Bell curves are like mountains — perfectly balanced!</span>",
      solution: "rnorm(100, mean = 0, sd = 1)",
      exits: { east: 'probabilityPeak' }
    },

    // Probability Peak --> Probability Calculation
    probabilityPeak: {
        description: "<span class='blue'>You climb the Probability Peak, where the air is thin, and uncertainty reigns. A glowing screen asks:</span><br><br><span class='green'>Challenge:</span> Calculate the probability of a z-score less than <code>1.96</code> using <code>pnorm()</code>.",
        locked: true,
        challenge: true,
        hint: "<span class='yellow'>Hint: Use <code>pnorm(1.96)</code> — it gives the cumulative probability up to 1.96.</span>",
        companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Z-scores help us understand how far we’ve climbed from the average!</span>",
        solution: "pnorm(1.96)",
        exits: { east: 'tTestTemple' }
      },

      // T-Test Temple --> Hypothesis Testing
      tTestTemple: {
        description: "<span class='blue'>You enter the ancient T-Test Temple, where statistical truths are revealed. A stone tablet reads:</span><br><br><span class='green'>Challenge:</span> Conduct a t-test comparing <code>group1</code> and <code>group2</code> using <code>t.test()</code>.",
        locked: true,
        challenge: true,
        hint: "<span class='yellow'>Hint: <code>t.test(group1, group2)</code> will compare the two means.</span>",
        companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Hypothesis testing is like choosing between two treats — we need data to decide!</span>",
        solution: "t.test(group1, group2)",
        exits: { north: 'regressionRoom' }
      },

      // Regression Room --> Linear Modelling
      regressionRoom: {
        description: "<span class='blue'>You enter the Regression Room, where lines of best fit stretch across glowing graphs. A screen flashes:</span><br><br><span class='green'>Challenge:</span> Perform a linear regression to predict <code>height</code> based on <code>weight</code> using <code>lm()</code>.",
        locked: true,
        challenge: true,
        hint: "<span class='yellow'>Hint: Try <code>lm(height ~ weight, data = plant_data)</code> to model height as a function of weight.</span>",
        companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Remember, regression lines help us predict outcomes!</span>",
        solution: "lm(height ~ weight, data = plant_data)",
        exits: { east: 'anovaAltar' }
      },

      // ANOVA Altar --> Variance Analysis
      anovaAltar: {
        description: "<span class='blue'>You approach the ANOVA Altar, where ancient statisticians compared groups for centuries. An inscription reads:</span><br><br><span class='green'>Challenge:</span> Conduct an ANOVA to test if <code>species</code> affects <code>height</code> using <code>aov()</code>.",
        locked: true,
        challenge: true,
        hint: "<span class='yellow'>Hint: Try <code>aov(height ~ species, data = plant_data)</code> to see if height differs by species.</span>",
        companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF ANOVA checks if group differences are just by chance or something real!</span>",
        solution: "aov(height ~ species, data = plant_data)",
        exits: { north: 'finalRoom' }
      },
      
    // FINAL ROOM
    finalRoom: {
        description: "<span class='red'>Whakamihi!!     ^    ^\r\n               \/ \\  \/\/\\\r\n |\\___\/|      \/   \\\/\/  .\\\r\n \/O  O  \\__  \/    \/\/  | \\ \\\r\n\/     \/  \\\/_\/    \/\/   |  \\  \\\r\n@___@\'    \\\/_   \/\/    |   \\   \\ \r\n   |       \\\/_ \/\/     |    \\    \\ \r\n   |        \\\/\/\/      |     \\     \\ \r\n  _|_ \/   )  \/\/       |      \\     _\\\r\n \'\/,_ _ _\/  ( ; -.    |    _ _\\.-~        .-~~~^-.\r\n ,-{        _      `-.|.-~-.           .~         `.\r\n  \'\/\\      \/                 ~-. _ .-~      .-~^-.  \\\r\n     `.   {            }                   \/      \\  \\\r\n   .----~-.\\        \\-\'                 .~         \\  `. \\^-.\r\n  \/\/\/.----..>    c   \\             _ -~             `.  ^-`   ^-_\r\n    \/\/\/-._ _ _ _ _ _ _}^ - - - - ~                     ~--,   .-~\r\n                                                          \/.-\'\r\n\r\n <span style='color: blue'>You’ve reached the end of StatQuest Sanctuary! A grand Andarna lights up!!</span>",
        companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF You did it, pal! Time to celebrate!</span>",
        locked: false,
        exits: {}
      }
    };