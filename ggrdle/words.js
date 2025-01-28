// Statistical Functions
const statisticalFunction = [
  "mean", "median", "mode", "sd", "var", "cor", "cov", "max", "min",
  "quantile", "summary", "t.test", "anova", "sum", "round", "signif",
  "union", "intersect"
];

// Base R Functions
const baseRFunctions = [
  "ifelse", "for", "while", "repeat", "seq", "rep", "sample", "paste",
  "substr", "match", "sort", "order", "split", "apply", "args", "data.frame",
  "factor", "getwd", "install.packages", "is.na", "library", "list.files",
  "setwd", "cat", "length", "nchar", "unlist", "list"
];

// Data Frame Functions
const dataFrameFunctions = [
  "names", "view", "print", "nrow", "unique", "glimpse"
];

// dplyr Functions
const dplyrFunctions = [
  "filter", "group_by", "mutate", "select", "summarise", "rename", "slice",
  "arrange", "desc", "pull", "case_when", "count", "distinct", "bind_rows",
  "left_join", "inner_join", "rowwise", "lead", "lag", "anti_join"
];

// tidyr Functions
const tidyrFunctions = [
  "pivot_longer", "pivot_wider", "separate", "unite", "nest", "unnest", 
  "drop_na", "separate_rows"
];

// ggplot2 Functions
const ggplot2Functions = [
  "ggplot", "geom_point", "geom_line", "geom_bar", "aes", "facet_wrap",
  "theme", "ggsave", "reorder", "labs", "stat_count", "geom_col",
  "geom_jitter", "geom_density", "geom_dotplot", "geom_vline", "geom_spoke"
];

// stringR Functions
const stringRFunctions = [    
  "to_lower", "detect", "count", "sub", "remove_all", "replace_all",
  "squish", "split"
];

// Other Tidyverse Functions
const generalTidyverseFunctions = [
  "tibble", "read_csv", "map_df", "separate_rows", "fromJSON"
];

// magick Functions
const magickFunctions = [
  "read", "scale", "append", "blank", "annotate", "animate", "morph",
  "extent", "write"
];

// lubridate Functions
const lubridateFunctions = [
  "ymd", "dmy_hms", "difftime", "wday", "round_date", "year", "month",
  "now", "floor_date", "ceiling_date", "weekdays"
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
