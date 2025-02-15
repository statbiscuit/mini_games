## Summary

[zork](https://statbiscuit.github.io/mini_games/zork/index.html): a mini adventure text game.

## Notes


The base code is modified from [Building a Mini Text-Based Adventure Game](https://dev.to/shawn2208/building-a-mini-text-based-adventure-game-mini-zork-with-html-css-js-3879)

The ASCII dragon is not mine but taken from this [ASCII Art Archive](https://www.asciiart.eu/mythology/dragons)

The ASCII dog is again from the [ASCII Art Archive](https://www.asciiart.eu/animals/dogs)

---

### New Features

#### 1. rooms.js

a. items Array in Rooms
 - Some rooms now contain items (e.g., the torch in start).
 - Players can pick up items using a take [item] command.

b. requiredItem for Restricted Access
- hallway requires a torch.
- treasureRoom requires a key.

c. puzzle Object

- puzzleRoom includes a question and answer.
- Players must type the correct answer to unlock the next path.