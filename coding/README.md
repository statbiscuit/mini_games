## Summary

[code`R`](https://statbiscuit.github.io/mini_games/coding/index.html): `R` coding speed test!

## Notes

Modify the text in `paragraphs.js` to customize each sample.

The base code is modified from [Typing Speed Test Game](https://www.codingnepalweb.com/typing-speed-test-game-html-javascript/)


## New Features and Changes

### 1. New File: `narratives.js`
- **Purpose**: Adds procedurally generated narratives to enhance user engagement.
- **Features**:
  - A list of dynamic storylines, each containing:
    - `title`: Brief description of the scenario.
    - `intro`: Introduction displayed before the typing challenge.
    - `success`: Message for successful completion.
    - `failure`: Message for failure.
  - `getRandomNarrative`: A function to select a random narrative for each challenge.

---

### 2. Updates to `index.html`
- **Added Narrative and Outcome Sections**:
  - `<div id="narrative">`: Displays the narrative introduction before the typing challenge.
  - `<div id="outcome">`: Displays success or failure messages after the challenge.
- **Changes**:
  ```html
  <div id="narrative" style="display: none;"></div>
  <div class="typing-text"><p></p></div>
  <div id="outcome" style="display: none;"></div>
### 3. Updates to `script.js`
#### Narrative Integration:
- **Added `getRandomNarrative` Import**:
  - Dynamically fetches a narrative for each typing challenge.
- **New `displayNarrativeIntro` Function**:
  - Shows the narrative introduction before the typing challenge.
  - Contains a "Start Typing Challenge" button to transition to the game.

#### Improved Game Logic:
- **Failure Conditions**:
  - The player fails if:
    1. They do not finish typing the paragraph within the time limit.
    2. They exceed the allowed mistake threshold.
- **Timer Logic**:
  - When the timer reaches zero, the game automatically evaluates the player’s performance as a failure if the challenge isn’t completed.

#### Key Code Snippets:
- **Narrative Introduction**:
  ```javascript
  function displayNarrativeIntro() {
    narrativeDiv.innerHTML = `
      <h2>${currentNarrative.title}</h2>
      <p>${currentNarrative.intro}</p>
      <button id="startChallenge">Start Typing Challenge</button>
    `;
    narrativeDiv.style.display = "block";
    outcomeDiv.style.display = "none";

    document.getElementById("startChallenge").addEventListener("click", () => {
      narrativeDiv.style.display = "none";
      loadParagraph();
      inpField.focus();
    });
  }
### 4. Updates to `style.css`
#### New Styles for Narrative and Outcome Sections
- **Added Styles**:
  - Styled narrative and outcome sections to align with the overall aesthetic of the game.
  - Example:
    ```css
    #narrative, #outcome {
      display: none;
      text-align: center;
      background: #fff;
      padding: 20px 30px;
      border-radius: 10px;
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
      max-width: 600px;
      margin: 20px auto;
    }
    ```

#### Improved Typing Feedback
- **Enhanced `.correct`, `.incorrect`, and `.active` styles**:
  - Makes visual feedback for typing more noticeable and user-friendly.
  - Example:
    ```css
    .typing-text p span.correct {
      color: #2e7d32; /* Darker green for correct text */
      font-weight: bold;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }

    .typing-text p span.incorrect {
      color: #d32f2f; /* Darker red for incorrect text */
      background: #ffcdd2; /* Light red background */
      font-weight: bold;
      border-radius: 5px;
      padding: 0 2px;
    }
    ```

#### Enhanced Button Styles
- **New Gradients and Hover Effects**:
  - Buttons now have a more interactive appearance.
  - Example:
    ```css
    button {
      background: linear-gradient(135deg, #d29ad4, #b97bb8);
      color: #fff;
      border-radius: 8px;
      transition: transform 0.2s ease, box-shadow 0.3s ease;
    }

    button:hover {
      background: linear-gradient(135deg, #c78bc8, #9c5a9d);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    }
    ```

---

### 5. Summary
- **Dynamic Narratives**:
  - Each typing challenge starts with a unique, generated storyline.
- **Failure Conditions**:
  - A challenge is considered failed if:
    1. The timer runs out before completing the paragraph.
    2. The player exceeds the allowed mistake threshold.
- **Improved Feedback**:
  - Provides real-time visual feedback for correct and incorrect typing.
  - Displays clear success or failure messages at the end of the challenge.
- **Enhanced UI**:
  - Improved button styles with hover effects and gradients.
  - Responsive design for smaller screens, ensuring a seamless user experience across devices.

