// controller.test.js

// Import the functions you want to test
const { initModel, insertCoin, buyCoke, returnCoins, takeCoins } = require('./controller'); // Adjust the import path as necessary

// Dummy view function
function updateView() { }

describe('Coke Machine Tests', () => {
    let coinsInMachine, coinsInserted, coinsReturned, cokesInStore, isCokeInDelivery;

    beforeEach(() => {
        // Initialize the model before each test
        initModel();
    });

    test('Buy Coke - Correct change - all coins in machine', () => {
        // Arrange
        initModel();
        insertCoin(20);
        insertCoin(20);
        coinsInMachine = [5, 5, 5, 5];

        // Act
        buyCoke();

        // Assert
        expect(coinsReturned).toEqual([0, 1, 1, 0]);
        expect(coinsInMachine).toEqual([5, 4, 4, 5]);
    });

    test('Buy Coke - Correct change - only 5kr and 1kr in machine', () => {
        // Arrange
        initModel();
        insertCoin(20);
        insertCoin(20);
        coinsInMachine = [5, 5, 0, 0];

        // Act
        buyCoke();

        // Assert
        expect(coinsReturned).toEqual([0, 3, 0, 0]);
        expect(coinsInMachine).toEqual([5, 2, 0, 0]);
    });

    test('Buy Coke - Sufficient money', () => {
        // Arrange
        initModel();
        insertCoin(20);
        insertCoin(5);

        // Act
        buyCoke();

        // Assert
        expect(isCokeInDelivery).toBe(true);
    });

    test('Buy Coke - Insufficient money', () => {
        // Arrange
        initModel();
        insertCoin(5);

        // Act
        buyCoke();

        // Assert
        expect(isCokeInDelivery).toBe(false);
    });

    test('Cancel Purchase', () => {
        // Arrange
        initModel();
        insertCoin(1);
        insertCoin(5);

        // Act
        returnCoins();

        // Assert
        expect(coinsReturned[0]).toBe(1);
        expect(coinsReturned[1]).toBe(1);
        expect(coinsReturned).toEqual([1, 1, 0, 0]);
    });

    test('Take Coins', () => {
        // Arrange
        initModel();
        insertCoin(1);
        insertCoin(5);
        returnCoins();

        // Act
        takeCoins();

        // Assert
        expect(coinsReturned).toEqual([0, 0, 0, 0]);
    });
});
