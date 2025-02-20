## Summary

[zork](https://statbiscuit.github.io/mini_games/zork/index.html): a mini adventure text game.

## Notes

The base code is modified from [Building a Mini Text-Based Adventure Game](https://dev.to/shawn2208/building-a-mini-text-based-adventure-game-mini-zork-with-html-css-js-3879).

The ASCII dragon is from the [ASCII Art Archive](https://www.asciiart.eu/mythology/dragons).

The ASCII dog is from the [ASCII Art Archive](https://www.asciiart.eu/animals/dogs).

## Initial Changes

### 1. **Code Organization & Readability**
- **Separated game logic from game data**:
  - Moved `rooms` object into `rooms.js` for better maintainability.
- **Improved indentation and spacing**:
  - Reformatted `app.js` to improve readability.
- **Added comments**:
  - Clearly marked sections for game setup, command handling, movement, and output.

### 2. **Input Handling Improvements**
- **Trimmed spaces from user input**:
  - `"  CAI  "` is now correctly recognized as `"CAI"`.
- **Handles multiple spaces within commands**:
  - `"go    north"` is now correctly interpreted as `"go north"`.
- **Ignores empty input**:
  - Pressing Enter without typing anything does nothing.

### 3. **Better Command Feedback**
- **Added `help` command**:
  - Displays a list of available commands.
- **Formatted command list for better readability**:
  - Uses proper indentation and spacing.
  
### 4. **Enhanced Output Formatting**
- **Improved spacing between outputs**:
  - Adjusted CSS to make the game look more like a terminal.
- **Refined command list formatting**:
  - Removed unnecessary spaces before and after the list.

### 5. **New `clear` Command**
- **Allows users to reset the screen** without refreshing the page:
  - Typing `clear` removes all previous output but **keeps the game state** intact.
  - The game does **not** restart; the player remains in the same room.

## Major Updates

### 1. **Multiple Game Modes Introduced**
- **🐉 Dragon Hunt**: The original quest with torch-based exploration and mini-games.
- **🛠 Debugger's Quest**: Debugging R code with syntax and logic errors.
- **📊 Tidyverse Trials**: Hands-on R coding with core Tidyverse functions like `filter()`, `mutate()`, `summarise()`, and `ggplot()`.
- **📐 StatQuest Sanctuary**: A statistics-themed challenge with topics like distributions, hypothesis testing, regression, and ANOVA.
- **🧬 Biostats Labyrinth**: Dive into biostatistics with challenges covering epidemiology, survival analysis, logistic regression, chi-square tests, and meta-analysis.

### 2. **Codebase Refactoring**
- **Modularized Game Logic**: 
  - Each game mode has its own dedicated room file (e.g., `debuggerQuestRooms.js`, `tidyverseTrialsRooms.js`).
  - `app.js` refactored to handle multiple modes and streamlined command handling.
- **Unified Command Handling**: 
  - Implemented `handleCodeQuestsCommands()` for Debugger's Quest, Tidyverse Trials, StatQuest Sanctuary, and Biostats Labyrinth.

### 3. **Gameplay Enhancements**
- **Locked Exits Until Puzzle Solved**: 
  - Players must complete a room’s challenge before unlocking new paths.
- **Companion (CAI) Logic Update**: 
  - After solving a puzzle, CAI stops giving hints and simply prompts the player to move forward.
- **Improved Error Handling**: 
  - Better command parsing and clear error messages.
  - Distinct error messages when trying to move in a locked room or using unrecognized commands.

### 4. **User Interface Improvements**
- **Themed Game Titles**: Each game mode features a unique welcome message and title styling.
- **Color-Coded Outputs**:
  - Red for errors, green for successful commands, blue for game narration, and yellow for hints.
- **Cleaner Terminal Interface**: Optimized spacing and formatting for better readability.

## Features Per Game Mode

| Game Mode               | Focus Area                         | Key Commands             |
|-------------------------|------------------------------------|--------------------------|
| 🐉 Dragon Hunt           | Exploration & Puzzle Solving      | `torch`, `PLAY`          |
| 🛠 Debugger's Quest      | Debugging R Syntax                | Solve code errors        |
| 📊 Tidyverse Trials      | Data Manipulation (Tidyverse)     | `filter()`, `mutate()`, etc. |
| 📐 StatQuest Sanctuary   | Core Statistics                   | `mean()`, `t.test()`, `lm()` |
| 🧬 Biostats Labyrinth    | Biostatistics & Research Methods  | `survfit()`, `glm()`, `chisq.test()` |

## Finalized Commands

- `look` – Describe the current room.
- `CAI` – Interact with your companion for hints or flavor text.
- `go [direction]` – Move (north, south, east, west).
- `clear` – Clear the terminal without resetting the game.
- `help` – List available commands.

## Future Development

- **Adaptive Hints & Error Handling**: Provide contextual suggestions when players are stuck.
- **Statbiscuit Integration**: Link puzzle rooms to be other statbiscuit games.
- **Procedural Story Elements**: Randomised quests, puzzles, and environments.
- **Randomised mode**: A button that randomly selects a game mode.

- **More Game Modes**: "Machine Learning Mansion", "Data Science Dungeon", etc...
- **Leaderboard Integration**: Track completion times and share with friends.
- **Code Evaluation**: Allow players to run actual R code snippets within the game (similar to how you can on ED Discussion).

