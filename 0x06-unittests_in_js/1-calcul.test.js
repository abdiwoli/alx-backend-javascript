const calculateNumber = require('./1-calcul.js');
var assert = require('assert');

describe('calculateNumber', () => {
  it('1 + 3 = 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });

  it('1 + 4 = 5', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 4), 5);
  });

  it('1.2 - 3.7 = -2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });

  it('1.5 - 3.5 = -2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.5), -2);
  });

  it('2.4 / 2.4 = 0', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 2.4, 2.4), 1);
  });

  it('5.5 / 2.5 = 3', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 5.5, 2.5), 2);
  });

  it('3 + 0.2 = Error', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 3, 0.2), 'Error');
  });

  it('-1.2 + -3.7 = -5', () => {
      assert.strictEqual(calculateNumber("SUM", -1.2, -3.7), -5);
  });
});
