/**
 * @fileoverview Simple Puzzle Game
 * @description This file contains functions to manage a simple puzzle game, where players add puzzle pieces to a board according to certain rules.
 * 
 * - **Model:** Manages the state and logic of the game (e.g., position, color, count of puzzle pieces).
 * - **View:** Manages the DOM elements and their presentation (e.g., rendering puzzle pieces and instructions).
 * - **Controller:** Handles user interactions, updates the model, and modifies the view accordingly.
 * 
 * The game involves different types of puzzle pieces, each with unique properties that determine their placement on the board.
 * The position and color of each piece change dynamically as they are added to the board.
 * 
 * @version 2.0
 * @date 2024-08-29
 */

/******************************************************************************
 * MODEL - state and logic: position, color, count of puzzle pieces.
 ******************************************************************************/
// Position and state variables
let horizontalPosition = 24; // Starts at right edge (24), decreases by 6 to 0.
let verticalPosition = 0; // Starts at top, increases by 6 to bottom.
let color = 1; // Starts with color 1. There are 2 color possibilities
let countAddedPieces = 0; // How many pieces are on the board?

/**
 * Changes the position and color for the next puzzle piece.
 * Moves the piece to the next position on the board and alternates the color.
 */
function changePositionAndColor() {
  horizontalPosition -= 6;
  if (horizontalPosition < 0) {
    horizontalPosition = 24;
    verticalPosition += 6;
  }
  color = (color === 1) ? 2 : 1;

}

/**
 * Checks if the current position is valid for placing a puzzle piece.
 * @param {boolean} hasTop - Indicates if the piece has a top side.
 * @param {boolean} hasRight - Indicates if the piece has a right side.
 * @param {boolean} hasBottom - Indicates if the piece has a bottom side.
 * @param {boolean} hasLeft - Indicates if the piece has a left side.
 * @returns {boolean} - Returns true if the position is valid, otherwise false.
 */
function checkValidPosition(hasTop, hasRight, hasBottom, hasLeft) {
  if (verticalPosition === 0 && hasTop) {
    alert(
      "Du kan ikke plassere en brikke med topp her! Det er som å prøve å bygge et tak før veggene er på plass.");
    return false;
  }
  if (verticalPosition === 24 && hasBottom) {
    alert("Bare brikker uten bunn kan legges her. Som å sette en stol på taket - det gir ingen mening!");
    return false;
  }
  if (horizontalPosition === 0 && hasLeft) {
    alert(
      "Her trengs det en brikke uten venstrekant. Tenk deg å prøve å komme inn i huset uten en dør - det fungerer ikke!");
    return false;
  }
  if (horizontalPosition === 24 && hasRight) {
    alert(
      "Du kan ikke plassere en brikke med høyre side her! Det er som å prøve å lukke døra med sofaen i veien.");
    return false;
  }
  return true;
}

/******************************************************************************
 * VIEW - Render puzzle pieces and instructions
 ******************************************************************************/
/**
 * Adds a puzzle piece to the board.
 * @param {string} toId - The id of the element to add the piece to.
 * @param {boolean} hasTop - Indicates if the piece has a top side.
 * @param {boolean} hasRight - Indicates if the piece has a right side.
 * @param {boolean} hasBottom - Indicates if the piece has a bottom side.
 * @param {boolean} hasLeft - Indicates if the piece has a left side.
 * @param {string} onclick - The action to perform when the piece is clicked.
 * @param {number} color - The color of the piece.
 * @param {number} horizontalPosition - The horizontal position of the piece.
 * @param {number} verticalPosition - The vertical position of the piece.
 */
function addPuzzlePiece(toId, hasTop, hasRight, hasBottom, hasLeft, onclick, color, horizontalPosition,
  verticalPosition) {
  let style = "";
  if (horizontalPosition !== undefined) {
    style = `left: ${horizontalPosition + 0.5}em; top: ${verticalPosition + 0.5}em`;
  }
  document.getElementById(toId).innerHTML += /*HTML*/ `
      <div class="jigsaw${color}" onclick="${onclick}" style="${style}">
          ${hasTop ? `<span class="t"></span>` : ""}
          ${hasRight ? `<span class="r"></span>` : ""}
          ${hasBottom ? `<span class="b"></span>` : ""}
          ${hasLeft ? `<span class="l"></span>` : ""}
      </div>            
  `;
}

/******************************************************************************
 * CONTROLLER: User interaction
 ******************************************************************************/

/**
 * Adds a normal puzzle piece to the board.
 */
function addNormalPuzzlePieceToBoard() {
  if (countAddedPieces >= 25) {
    alert("Oi oi, puslespillet er fullt! Ikke mer plass her, kompis!");
    return;
  }
  if (!checkValidPosition(true, true, true, true)) return;
  addPuzzlePiece('puzzleBoard', true, true, true, true, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

/**
 * Adds a puzzle piece without a top to the board.
 */
function addPuzzlePieceWithoutTopToBoard() {
  if (countAddedPieces >= 25) {
    alert("Du har puslet nok for i dag, kanskje ta en kaffepause?");
    return;
  }
  if (!checkValidPosition(false, true, true, true)) return;
  addPuzzlePiece('puzzleBoard', false, true, true, true, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

/**
 * Adds a puzzle piece without a right side to the board.
 */
function addPuzzlePieceWithoutRightToBoard() {
  if (countAddedPieces >= 25) {
    alert("Hei, her er det fullt! Trenger du et større bord?");
    return;
  }
  if (!checkValidPosition(true, false, true, true)) return;
  addPuzzlePiece('puzzleBoard', true, false, true, true, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

/**
 * Adds a puzzle piece without a bottom to the board.
 */
function addPuzzlePieceWithoutBottomToBoard() {
  if (countAddedPieces >= 25) {
    alert("Ojda, alle puslebitene er i hus! Ingen flere tillatt.");
    return;
  }
  if (!checkValidPosition(true, true, false, true)) return;
  addPuzzlePiece('puzzleBoard', true, true, false, true, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

/**
 * Adds a puzzle piece without a left side to the board.
 */
function addPuzzlePieceWithoutLeftToBoard() {
  if (countAddedPieces >= 25) {
    alert("Mer pusling? Nei, vi har nådd grensen for galskap!");
    return;
  }
  if (!checkValidPosition(true, true, true, false)) return;
  addPuzzlePiece('puzzleBoard', true, true, true, false, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

/**
 * Adds a puzzle piece without both top and right sides to the board.
 */
function addPuzzlePieceWithoutTopAndRightToBoard() {
  if (countAddedPieces >= 25) {
    alert("Beklager, men puslespillbitene har gått tom for plass.");
    return;
  }
  if (!checkValidPosition(false, false, true, true)) return;
  addPuzzlePiece('puzzleBoard', false, false, true, true, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

/**
 * Adds a puzzle piece without both top and left sides to the board.
 */
function addPuzzlePieceWithoutTopAndLeftToBoard() {
  if (countAddedPieces >= 25) {
    alert("Oops, det er ingen ledig plass igjen her! Overbelastning!");
    return;
  }
  if (!checkValidPosition(false, true, true, false)) return;
  addPuzzlePiece('puzzleBoard', false, true, true, false, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

/**
 * Adds a puzzle piece without both bottom and left sides to the board.
 */
function addPuzzlePieceWithoutBottomAndLeftToBoard() {
  if (countAddedPieces >= 25) {
    alert("Hvem skulle trodd! Alle puslebitene er allerede på plass!");
    return;
  }
  if (!checkValidPosition(true, true, false, false)) return;
  addPuzzlePiece('puzzleBoard', true, true, false, false, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

/**
 * Adds a puzzle piece without both right and bottom sides to the board.
 */
function addPuzzlePieceWithoutRightAndBottomToBoard() {
  if (countAddedPieces >= 25) {
    alert("Stopp! Bordet er fullt. Legg bort puslebitene.");
    return;
  }
  if (!checkValidPosition(true, false, false, true)) return;
  addPuzzlePiece('puzzleBoard', true, false, false, true, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

// Adding clickable puzzle pieces for different puzzle pieces
addPuzzlePiece("puzzlePieceButtons", true, true, true, true, "addNormalPuzzlePieceToBoard()", 1);
addPuzzlePiece("puzzlePieceButtons", false, true, true, true, "addPuzzlePieceWithoutTopToBoard()", 2);
addPuzzlePiece("puzzlePieceButtons", true, false, true, true, "addPuzzlePieceWithoutRightToBoard()", 1);
addPuzzlePiece("puzzlePieceButtons", true, true, false, true, "addPuzzlePieceWithoutBottomToBoard()", 2);
addPuzzlePiece("puzzlePieceButtons", true, true, true, false, "addPuzzlePieceWithoutLeftToBoard()", 1);
addPuzzlePiece("puzzlePieceButtons", false, false, true, true, "addPuzzlePieceWithoutTopAndRightToBoard()", 2);
addPuzzlePiece("puzzlePieceButtons", false, true, true, false, "addPuzzlePieceWithoutTopAndLeftToBoard()", 1);
addPuzzlePiece("puzzlePieceButtons", true, true, false, false, "addPuzzlePieceWithoutBottomAndLeftToBoard()", 2);
addPuzzlePiece("puzzlePieceButtons", true, false, false, true, "addPuzzlePieceWithoutRightAndBottomToBoard()", 1);
