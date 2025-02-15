# woRdle: An R-Focused Wordle-Style Game

[woRdle()](https://statbiscuit.github.io/mini_games/ggrdle/index.html): is an interactive word-guessing game inspired by Wordle, designed specifically for learning and practicing **R functions**. Players can choose between **Play Mode** for a random challenge or **Learn Mode** to explore categorized functions from the R ecosystem.

## Summary

This project is an extension of **ggrdle**, introducing **new game modes, structured word banks, improved UI, and enhanced educational value**.


## What's New in woRdle?
The transition from `ggrdle` to `woRdle` includes numerous **new features, fixes, and improvements**:

### **1. Game Modes & Structure**
- **New Mode Selection Screen:**
  - 🌟 Players can now choose between:
    - **Play Mode** → Randomly select R functions across categories.
    - **Learn Mode** → Explore functions from specific R packages.
  - 🎯 **Subcategory Selection:** Choose from `{dplyr}`, `{tidyr}`, `{ggplot2}`, `{lubridate}`, and more.

### **2️. Expanded Word Bank**
- **The word bank is now fully structured and categorized!**
- Instead of a single predefined word list, words are now:
  - **Grouped by R package** (`dplyr`, `tidyr`, `ggplot2`, etc.).
  - **Each word includes a description** to provide educational value and is used as the *"Hint"*.
- **Words dynamically load based on the selected category**.

### **3️. Hint System**
- 💡 **New "Hint" button** to display the **function's description**.

### **4️. UI & User Experience Improvements**
- 🏠 **Game only appears after mode selection** (previously loaded immediately).
- 🎨 **New game branding**:
  - `"woRdle"` title with a **stylized "R" effect**.
- 🎯 **Win/Loss pop-up modal** with animations (no more simple alerts).
- 📱 **Improved mobile layout**:
  - Virtual keyboard resizes properly for small screens.
  - Better button spacing for touch users.

## 🎮 How to Play
### **Play Mode**
1. Click **"Play"** to start the game.
2. Guess the R function within **6 attempts**.
3. Use the **on-screen or physical keyboard** to enter words.
4. **Feedback Colors:**
   - 🟩 **Green** → Correct letter in the correct position.
   - 🟨 **Yellow** → Correct letter in the wrong position.
   - ⬜ **Gray** → Incorrect letter.
5. Win by guessing the correct word!

### **Learn Mode**
1. Click **"Learn"** and **select a subcategory** (e.g., `{dplyr}`).
2. The game will randomly select a function from that category.
3. Click **"Hint"** if needed to see a function description.

### **Game Controls**
- 🏠 **Home** → Return to mode selection.
- 🔄 **New Word** → Restart with a new word.
- 💡 **Hint** → Reveal the function description.


## 🔧 Customization
Want to **add your own R functions**?
- Modify `words.js` to **include new function categories**.
- Update `style.css` for **visual changes**.
- Adjust `wordle.js` to tweak game logic.


## 📌 Credits & Acknowledgments
- Original base code from [`ggrdle`](https://statbiscuit.github.io/mini_games/ggrdle/index.html).
- Inspired by the [`wordle-game` by Rafael Pacini](https://github.com/rafaelpacinii/wordle-game/tree/main).
- This project was expanded to **enhance learning for R users**.


## 🚀 Future Plans
- ✅ **More R function categories** (e.g., `{purrr}`, `{forcats}`).
- 🎨 **Dark Mode / UI Themes**.
- 📈 **Game stats tracking** (win/loss record, accuracy).
- 🏆 **Leaderboard for competitive play**.

---

🎯 **Enjoy learning R while playing woRdle!** 🏆  
Let me know if you encounter any issues or have feature requests! 🚀
