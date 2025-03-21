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
    "ggplot(data, aes(x = x, y = y)) + geom_point(color = 'blue', size = 3)",
    "summary(penguins) ## display summary statistics for the penguins dataset",
    "filter(data, x > 10) ## filter rows where x is greater than 10",
    "mutate(data, z = x + y) ## create a new variable z as the sum of x and y",
    "select(data, x, y) ## select columns x and y from the dataset",
    "group_by(data, x) %>% summarize(mean_y = mean(y)) ## calculate mean of y grouped by x",
    "arrange(data, desc(y)) ## arrange rows in descending order of y",
    "data[1:5, ] ## subset the first 5 rows of data",
    "plot(x, y) ## base R plot of x and y",
    "cor(x, y) ## calculate the correlation between x and y",
    "lm(y ~ x, data = data) ## fit a linear model of y as a function of x",
    "residuals(lm(y ~ x, data = data)) ## get residuals from the linear model",
    "anova(lm(y ~ x, data = data)) ## perform an ANOVA on the linear model",
    "hist(data$x) ## create a histogram of the x variable",
    "t.test(data$y ~ data$x) ## perform a t-test comparing y across levels of x",
    "mean(data$x) ## calculate the mean of the x variable",
    "sd(data$x) ## calculate the standard deviation of the x variable",
    "table(data$z) ## create a frequency table of the z variable",
    "write.csv(data, 'output.csv') ## save the data object to a csv file",
    "library(ggplot2); ggplot(data, aes(x, y)) + geom_line() ## line plot in ggplot2",
    "facet_wrap(~ species) ## facet plot by species in ggplot2",
    "geom_bar(stat = 'identity') ## create a bar chart with ggplot2",
    "scale_color_manual(values = c('red', 'blue')) ## customize colors in ggplot2",
    "theme_minimal() ## apply a minimal theme to the ggplot",
    "labs(title = 'My Plot', x = 'X-axis', y = 'Y-axis') ## add labels to the plot"
];