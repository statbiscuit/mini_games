// Memory Matching Game (Refactored with External Pairs.js)

import { pairs } from './pairs.js';

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
    this.A = this.shufflePairs();
    this.pairCount = 0;
    this.tileCount = 0;
    this.lastTile = null;
    this.openTile = null;
    this.resetTiles();
    removeClass("overlay_win", "overlay_win_open");
  },

  // Shuffle the pairs
  shufflePairs() {
    const allTiles = [];

    // Duplicate each pair (symbol and meaning) for the tiles
    pairs.forEach(pair => {
      allTiles.push({ id: pair.id, content: pair.symbol });
      allTiles.push({ id: pair.id, content: pair.meaning });
    });

    // Fisher-Yates shuffle
    for (let i = allTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allTiles[i], allTiles[j]] = [allTiles[j], allTiles[i]];
    }

    return allTiles;
  },

  // Reset all tiles
  resetTiles() {
    const container = document.querySelector(".tile_container");
    container.innerHTML = ""; // Clear existing tiles

    this.A.forEach((tileData, i) => {
      const tile = document.createElement("div");
      tile.id = `tile_${i}`;
      tile.className = "tile";

      const icon = document.createElement("i");
      icon.id = `tile_icon_${i}`;
      icon.className = "math";
      icon.textContent = tileData.content;

      tile.appendChild(icon);
      tile.onclick = () => this.handleTileClick(i, tileData);

      container.appendChild(tile);
    });
  },

  // Handle tile click events
  handleTileClick(i, tileData) {
    const tile = document.getElementById(`tile_${i}`);

    // Prevent click if tile is already matched
    if (tile.classList.contains("tile_closed")) return;

    this.openTile = i;
    addClass(`tile_${i}`, "tile_open");

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
    const currentId = this.A[currentTile].id;
    const lastId = this.A[this.lastTile].id;

    if (currentId === lastId && currentTile !== this.lastTile) {
      this.markAsMatched(currentTile);
      this.markAsMatched(this.lastTile);
      this.pairCount++;

      if (this.pairCount === pairs.length) {
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
      removeClass(`tile_${first}`, "tile_open");
      removeClass(`tile_${second}`, "tile_open");
    }, 1000);
  }
};

// Initialize game on page load
window.onload = () => MemoryGame.init();

// Reset game on overlay click
document.getElementById("overlay_win").onclick = () => MemoryGame.init();
