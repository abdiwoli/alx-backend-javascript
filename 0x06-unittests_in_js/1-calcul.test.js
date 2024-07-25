const calculateNumber = require('./1-calcul.js');
var assert = require('assert');

describe('calculateNumber', () => {
  it('1 + 3 = 4', () => {
      assert.strictEqual(calculateNumber(1, 3, 'SUM'), 4);
  });

  it('1 + 4 = 5', () => {
      assert.strictEqual(calculateNumber(1, 4, 'SUM'), 5);
  });

  it('1.2 - 3.7 = -2', () => {
      assert.strictEqual(calculateNumber(1.2, 3.7, "SUBTRACT"), -3);
  });

  it('1.5 - 3.5 = -2', () => {
      assert.strictEqual(calculateNumber(1.5, 3.5, "SUBTRACT"), -2);
  });

  it('2.4 / 2.4 = 0', () => {
      assert.strictEqual(calculateNumber(2.4, 2.4, "DIVIDE"), 1);
  });

  it('5.5 / 2.5 = 3', () => {
      assert.strictEqual(calculateNumber(5.5, 2.5, "DIVIDE"), 2);
  });

  it('3 + 0.2 = Error', () => {
      assert.strictEqual(calculateNumber(3, 0.2, "DIVIDE"), 'Error');
  });

  it('-1.2 + -3.7 = -5', () => {
      assert.strictEqual(calculateNumber(-1.2, -3.7, "SUM"), -5);
  });
});
