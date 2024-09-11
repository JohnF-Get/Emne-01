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

//trenger å gjøre
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
    const coinsType = [20, 10, 5, 1];
    let changeAmount = change;
    // 
  for (let i = 0; i < coinsType.length; i++) {
    let coin = coinsType[i]; 
    if (changeAmount >= coin) {
      changeAmount -= coin;
      console.log(`Reduced amount by ${coin}. Remaining: ${changeAmount}`);
    }

    
    // let count = changeAmount / coin


   
  }
}


function updateCoinsInMachine(coinsInserted, coinsInMachine) {
  let newCoinsInMachine = 0;
  for (let i = 0; i < coinsInserted.length; i++) {
    newCoinsInMachine.push(coinsInserted[i] + coinsInMachine[i])
  }
  return newCoinsInMachine;
}
