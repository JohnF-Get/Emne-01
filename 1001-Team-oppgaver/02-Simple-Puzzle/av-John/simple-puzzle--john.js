// Position and state variables
let horizontalPosition = 24; // The puzzle piece is at the right end
let verticalPosition = 0; // The puzzle piece is from the top
let color = 1; // Starts with color 1.
let countAddedPieces = 0; // How many pieces are on the board?


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

function changePositionAndColor() {
  horizontalPosition -= 6;
  if (horizontalPosition < 0) {
      horizontalPosition = 24;
      verticalPosition += 6;
  }
  color = color === 1 ? 2 : 1;
}

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


function addNormalPuzzlePieceToBoard() {
  if (countAddedPieces >= 25) {
      alert("Oi oi, puslespillet er fullt! Ikke mer plass her, kompis!");
      return;
  }
  if (!checkValidPosition(true, true, true, true)) return;
  addPuzzlePiece('board', true, true, true, true, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

function addPuzzlePieceWithoutTopToBoard() {
  if (countAddedPieces >= 25) {
      alert("Du har puslet nok for i dag, kanskje ta en kaffepause?");
      return;
  }
  if (!checkValidPosition(false, true, true, true)) return;
  addPuzzlePiece('board', false, true, true, true, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

function addPuzzlePieceWithoutRightToBoard() {
  if (countAddedPieces >= 25) {
      alert("Hei, her er det fullt! Trenger du et større bord?");
      return;
  }
  if (!checkValidPosition(true, false, true, true)) return;
  addPuzzlePiece('board', true, false, true, true, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

function addPuzzlePieceWithoutBottomToBoard() {
  if (countAddedPieces >= 25) {
      alert("Ojda, alle puslebitene er i hus! Ingen flere tillatt.");
      return;
  }
  if (!checkValidPosition(true, true, false, true)) return;
  addPuzzlePiece('board', true, true, false, true, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

function addPuzzlePieceWithoutLeftToBoard() {
  if (countAddedPieces >= 25) {
      alert("Mer pusling? Nei, vi har nådd grensen for galskap!");
      return;
  }
  if (!checkValidPosition(true, true, true, false)) return;
  addPuzzlePiece('board', true, true, true, false, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

function addPuzzlePieceWithoutTopAndRightToBoard() {
  if (countAddedPieces >= 25) {
      alert("Beklager, men puslespillbitene har gått tom for plass.");
      return;
  }
  if (!checkValidPosition(false, false, true, true)) return;
  addPuzzlePiece('board', false, false, true, true, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

function addPuzzlePieceWithoutTopAndLeftToBoard() {
  if (countAddedPieces >= 25) {
      alert("Oops, det er ingen ledig plass igjen her! Overbelastning!");
      return;
  }
  if (!checkValidPosition(false, true, true, false)) return;
  addPuzzlePiece('board', false, true, true, false, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

function addPuzzlePieceWithoutBottomAndLeftToBoard() {
  if (countAddedPieces >= 25) {
      alert("Hvem skulle trodd! Alle puslebitene er allerede på plass!");
      return;
  }
  if (!checkValidPosition(true, true, false, false)) return;
  addPuzzlePiece('board', true, true, false, false, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

function addPuzzlePieceWithoutRightAndBottomToBoard() {
  if (countAddedPieces >= 25) {
      alert("Stopp! Bordet er fullt. Legg bort puslebitene.");
      return;
  }
  if (!checkValidPosition(true, false, false, true)) return;
  addPuzzlePiece('board', true, false, false, true, '', color, horizontalPosition, verticalPosition);
  changePositionAndColor();
  countAddedPieces++;
}

// Adding buttons for different puzzle pieces
addPuzzlePiece("buttons", true, true, true, true, "addNormalPuzzlePieceToBoard()", 1);
addPuzzlePiece("buttons", false, true, true, true, "addPuzzlePieceWithoutTopToBoard()", 2);
addPuzzlePiece("buttons", true, false, true, true, "addPuzzlePieceWithoutRightToBoard()", 1);
addPuzzlePiece("buttons", true, true, false, true, "addPuzzlePieceWithoutBottomToBoard()", 2);
addPuzzlePiece("buttons", true, true, true, false, "addPuzzlePieceWithoutLeftToBoard()", 1);
addPuzzlePiece("buttons", false, false, true, true, "addPuzzlePieceWithoutTopAndRightToBoard()", 2);
addPuzzlePiece("buttons", false, true, true, false, "addPuzzlePieceWithoutTopAndLeftToBoard()", 1);
addPuzzlePiece("buttons", true, true, false, false, "addPuzzlePieceWithoutBottomAndLeftToBoard()", 2);
addPuzzlePiece("buttons", true, false, false, true, "addPuzzlePieceWithoutRightAndBottomToBoard()", 1);

// Instructions
document.getElementById("boardInstructions").innerHTML = /*HTML*/ `            
<h2>Hvordan spille</h2>
<ol>
    <li><strong>Målet med spillet</strong>: Formålet med dette puslespillet er å plassere puslebrikker på brettet i henhold til bestemte regler, slik at alle brikkene passer sammen og fyller brettet uten å bryte reglene.</li>
    <li><strong>Brettoppsett</strong>: Spillet har et rutenettbrett som vises i det blå området til venstre på skjermen. Nederst finnes de forskjellige typer puslebrikker du kan velge mellom.</li>
    <li><strong>Velg puslebrikker</strong>: Klikk på de ulike knappene for å velge hvilken type puslebrikke du vil plassere på brettet. Hver knapp representerer en unik puslebrikkeform, noen med manglende sider (topp, høyre, bunn, venstre), som må plasseres på riktig sted.</li>
    <li><strong>Regler for plassering av brikker</strong>:
        <ul>
            <li>En brikke kan ikke plasseres på toppen av brettet hvis den har en "topp" (øverste kant).</li>
            <li>En brikke kan ikke plasseres på bunnen av brettet hvis den har en "bunn" (nederste kant).</li>
            <li>En brikke kan ikke plasseres helt til venstre hvis den har en "venstre" side.</li>
            <li>En brikke kan ikke plasseres helt til høyre hvis den har en "høyre" side.</li>
        </ul>
    </li>
    <li><strong>Fargene byttes på brikkene</strong>: Fargen på brikkene skifter hver gang du legger til en ny brikke på brettet. Dette gir et variert og fargerikt utseende når brettet er ferdig utfylt.</li>
    <li><strong>Fullføre puslespillet</strong>: Når du har plassert totalt 25 brikker på brettet (5x5 rutenett), er brettet fullt, og spillet er over. Hvis du forsøker å legge til flere brikker, vil du få en melding om at brettet er fullt.</li>
    <li><strong>Feilmeldinger og tips</strong>: Hvis du forsøker å plassere en brikke som bryter reglene (for eksempel en brikke med en topp på den øverste raden), vil du motta en advarsel som forklarer hvorfor dette ikke er tillatt og gir deg et hint om hvordan du kan plassere brikken riktig.</li>
</ol>

    `;
