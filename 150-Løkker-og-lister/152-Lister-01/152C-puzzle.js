/* OPPGAVE 152C:
 * Lag et tall-puslespill som viser tallene 1-8 i er rutenett på 3x3, 
 * dvs. 9 ruter. Den siste ruten er blank. Hvis man trykker på et tall
 * som ligger over, under, til høyre eller til venstre for den blanke, 
 * skal dette tallet og den blanke bytte plass. Bruk en liste av tall 
 * i modellen, for eksempel:
 * let numbers = [1, 2, 5, 7, null, 9, 3, 4, 8, 6]; */

/******************************************************************************
 * MODEL
 ******************************************************************************/

/**
 * @type {Array<number|null>}
 * @description Represents the current state of the puzzle. The array contains
 * numbers from 1 to 8 and a null value representing the blank tile.
 */
let numbers = [1, 2, 5, 7, null, 3, 4, 8, 6];

/******************************************************************************
 * VIEW
 ******************************************************************************/

/**
 * @function updateView
 * @description Updates the DOM to reflect the current state of the puzzle.
 * It generates tiles based on the numbers array and appends them to the 
 * puzzle container. Tiles with numbers are clickable to move, and the blank
 * tile is styled differently.
 */
function updateView() {
    const puzzleDiv = document.getElementById('puzzle');
    puzzleDiv.innerHTML = '';
    
    for (let i = 0; i < numbers.length; i++) {
        const tile = document.createElement('div');
        tile.className = 'puzzle__tile';

        if (numbers[i] !== null) {
            tile.innerHTML = numbers[i];
            tile.onclick = function () {
                swap(i);
            };
        } else {
            tile.className += ' puzzle__tile--blank';
        }
        
        puzzleDiv.appendChild(tile);
    }
}

/******************************************************************************
 * CONTROLLER
 ******************************************************************************/

/**
 * @function swap
 * @param {number} index - The index of the tile to move.
 * @description Moves a tile if it's adjacent to the blank tile. Swaps the tile
 * with the blank tile in the numbers array and updates the view.
 */
function swap(index) {
    const blankIndex = numbers.indexOf(null);
    if (areNeighbours(index, blankIndex)) {
        [numbers[index], numbers[blankIndex]] = [numbers[blankIndex], numbers[index]];
        updateView();
    }
}

/**
 * @function areNeighbours
 * @param {number} index1 - The index of the first tile.
 * @param {number} index2 - The index of the second tile (the blank tile).
 * @returns {boolean} - Returns true if the two tiles are meighbours.
 * @description Checks if two tiles are adjacent in a 3x3 grid. Tiles are
 * neighbours if they are next to each other in the same row or column.
 */
function areNeighbours(index1, index2) {
    const row1 = Math.floor(index1 / 3);
    const col1 = index1 % 3;
    const row2 = Math.floor(index2 / 3);
    const col2 = index2 % 3;

    return (row1 === row2 && Math.abs(col1 - col2) === 1) || (col1 === col2 && Math.abs(row1 - row2) === 1);
}

// Initialize the puzzle view
updateView();
