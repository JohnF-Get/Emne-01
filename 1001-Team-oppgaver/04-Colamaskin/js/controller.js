function buyCoke() {
  const cokePrice = 25;
  let coinsPaid = valueFromBuyer(coinsInserted); // count money from the buyer
  let coinsinMachineValue = valueInMachine(coinsInMachine);

  if (coinsPaid >= cokePrice) {
    let change = coinsPaid - cokePrice;
    isCokeInDelivery = true;
    cokesInStore--;
    giveChange(change);
    updateCoinsInMachine(coinsInserted, coinsInMachine);

  } else if (coinsPaid <= cokePrice) {
    errorMessage = coinsPaid + ' is less than ' + cokePrice;
    isCokeInDelivery = false;
  }
  updateView();
}

//trenger å ghøre
function takeCoke() {
  
  updateView();
}

function insertCoin(value) {
  if (value === 1) {
    coinsInserted[0]++;
  } else if (value === 5) {
    coinsInserted[1]++;
  } else if (value === 10) {
    coinsInserted[2]++;
  } else if (value === 20) {
    coinsInserted[3]++;
  }

  updateView();
}

function returnCoins() {
  coinsReturned = [...coinsInserted];
  coinsInserted = [0, 0, 0, 0];
  updateView();
}

function takeCoins() {
  coinsReturned = [0, 0, 0, 0];
  updateView();
}

function valueFromBuyer(coinsInserted) {
  let value = 0;
  value += coinsInserted[0] * 1;
  value += coinsInserted[1] * 5;
  value += coinsInserted[2] * 10;
  value += coinsInserted[3] * 20;
  return value;
}

function valueInMachine(coinsInMachine) {
  let value = 0;
  value += coinsInMachine[0] * 1;
  value += coinsInMachine[1] * 5;
  value += coinsInMachine[2] * 10;
  value += coinsInMachine[3] * 20;
  return value;
}

function giveChange(change) {
    const coinsType = [1, 5, 10, 20];
    //let changeAmount = change;
    // vi må bruke changeAmout med coinsType og coinsInMachine
  for (let i = 0; i < coinsType.length; i++ ) {
      // coinsType = coinsType[i];
  }
}


function updateCoinsInMachine(coinsInserted, coinsInMachine) {
  let newCoinsInMachine = 0;
  for (let i = 0; i < coinsInserted.length; i++) {
    newCoinsInMachine.push(coinsInserted[i] + coinsInMachine[i])
  }
  return newCoinsInMachine;
}
