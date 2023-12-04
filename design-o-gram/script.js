class Utility {
  static create(className, text, tagName = "div") {
    const el = document.createElement(tagName);
    el.className = className;
    el.textContent = text;
    return el;
  }
}

class Board {
  constructor(len, density = 0) {
    this.boardArray = new Array(len).fill().map(() => new Array(len).fill(0));
    this.refArray = new Array(len)
      .fill()
      .map(() =>
        new Array(len).fill().map(() => Math.round(Math.random() + density))
      );
    this.cols = new Array(len).fill().map(() => [0]);
    this.rows = new Array(len).fill().map(() => [0]);
    this.refcols = new Array(len).fill().map(() => [0]);
    this.refrows = new Array(len).fill().map(() => [0]);
    this.clearRowsCols();
    this.setRowsCols(this.refArray, this.refrows, this.refcols);
  }
  clearRowsCols() {
    const len = this.rows.length;
    this.cols = new Array(len).fill().map(() => [0]);
    this.rows = new Array(len).fill().map(() => [0]);
  }
  setRowsCols(arr, rows, cols) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        let val = arr[i][j];
        if (val) {
          cols[j][cols[j].length - 1]++;
          rows[i][rows[i].length - 1]++;
        } else {
          if (cols[j][cols[j].length - 1]) {
            cols[j].push(0);
          }
          if (rows[i][rows[i].length - 1]) {
            rows[i].push(0);
          }
        }
      }
    }
    for (const ar of cols) {
      if (ar.length > 1 && !ar[ar.length - 1]) ar.splice(-1, 1);
    }
    for (const ar of rows) {
      if (ar.length > 1 && !ar[ar.length - 1]) ar.splice(-1, 1);
    }
  }
  togglePoint(i, j) {
    this.boardArray[i][j] = this.boardArray[i][j] ? 0 : 1;
    this.clearRowsCols();
    this.setRowsCols(this.boardArray, this.rows, this.cols);
  }
}
class BoardElement {
  constructor(board, manager) {
    const hostEl = document.getElementById(manager.hostEl);
    hostEl.innerHTML = "";
    this.board = board;
    this.refcol = board.refcols;
    this.refrow = board.refrows;
    this.timer = 0;
    this.boardEl = Utility.create("board");
    for (let i = 0; i <= this.board.boardArray.length; i++) {
      const rowEl = document.createElement("div");
      rowEl.className = "row-el";
      for (let j = 0; j <= this.board.boardArray.length; j++) {
        const cellEl = document.createElement("div");
        const cellInner = Utility.create("innercell");
        cellEl.appendChild(cellInner);
        if (i == 0 && j == 0) {
          cellEl.className = " cell corner-cell";
        } else if (j == 0) {
          cellEl.className = "cell row-header-cell";
          this.refrow[i - 1].forEach((val) => {
            cellInner.textContent += val + ",";
          });
          cellEl.textContent = cellEl.textContent.slice(0, -1);
        } else if (i == 0) {
          cellEl.className = "cell column-header-cell";
          this.refcol[j - 1].forEach((val) => {
            cellEl.textContent += val + "\n";
          });
        } else {
          cellEl.className = "cell game-cell";
          cellEl.dataset.indexes = i - 1 + "-" + (j - 1);
          cellEl.addEventListener("click", (event) => {
            if (!this.checkWin()) {
              const indexes = event.currentTarget.dataset.indexes.split("-");
              board.togglePoint(indexes[0], indexes[1]);
              event.currentTarget
                .querySelector(".innercell")
                .classList.toggle("innerfull");
            }
            if (this.checkWin()) {
              document.querySelectorAll(".innerfull").forEach((element) => {
                element.classList.add("solved");
              });
              this.stopTimer();
              this.timerEl.classList.add("border");
            }
          });
        }
        rowEl.appendChild(cellEl);
      }
      this.boardEl.appendChild(rowEl);
    }
    hostEl.appendChild(this.boardEl);
    const containerEl = Utility.create("bottom-container");
    const restartBtn = Utility.create("restart-btn", "Restart");
    restartBtn.addEventListener(
      "click",
      manager.showMenu.bind(manager, "game")
    );
    containerEl.appendChild(restartBtn);
    this.timerEl = Utility.create("timer", "00 : 00");

    containerEl.appendChild(this.timerEl);
    hostEl.appendChild(containerEl);
    this.interval = setInterval(this.formatTimer, 1000);
  }
  checkWin() {
    let checkwin = true;
    this.board.cols.forEach((col, index) => {
      if (col.length === this.refcol[index].length) {
        col.forEach((el, ind) => {
          if (el != this.refcol[index][ind]) {
            checkwin = false;
          }
        });
      } else {
        checkwin = false;
      }
    });
    this.board.rows.forEach((row, index) => {
      if (row.length === this.refrow[index].length) {
        row.forEach((el, ind) => {
          if (el != this.refrow[index][ind]) {
            checkwin = false;
          }
        });
      } else {
        checkwin = false;
      }
    });
    return checkwin;
  }
  stopTimer = () => {
    clearInterval(this.interval);
  };
  formatTimer = () => {
    const mins = Math.floor(this.timer / 60);
    const secs = this.timer % 60;
    this.timerEl.innerHTML =
      (mins < 10 ? "0" + mins : mins) + " : " + (secs < 10 ? "0" + secs : secs);
    this.timer++;
  };
}
class Game {
  constructor(len, manager) {
    this.board = new Board(len, 0.1);
    new BoardElement(this.board, manager);
  }
}
class GameManager {
  constructor(host, ...modes) {
    this.modes = modes;
    this.hostEl = host;
    this.showMenu(this.hostEl);
  }
  showMenu(hostEl) {
    const host = document.getElementById(hostEl);
    host.innerHTML = "";
    const board = Utility.create("menu-board");
    for (const mode of this.modes) {
      const menuEl = Utility.create("menu");
      menuEl.innerHTML = `${mode} treatments`;
      menuEl.addEventListener("click", this.start.bind(null, mode, this));
      board.appendChild(menuEl);
    }
    host.appendChild(board);
  }
  start(mode, manager) {
    new Game(mode, manager);
  }
}
// pass any board size to game manager here:
new GameManager("game", 3, 4, 7);
