// Memory Matching Game (Refactored JavaScript with Click Prevention on Matched Tiles)

// Utility functions for toggling, adding, and removing CSS classes
function toggleClass(id, className) {
  const elem = document.getElementById(id);
  elem.classList.toggle(className);
}

function addClass(id, className) {
  const elem = document.getElementById(id);
  if (!elem.classList.contains(className)) {
    elem.classList.add(className);
  }
}

function removeClass(id, className) {
  const elem = document.getElementById(id);
  if (elem.classList.contains(className)) {
    elem.classList.remove(className);
  }
}

// Main game object to encapsulate game logic
const MemoryGame = {
  A: [],
  pairCount: 0,
  tileCount: 0,
  lastTile: null,
  openTile: null,

  // Initialize game
  init() {
    this.A = this.shuffle();
    this.pairCount = 0;
    this.tileCount = 0;
    this.lastTile = null;
    this.openTile = null;
    this.resetTiles();
    removeClass("overlay_win", "overlay_win_open");
  },

  // Shuffle tiles using Fisher-Yates algorithm
  shuffle() {
    const symbols = [
      "pipe", "pipepipe", "equal", "equalequal",
      "assign", "assignassign", "plus", "plusplus",
      "neq", "neqneq", "comment", "commentcomment",
      "base", "basebase", "mean", "meanmean"
    ];

    for (let i = symbols.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [symbols[i], symbols[j]] = [symbols[j], symbols[i]];
    }

    return symbols;
  },

  // Reset all tiles
  resetTiles() {
    for (let i = 0; i < 16; i++) {
      this.removeTileSelection(i);
      this.addTileEvent(i, this.A[i]);
      removeClass(`tile_${i}`, "tile_closed");
    }
  },

  // Add event listener to a tile
  addTileEvent(i, elem) {
    document.getElementById(`tile_${i}`).onclick = () => this.handleTileClick(i, elem);
  },

  // Handle tile click events
  handleTileClick(i, elem) {
    const tile = document.getElementById(`tile_${i}`);

    // Prevent click if tile is already matched
    if (tile.classList.contains("tile_closed")) return;

    this.openTile = i;
    addClass(`tile_${i}`, "tile_open");
    addClass(`tile_icon_${i}`, `math-${elem}`);

    if (this.tileCount === 1) {
      this.checkMatch(i);
      this.tileCount = 0;
    } else {
      this.lastTile = i;
      this.tileCount++;
    }
  },

  // Check if selected tiles match
  checkMatch(currentTile) {
    const match = this.A[currentTile].includes(this.A[this.lastTile]) ||
                  this.A[this.lastTile].includes(this.A[currentTile]);

    if (match && currentTile !== this.lastTile) {
      this.markAsMatched(currentTile);
      this.markAsMatched(this.lastTile);
      this.pairCount++;

      if (this.pairCount === 8) {
        addClass("overlay_win", "overlay_win_open");
      }
    } else {
      this.removeWithDelay(currentTile, this.lastTile);
    }
  },

  // Mark tile as matched and disable further clicks
  markAsMatched(i) {
    const tile = document.getElementById(`tile_${i}`);
    addClass(`tile_${i}`, "tile_closed");
    tile.onclick = null; // Disable click
  },

  // Remove tile classes after delay for mismatches
  removeWithDelay(first, second) {
    setTimeout(() => {
      this.removeTileSelection(first);
      this.removeTileSelection(second);
    }, 1000);
  },

  // Remove tile selection (hide tile)
  removeTileSelection(i) {
    const symbols = ["pipe", "pipepipe", "equal", "equalequal", "assign", "assignassign", "plus", "plusplus", "neq", "neqneq", "comment", "commentcomment", "base", "basebase", "mean", "meanmean"];
    symbols.forEach(symbol => removeClass(`tile_icon_${i}`, `math-${symbol}`));
    removeClass(`tile_${i}`, "tile_open");
  }
};

// Initialize game on page load
window.onload = () => MemoryGame.init();

// Reset game on overlay click
document.getElementById("overlay_win").onclick = () => MemoryGame.init();
