export const biostatsLabyrinth = {
    start: {
      description: "<span class='blue'>You step into the Biostat Labyrinth. Ancient scripts on the walls detail the history of biological research. Your companion</span> CAI <span class='blue'>bounds forward, ready to explore.</span>",
      companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Time to dive into the data! Ready?</span>",
      locked: false,
      exits: { north: 'epidemiologyGate' }
    },
  
    // Epidemiology Gate --> Study Design & Sampling (case-control, cohort, randomisation)
    epidemiologyGate: {
      description: "<span class='blue'>You find scrolls detailing different study designs. A faded poster asks:</span><br><br><span class='green'>Challenge:</span> Select rows from <code>patient_data</code> where <code>exposure == 'smoking'</code> to analyze smokers in a case-control study.",
      companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF In a case-control study, you compare groups based on exposure!</span>",
      challenge: true,
      locked: true,
      hint: "<span class='yellow'>Hint: Use <code>filter(patient_data, exposure == 'smoking')</code>.</span>",
      solution: "filter(patient_data, exposure == 'smoking')",
      exits: { east: 'survivalCurveChamber' }
    },

    // Survival Curve Chamber --> Survival Analysis (kaplan-meier curve)
    survivalCurveChamber: {
        description: "<span class='blue'>You step into a dimly lit chamber where lines of data ripple across ancient graphs. A dusty terminal reads:</span><br><br><span class='green'>Challenge:</span> Create a Kaplan-Meier curve for <code>patient_data</code> using <code>time</code> and <code>status</code> variables.",
        companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Remember: <code>Surv()</code> wraps your survival data, and <code>survfit()</code> plots it!</span>",
        challenge: true,
        locked: true,
        hint: "<span class='yellow'>Hint: <code>survfit(Surv(time, status) ~ 1, data = patient_data)</code></span>",
        solution: "survfit(Surv(time, status) ~ 1, data = patient_data)",
        exits: { north: 'logisticLair' }
    },
    
    // Logistic Lair --> Logistic Regression (predicting binary outcomes)
    logisticLair: {
        description: "<span class='blue'>A cold breeze blows through stone statues shaped like logistic curves. A glowing tablet asks:</span><br><br><span class='green'>Challenge:</span> Perform a logistic regression on <code>patient_data</code> predicting <code>disease</code> from <code>age</code> and <code>smoking</code>.",
        companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Remember to use <code>family = binomial</code> for logistic regression!</span>",
        challenge: true,
        locked: true,
        hint: "<span class='yellow'>Hint: <code>glm(disease ~ age + smoking, data = patient_data, family = binomial)</code></span>",
        solution: "glm(disease ~ age + smoking, data = patient_data, family = binomial)",
        exits: { east: 'chiSquareCrypt' }
    },
    
    // Chi-Square Crypt --> Hypothesis testing (independence)
    chiSquareCrypt: {
        description: "<span class='blue'>Dusty relics of contingency tables lie before you. A spectral inscription reads:</span><br><br><span class='green'>Challenge:</span> Conduct a chi-square test for independence to determine if <code>disease_status</code> and <code>smoking</code> are related in <code>patient_data</code>.",
        companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Contingency tables tell hidden stories. Use <code>table()</code> and then <code>chisq.test()</code>!</span>",
        challenge: true,
        locked: true,
        hint: "<span class='yellow'>Hint: <code>chisq.test(table(patient_data$disease_status, patient_data$smoking))</code></span>",
        solution: "chisq.test(table(patient_data$disease_status, patient_data$smoking))",
        exits: { south: 'correlationCavern' }
    },
    

    // Correlation Cavern --> Pearson's Correlation
    correlationCavern: {
        description: "<span class='blue'>You enter a vast cavern where shimmering lines stretch between floating data points. The walls whisper:</span><br><br><span class='green'>Challenge:</span> Calculate the Pearson correlation between <code>cholesterol</code> and <code>blood_pressure</code> in <code>patient_data</code>.",
        companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF Correlation reveals how data dances together. Use <code>cor()</code> with the right method!</span>",
        challenge: true,
        locked: true,
        hint: "<span class='yellow'>Hint: <code>cor(patient_data$cholesterol, patient_data$blood_pressure, method = 'pearson')</code></span>",
        solution: "cor(patient_data$cholesterol, patient_data$blood_pressure, method = 'pearson')",
        exits: { east: 'metaAnalysisMaze' }
    },

    // Meta Analysis Maze --> Study Synthesis (meeta-analysis)
    metaAnalysisMaze: {
        description: "<span class='blue'>The labyrinth walls shimmer with fragments of research papers. To navigate, you must combine the study results.</span><br><br><span class='green'>Challenge:</span> Conduct a fixed-effect meta-analysis using the <code>metafor</code> package with the provided data <code>study_data</code>.",
        companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF To combine studies, you need both effect sizes and variances. Think about using <code>rma()</code>.</span>",
        challenge: true,
        locked: true,
        hint: "<span class='yellow'>Hint: Use <code>rma(yi, vi, data = study_data, method = 'FE')</code> to perform a fixed-effect meta-analysis.</span>",
        solution: "rma(yi, vi, data = study_data, method = 'FE')",
        exits: { north: 'finalSanctuary' }
    },

    // FINAL ROOM
    finalRoom: {
      description: "<span class='yellow'>Whakamihi!!     ^    ^\r\n               \/ \\  \/\/\\\r\n |\\___\/|      \/   \\\/\/  .\\\r\n \/O  O  \\__  \/    \/\/  | \\ \\\r\n\/     \/  \\\/_\/    \/\/   |  \\  \\\r\n@___@\'    \\\/_   \/\/    |   \\   \\ \r\n   |       \\\/_ \/\/     |    \\    \\ \r\n   |        \\\/\/\/      |     \\     \\ \r\n  _|_ \/   )  \/\/       |      \\     _\\\r\n \'\/,_ _ _\/  ( ; -.    |    _ _\\.-~        .-~~~^-.\r\n ,-{        _      `-.|.-~-.           .~         `.\r\n  \'\/\\      \/                 ~-. _ .-~      .-~^-.  \\\r\n     `.   {            }                   \/      \\  \\\r\n   .----~-.\\        \\-\'                 .~         \\  `. \\^-.\r\n  \/\/\/.----..>    c   \\             _ -~             `.  ^-`   ^-_\r\n    \/\/\/-._ _ _ _ _ _ _}^ - - - - ~                     ~--,   .-~\r\n                                                          \/.-\'\r\n\r\n <span style='color: blue'>You’ve completed the Biostats Labyrinth! A grand Andarna lights up!!</span>",
      companion: "<span class='blue'>           __\r\n      (___()'`;\r\n      \\,    /`\r\n      \\\\\"--\\\\ AWWOOF You did it, pal! Time to celebrate!</span>",
      locked: false,
      exits: {}
    } 
  };
  