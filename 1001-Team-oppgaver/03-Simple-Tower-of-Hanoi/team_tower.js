/******************************************************************************
 * MODEL: Holde styr på hvor hver disk er plassert.
 ******************************************************************************/
//   hvor er diskene, 0 = venstre tårn, 1 = midten, 2 = høyre
//   alle starter til venstre
let smallDiskOnTowerIndex = 0;
let mediumDiskOnTowerIndex = 0;
let largeDiskOnTowerIndex = 0;

/******************************************************************************
 * VIEW: Genererer HTML basert på diskenes posisjon fra modellen til å bestemme
 *       hvor hver disk skal vises.
 ******************************************************************************/
updateView();
function updateView() {
  let leftTower = '';
  let middleTower = '';
  let rightTower = '';

  
  if (largeDiskOnTowerIndex === 0) {
    leftTower += '<div class="disk" style="width: 70px"></div>';
  }
  if (largeDiskOnTowerIndex === 1) {
    middleTower += '<div class="disk" style="width: 70px"></div>';
  }
    if (largeDiskOnTowerIndex === 2) {
    rightTower += '<div class="disk" style="width: 70px"></div>';
  }
  if (mediumDiskOnTowerIndex === 0) {
    leftTower += '<div class="disk" style="width: 50px"></div>';
  }
  if (mediumDiskOnTowerIndex === 1) {
    middleTower += '<div class="disk" style="width: 50px"></div>';
  }
  if (mediumDiskOnTowerIndex === 2) {
    rightTower += '<div class="disk" style="width: 50px"></div>';
  }
  
  if (smallDiskOnTowerIndex === 0) {
    leftTower += '<div class="disk" style="width: 30px"></div>';
  }
  if (smallDiskOnTowerIndex === 1) {
    middleTower += '<div class="disk" style="width: 30px"></div>';
  }
  if (smallDiskOnTowerIndex === 2) {
    rightTower += '<div class="disk" style="width: 30px"></div>';
  }

  document.getElementById('app').innerHTML = /*HTML*/ `
                <div class="game-container">
                    <div class="tower-container">
                        <div class="tower">
                        ${leftTower}
                        
                        </div>
                    </div>
                    <div class="tower-container">
                        <div class="tower">
                        ${middleTower}
                         </div>
                    </div>
                    <div class="tower-container">
                        <div class="tower">
                         ${rightTower}                                
                        </div>
                    </div>
                </div>
                <div class="buttons">
                Flytt liten disk til 
                <button onclick="moveSmallDisk(0)">venstre tårn</button>
                <button onclick="moveSmallDisk(1)">midtre tårn</button>
                <button onclick="moveSmallDisk(2)">høyre tårn</button>
                <br/>
                Flytt medium disk
                <button onclick="moveMediumDisk(0)">venstre tårn</button>
                <button onclick="moveMediumDisk(1)">midtre tårn</button>
                <button onclick="moveMediumDisk(2)">høyre tårn</button>
                <br/>
                Flytt stor disk
                <button onclick="moveLargeDisk(0)">venstre tårn</button>
                <button onclick="moveLargeDisk(1)">midtre tårn</button>
                <button onclick="moveLargeDisk(2)">høyre tårn</button>
                <br/></div>
            `;
}

/******************************************************************************
 * CONTROLLER: Flytte diskene til de angitte tårnene basert på brukerens valg
 ******************************************************************************/
/**
 * Flytter den lille disken til det spesifiserte tårnet.
 * @param {number} toTowerIndex - Indeksen til tårnet som den lille disken skal flyttes til 
 *                                (0 = venstre, 1 = midten, 2 = høyre).
 */
function moveSmallDisk(toTowerIndex) {
  smallDiskOnTowerIndex = toTowerIndex;
  updateView();
}

/**
 * Flytter den mellomstore disken til det spesifiserte tårnet.
 * @param {number} toTowerIndex - Indeksen til tårnet som den mellomstore disken skal flyttes til
 *                                (0 = venstre, 1 = midten, 2 = høyre).
 */
function moveMediumDisk(toTowerIndex) {
  mediumDiskOnTowerIndex = toTowerIndex;
  updateView();
}

/**
 * Flytter den store disken til det spesifiserte tårnet.
 * @param {number} toTowerIndex - Indeksen til tårnet som den store disken skal flyttes til 
 *                                (0 = venstre, 1 = midten, 2 = høyre).
 */
function moveLargeDisk(toTowerIndex) {
  largeDiskOnTowerIndex = toTowerIndex;
  updateView();
}
