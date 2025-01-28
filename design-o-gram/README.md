## design-o-gram

[design-o-gram](https://statbiscuit.github.io/mini_games/design-o-gram/index.html) is a experimental design-inspired nonogram game.

## Summary

This game combines logic, design, and randomness, offering a fresh take on traditional nonogram gameplay. The goal is to toggle cells to match patterns indicated by numerical clues, creating a challenging yet engaging experience.



## Notes

The base code is modified from [Nonogram, Mostafa Alvandi, CodePen](https://codepen.io/alvandisetvat/pen/oNBwvWK)

Since this game already had aspects of randomisation and procedurally generated content (as the grids changed dynamically with every playthrough), not many changes were made to the actual gameplay.

## New Features and Changes

### 1. Guide at the Start of the Game

* Added an introductory guide modal to help new players understand how to play the game.

* Key Features:
    * Explains the goal of the game and how to interpret row/column clues.
    * Includes step-by-step instructions for toggling cells and understanding winning conditions.
* Reason: Without the guide, the game was initially unclear for new players (including myself!).

### 2. Help Button
* Introduced a persistent Help button that allows players to revisit the guide at any time during the game.
* Location: Always visible at the bottom-right corner of the screen.
* Purpose: Ensures players can access instructions or refresh their understanding without needing to restart.