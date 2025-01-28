## Summary

[ggrdle()](https://statbiscuit.github.io/mini_games/ggrdle/index.html): a wordle style `geom_` game.

## Notes

Modify the text in `wordle.js` to customize each sample.

The base code is modified from [wordle-game, Rafael Pacini, GitHub](https://github.com/rafaelpacinii/wordle-game/tree/main)

## Changes and New Features

### Key Features
- **Dynamic Word Bank Selection**: Players can now choose from different categories (e.g., `statisticalFunction`, `baseRFunctions`, `ggplot2Functions`) to customize their game based on R functions and packages.
- **Interactive Keyboard**: The on-screen keyboard dynamically changes colors (green for correct letters in the right place, yellow for correct letters in the wrong place, gray for incorrect letters) based on the player’s guesses, similar to the behavior in Wordle.
- **Physical Keyboard Support**: In addition to the on-screen keyboard, the game now supports physical keyboard input, allowing players to type directly using their keyboard.
- **Grid and Keyboard Synchronization**: Both the game grid and the virtual keyboard update together in real-time, reflecting the accuracy of each guess.

### How to Play
1. **Start Game**: Click on "Play" to start the game. You can select different categories to customize the words you'll guess.
2. **Enter Guesses**: Use the on-screen keyboard or your physical keyboard to enter letters.
3. **Check Results**: After each guess, the letters will change colors:
   - **Green**: Correct letter in the right position.
   - **Yellow**: Correct letter in the wrong position.
   - **Gray**: Incorrect letter.
4. **Win or Lose**: The game continues until you either guess the word or run out of attempts (max of 6).

### Additional Notes
- **Custom Word Bank**: You can modify the `words.js` file to include your own set of words, allowing the game to focus on specific R functions, packages, or other topics.
- **Responsive Design**: The game interface has been optimized for both desktop and mobile devices, with adjustments made to the layout and button sizes on smaller screens.
