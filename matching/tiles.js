//These functions help add, remove or toggle css classes

function tog_class(id, cl) {
  var elem = document.getElementById(id);
  if (elem.classList.contains(cl) === true) {
    elem.classList.remove(cl);
  } else {
    elem.classList.add(cl);
  }
}

function add_class(id, cl) {
  var elem = document.getElementById(id);
  if (elem.classList.contains(cl) !== true) {
    elem.classList.add(cl);
  }
}

function rem_class(id, cl) {
  var elem = document.getElementById(id);
  if (elem.classList.contains(cl) === true) {
    elem.classList.remove(cl);
  }
}

//This function adds/removes the selected class of a selected tile

function tog_elem(i, elem) {
  document.getElementById("tile_" + i).onclick = function() {
    tog_class("tile_" + i, "tile_open");
    setTimeout(function() {
      tog_class("tile_icon_" + i, "math-" + elem);
    }, 0);
  };
}

//This function adds the selected class of a selected tile

function add_elem(i, elem) {
  document.getElementById("tile_" + i).onclick = function() {
    window.opentile = i;
    add_class("tile_" + i, "tile_open");
    add_class("tile_icon_" + i, "math-" + elem);

    if (window.tilecount == 1) {
	if (i != window.lasttile && window.A[i].indexOf(window.A[window.lasttile]) >= 0  ||
	    window.A[window.lasttile].indexOf(window.A[i]) >= 0) {
        //checks if the 2 symbols match and aren't the same tile
        var first = document.getElementById("tile_" + i); //get tile id
        var second = document.getElementById("tile_" + window.lasttile); //get tile id

        first.classList.add("tile_closed"); //remove tiles
        second.classList.add("tile_closed"); //remove tiles

        first.onclick = ""; //remove event handlers
        second.onclick = ""; //remove event handlers

        window.paircount++; //increment pair count
        if (window.paircount == 8) {
          //win condition
          //alert('You win!');//show victory banner here
          add_class("overlay_win", "overlay_win_open");
        }
      } else {
        rem_delay(window.opentile, window.lasttile); //clears the tiles with a 1 second delay(to let the player see the tile)
      }

      window.tilecount = 0; //resets the opened tile counter to 0
    } else {
      window.lasttile = i; //sets the last tile
      window.tilecount++;
    } //increments the tile count
  };
}

//This function removes all tile classes (used to hide tiles)

function rem_select(i) {
    rem_class("tile_" + i, "tile_open");
    rem_class("tile_icon_" + i, "math-pipe");
    rem_class("tile_icon_" + i, "math-equal");
    rem_class("tile_icon_" + i, "math-assign");
    rem_class("tile_icon_" + i, "math-plus");
    rem_class("tile_icon_" + i, "math-neq");
    rem_class("tile_icon_" + i, "math-comment");
    rem_class("tile_icon_" + i, "math-base");
    rem_class("tile_icon_" + i, "math-mean");
    rem_class("tile_icon_" + i, "math-pipepipe");
    rem_class("tile_icon_" + i, "math-equalequal");
    rem_class("tile_icon_" + i, "math-assignassign");
    rem_class("tile_icon_" + i, "math-plusplus");
    rem_class("tile_icon_" + i, "math-neqneq");
    rem_class("tile_icon_" + i, "math-commentcomment");
    rem_class("tile_icon_" + i, "math-basebase");
    rem_class("tile_icon_" + i, "math-meanmean");
}

//this function hides tiles, with a delay
//it is called when the tiles don't match

function rem_delay(first, second) {
  setTimeout(function() {
    rem_select(first); //closes open tiles
    rem_select(second); //closes open tiles
  }, 1000);
}

//This function shuffles the tiles

function shuffle() {
  var j;
  var t;

  var A = [
      "pipe",
      "pipepipe",
      "equal",
      "equalequal",
      "assign",
      "assignassign",
      "plus",
      "plusplus",
      "neq",
      "neqneq",
      "comment",
      "commentcomment",
      "base",
      "basebase",
      "mean",
      "meanmean"
  ];

  for (i = 0; i < 16; i++) {
    j = Math.floor(Math.random() * (i + 1));
    t = A[i];
    A[i] = A[j];
    A[j] = t;
  }
  console.log(A);
  return A;
}

//this function resets all tiles

function reset_tiles() {
  for (i = 0; i < 16; i++) {
    rem_select(i); //turns around tiles
    add_elem(i, A[i]); //adds events
    rem_class("tile_" + i, "tile_closed"); //Tiles back to normal opacity..
  }
}

//this function resets the game

function reset() {
  window.A = shuffle(); //shuffle tiles and reset variables
  window.paircount = 0;
  window.tilecount = 0;
  window.lasttile = null;
  window.opentile = null;

  reset_tiles(); //reset all tiles

  rem_class("overlay_win", "overlay_win_open"); //hide victory banner
}

//variables

var A = shuffle(); //shuffle the tiles
var paircount = 0; //tracks the number of matches
var tilecount = 0; //tracks the number of open tiles
var lasttile = null; //tracks the last open tile
var opentile = null; //tracks the current open tile

//do stuff here

for (i = 0; i < 16; i++) {
  add_elem(i, A[i]); //adds event handlers to the tiles.
}

document.getElementById("overlay_win").onclick = function() {
  reset();
};
