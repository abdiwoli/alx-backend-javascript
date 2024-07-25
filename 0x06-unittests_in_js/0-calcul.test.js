const calculateNumber = require('./0-calcul.js');
var assert = require('assert');

describe('calculateNumber', () => {
  it('1 + 3 = 4', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('1 + 4 = 5', () => {
    assert.strictEqual(calculateNumber(1, 4), 5);
  });

  it('1.2 + 3.7 = 5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('1.5 + 3.5 = 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.5), 6);
  });

  it('2.4 + 2.4 = 4', () => {
    assert.strictEqual(calculateNumber(2.4, 2.4), 4);
  });

  it('2.5 + 2.5 = 6', () => {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('0.1 + 0.2 = 0', () => {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
  });

  it('-1.2 + -3.7 = -5', () => {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });
});
