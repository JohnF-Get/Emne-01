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
let numbers = [1, 2, 5, 7, null, 3, 4, 8, 6];

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5)
}
/******************************************************************************
 * VIEW
 ******************************************************************************/
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
function swap(index) {
  const blankIndex = numbers.indexOf(null);
  if (areNeighbours(index, blankIndex)) {
    [numbers[index], numbers[blankIndex]] = [numbers[blankIndex], numbers[index]];
    updateView();
  }
}

function areNeighbours(index1, index2) {
  const row1 = Math.floor(index1 / 3);
  const col1 = index1 % 3;
  const row2 = Math.floor(index2 / 3);
  const col2 = index2 % 3;

  return (row1 === row2 && Math.abs(col1 - col2) === 1) || (col1 === col2 && Math.abs(row1 - row2) === 1);
}

function startAgain() {
  shuffleArray(numbers);
  updateView();
}

shuffleArray(numbers);
updateView();

// Add event listener to the "Start Again" button
document.getElementById('startAgainButton').addEventListener('click', startAgain);