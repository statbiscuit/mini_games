export const debuggerQuestRooms = {
    start: {
        description: "<span class='blue'>You enter a laboratory filled with datasets and analysis tools. A monitor displays an error in a script analyzing plant growth data...</span>",
        challenge: "<span class='green'>summary(plant_data, Height)</span>",
        hint: "<span class='blue'>Check the function used in the summary command. Does it correctly reference</span> <span class='green'>Height</span><span class='blue'>?</span>",
        solution: "summary(plant_data$Height)",
        exits: { north: "syntaxMaze" }
    },

    syntaxMaze: {
        description: "<span class='blue'>The next room contains a script attempting to filter gene expression data, but it throws an error...</span>",
        challenge: "<span class='green'>filter(gene_data, expression > 10)</span>",
        hint: "<span class='blue'>Ensure that the</span> <span class='green'>dplyr</span> <span class='blue'>package is loaded, and check the column name used in</span> <span class='green'>filter()</span>.",
        solution: "library(dplyr)\nfilter(gene_data, expression_level > 10)",
        exits: { south: "start", east: "dataTrapRoom" }
    },

    dataTrapRoom: {
        description: "<span class='blue'>You encounter a script meant to join two datasets: one with species information and another with habitat data. However, the merge isn't working as expected...</span>",
        challenge: "<span class='green'>merge(species_data, habitat_data, key = 'species_id')</span>",
        hint: "<span class='blue'>Does</span> <span class='green'>merge()</span> <span class='blue'>use</span> <span class='green'>key</span> <span class='blue'>or</span> <span class='green'>by</span> <span class='blue'>to specify the joining column?</span>",
        solution: "merge(species_data, habitat_data, by = 'species_id')",
        exits: { west: "syntaxMaze", north: "finalDebuggingChamber" }
    },

    finalDebuggingChamber: {
        description: "<span class='blue'>In the final chamber, a complex script aims to calculate mean survival rates but produces an error...</span>",
        challenge: "<span class='green'>mean(survival_data$survive, na.rm = TRUE)</span>",
        hint: "<span class='blue'>Check the column name used in the</span> <span class='green'>mean()</span> <span class='blue'>function. Does it match the dataset?</span>",
        solution: "mean(survival_data$survived, na.rm = TRUE)",
        exits: { south: "dataTrapRoom", finish: "completed" }
    }
};
