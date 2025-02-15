// Statistical Functions
const statisticalFunction = [
    { word: "mean", description: "Calculates the arithmetic mean of a numeric vector." },
    { word: "median", description: "Finds the median value of a numeric vector." },
    { word: "mode", description: "Identifies the most frequently occurring value in a dataset." },
    { word: "sd", description: "Computes the standard deviation of a numeric vector." },
    { word: "var", description: "Calculates the variance of a numeric vector." },
    { word: "cor", description: "Computes the correlation between two variables." },
    { word: "cov", description: "Calculates the covariance between two variables." },
    { word: "max", description: "Returns the maximum value in a vector." },
    { word: "min", description: "Returns the minimum value in a vector." },
    { word: "quantile", description: "Finds the quantiles of a numeric dataset." },
    { word: "summary", description: "Provides a summary of an object, including min, max, and quartiles." },
    { word: "t.test", description: "Performs a t-test to compare group means." },
    { word: "anova", description: "Conducts an analysis of variance (ANOVA)." },
    { word: "sum", description: "Calculates the sum of elements in a vector." },
    { word: "round", description: "Rounds numbers to a specified number of decimal places." },
    { word: "signif", description: "Rounds numbers to a specified number of significant digits." },
    { word: "union", description: "Combines unique elements from two vectors." },
    { word: "intersect", description: "Finds common elements between two vectors." }
    ];
  
  // Base R Functions
  const baseRFunctions = [
    { word: "ifelse", description: "Vectorized conditional operation." },
    { word: "for", description: "Executes a loop for a specified number of iterations." },
    { word: "while", description: "Repeats a block of code while a condition is true." },
    { word: "repeat", description: "Repeats a block of code indefinitely until a break statement." },
    { word: "seq", description: "Generates sequences of numbers." },
    { word: "rep", description: "Replicates elements in a vector." },
    { word: "sample", description: "Draws random samples from a dataset." },
    { word: "paste", description: "Concatenates strings with a separator." },
    { word: "substr", description: "Extracts or replaces substrings in a character vector." },
    { word: "match", description: "Finds positions of matches in a vector." },
    { word: "sort", description: "Sorts a vector in ascending or descending order." },
    { word: "order", description: "Provides indices that sort a vector." },
    { word: "split", description: "Splits a vector into groups based on a factor." },
    { word: "apply", description: "Applies a function to the margins of an array or matrix." },
    { word: "args", description: "Displays the arguments of a function." },
    { word: "data.frame", description: "Creates a data frame, the primary data structure in R." },
    { word: "factor", description: "Creates a categorical variable." },
    { word: "getwd", description: "Returns the current working directory." },
    { word: "install.packages", description: "Installs R packages from CRAN or other repositories." },
    { word: "is.na", description: "Checks for missing (NA) values in a dataset." },
    { word: "library", description: "Loads an R package into the current session." },
    { word: "list.files", description: "Lists files in a directory." },
    { word: "setwd", description: "Sets the working directory for the session." },
    { word: "cat", description: "Concatenates and prints objects." },
    { word: "length", description: "Returns the length of an object." },
    { word: "nchar", description: "Counts the number of characters in a string." },
    { word: "unlist", description: "Flattens a list into a vector." },
    { word: "list", description: "Creates a generic list object." }
  ];

// Data Frame Functions
const dataFrameFunctions = [
  { word: "names", description: "Returns or sets the column names of a data frame or matrix." },
  { word: "view", description: "Displays the contents of a data frame or tibble in a tabular view." },
  { word: "print", description: "Prints the contents of an object to the console." },
  { word: "nrow", description: "Returns the number of rows in a data frame or matrix." },
  { word: "unique", description: "Extracts unique rows or elements from a dataset." },
  { word: "glimpse", description: "Provides a compact overview of a data frame's structure and data." }
];

// dplyr Functions
const dplyrFunctions = [
    { word: "filter", description: "Subsets rows based on conditions." },
    { word: "group_by", description: "Groups data by one or more variables for aggregation." },
    { word: "mutate", description: "Creates or transforms columns in a data frame." },
    { word: "select", description: "Selects specific columns from a data frame." },
    { word: "summarise", description: "Reduces multiple values to a single summary statistic." },
    { word: "rename", description: "Renames columns in a data frame." },
    { word: "slice", description: "Selects specific rows by position." },
    { word: "arrange", description: "Reorders rows in ascending or descending order." },
    { word: "desc", description: "Specifies descending order for sorting." },
    { word: "pull", description: "Extracts a single column as a vector." },
    { word: "case_when", description: "Vectorized conditional statements for column transformations." },
    { word: "count", description: "Counts the number of occurrences of each unique value." },
    { word: "distinct", description: "Removes duplicate rows from a dataset." },
    { word: "bind_rows", description: "Combines multiple data frames row-wise." },
    { word: "left_join", description: "Performs a left join to merge datasets." },
    { word: "inner_join", description: "Performs an inner join to merge datasets." },
    { word: "rowwise", description: "Groups data by individual rows for row-wise operations." },
    { word: "lead", description: "Shifts a column's values forward." },
    { word: "lag", description: "Shifts a column's values backward." },
    { word: "anti_join", description: "Returns rows in the first dataset not present in the second." }
  ];

// tidyr Functions
const tidyrFunctions = [
    { word: "pivot_longer", description: "Transforms wide data into a longer format by gathering columns." },
    { word: "pivot_wider", description: "Transforms long data into a wider format by spreading rows into columns." },
    { word: "separate", description: "Splits a column into multiple columns based on a delimiter." },
    { word: "unite", description: "Combines multiple columns into a single column." },
    { word: "nest", description: "Creates nested data frames by grouping rows into a list-column." },
    { word: "unnest", description: "Expands nested data frames back into individual rows." },
    { word: "drop_na", description: "Removes rows with missing values." },
    { word: "separate_rows", description: "Splits values in a column into multiple rows based on a delimiter." }
  ];

  const ggplot2Functions = [
    { word: "ggplot", description: "Creates a new ggplot object for data visualization." },
    { word: "geom_point", description: "Adds scatter plot points to a ggplot." },
    { word: "geom_line", description: "Adds a line plot to a ggplot." },
    { word: "geom_bar", description: "Creates a bar plot, optionally filled by a factor." },
    { word: "aes", description: "Specifies the aesthetic mappings (e.g., x, y, color) for a plot." },
    { word: "facet_wrap", description: "Creates multiple plots by splitting data into facets." },
    { word: "theme", description: "Customizes the appearance of a ggplot." },
    { word: "ggsave", description: "Saves a ggplot to a file." },
    { word: "reorder", description: "Reorders a factor variable for better visualization." },
    { word: "labs", description: "Customizes labels for axes, title, and legend." },
    { word: "stat_count", description: "Counts occurrences and visualizes them as bars." },
    { word: "geom_col", description: "Creates a bar plot with manually defined heights." },
    { word: "geom_jitter", description: "Adds scatter plot points with jitter to reduce overlap." },
    { word: "geom_density", description: "Creates a density plot to visualize distribution." },
    { word: "geom_dotplot", description: "Creates a dot plot for visualizing distribution." },
    { word: "geom_vline", description: "Adds a vertical line to a plot." },
    { word: "geom_spoke", description: "Adds spokes emanating from points, with angles and radii." }
  ];

// stringR Functions
const stringRFunctions = [
    { word: "to_lower", description: "Converts strings to lowercase." },
    { word: "detect", description: "Identifies strings that match a pattern." },
    { word: "count", description: "Counts occurrences of a pattern in a string." },
    { word: "sub", description: "Replaces the first instance of a pattern in a string." },
    { word: "remove_all", description: "Removes all instances of a pattern from a string." },
    { word: "replace_all", description: "Replaces all instances of a pattern in a string." },
    { word: "squish", description: "Removes excess whitespace from a string." },
    { word: "split", description: "Splits strings into a list of substrings based on a pattern." }
  ];

// Other Tidyverse Functions
const generalTidyverseFunctions = [
    { word: "tibble", description: "Creates a tibble, a modern version of a data frame." },
    { word: "read_csv", description: "Reads a CSV file into a tibble." },
    { word: "map_df", description: "Applies a function to a list and returns the result as a data frame." },
    { word: "separate_rows", description: "Splits values in a column into separate rows." },
    { word: "fromJSON", description: "Parses JSON data into an R object." }
  ];

// magick Functions
const magickFunctions = [
    { word: "read", description: "Reads an image file into R." },
    { word: "scale", description: "Scales an image to specified dimensions." },
    { word: "append", description: "Appends one image to another." },
    { word: "blank", description: "Creates a blank image of specified dimensions." },
    { word: "annotate", description: "Adds text annotations to an image." },
    { word: "animate", description: "Creates an animation from a series of images." },
    { word: "morph", description: "Smoothly transitions between images." },
    { word: "extent", description: "Resizes the canvas of an image." },
    { word: "write", description: "Writes an image to a file." }
  ];

// lubridate Functions
const lubridateFunctions = [
    { word: "ymd", description: "Parses dates in 'year-month-day' format." },
    { word: "dmy_hms", description: "Parses dates with 'day-month-year hour-minute-second' format." },
    { word: "difftime", description: "Calculates the time difference between dates." },
    { word: "wday", description: "Extracts the day of the week from a date." },
    { word: "round_date", description: "Rounds dates to a specified time unit." },
    { word: "year", description: "Extracts the year from a date." },
    { word: "month", description: "Extracts the month from a date." },
    { word: "now", description: "Returns the current date and time." },
    { word: "floor_date", description: "Rounds dates down to a specified time unit." },
    { word: "ceiling_date", description: "Rounds dates up to a specified time unit." },
    { word: "weekdays", description: "Returns the day of the week as a string." }
  ];

// Combined Word Bank for "Play" Mode
const playWordBank = [
  ...statisticalFunction,
  ...baseRFunctions,
  ...dataFrameFunctions,
  ...dplyrFunctions,
  ...tidyrFunctions,
  ...ggplot2Functions,
  ...stringRFunctions,
  ...generalTidyverseFunctions,
  ...magickFunctions,
  ...lubridateFunctions
];

// Export categories and playWordBank
export {
  statisticalFunction,
  baseRFunctions,
  dataFrameFunctions,
  dplyrFunctions,
  tidyrFunctions,
  ggplot2Functions,
  stringRFunctions,
  generalTidyverseFunctions,
  magickFunctions,
  lubridateFunctions,
  playWordBank
};
