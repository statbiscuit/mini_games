library(tidyverse)
library(rvest)
library(jsonlite)

url <- "https://www.abs.gov.au/statistics/understanding-statistics/statistical-terms-and-concepts/statistical-terms-and-concepts-glossary"

document <- read_html(url) %>%
  html_elements(".field__item")

words_list <- document %>%
  html_elements("h3") %>%
  html_text2()
cleaned_words_list <- gsub("\\s*\\(.*?\\)", "", words_list)
#cleaned_words_list

definitions_list <- document %>%
  html_elements(".abs-content") %>%
  html_text2()
cleaned_definitions_list <- gsub("\\s*See:.*", "", definitions_list)
#cleaned_definitions_list

glossary_table <- tibble(
  Word = cleaned_words_list,
  Definition = cleaned_definitions_list
)
#glossary_table
  
# Matching the word by the definition:
  # str_to_lower(word)
  # str_to_lower(definition)

  # if word == word in definition
    # replace word with "_" * len(word)



