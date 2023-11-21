const paragraphs = [
    "library(palmerpenguins) ## load the palmerpenguins package",
    "library(tidyverse)  ## load the tidyverse packages",
    "install.packages('ggplot2') ## install the ggplot2 package",
    "install.packages('dplyr') ## install the dplyr package",
    "## IGNORE ME I'm a comment, might be useful later though",
    "some_numbers <- c(1,4,5,13,45,90)",
    "getwd() ## get the current working directory",
    "boxplot(y ~ x, data  = data) ## boxplot of y by x in the object data",
    "rm(list = ls()) ## Jenny Bryan will SET YOUR COMPUTER ON FIRE",
    "for (i in 1:5) { print(i) } ## for loop that prints the index i",
    "my_data <- read.csv('my_data.csv') ## read in a csv file from the working directory",
    "a_character_vector <- c('stats', 'is', 'awesome')",
    "x <- 5 ## assign x the value 5 (note x = 5 works just as well)",
    "data <- data.frame(x = c(1, 2, 3, 4, 5), y = c(2, 4, 6, 8, 10))",
    "ggplot(data, aes(x = x, y = y)) + geom_point() ## simple scatter plot",
    "ggplot(data, aes(x = x, y = y)) + geom_point(color = 'blue', size = 3)"
];
