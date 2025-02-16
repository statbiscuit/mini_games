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
