const { expect } = require('chai');
const calculateNumber = require('./1-calcul.js');



describe('calculateNumber', () => {
  it('1 + 3 = 4', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });

  it('sum of : 1 + 4 = 5', () => {
    expect(calculateNumber('SUM', 1, 4)).to.equal(5);
  });

  it('som of 1.2 - 3.7 = -3', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });

  it('minus of 1.5 - 3.5 = -2', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 3.5)).to.equal(-2);
  });

  it('minus of 2.4 / 2.4 = 1', () => {
    expect(calculateNumber('DIVIDE', 2.4, 2.4)).to.equal(1);
  });

  it('divide by 5.5 / 2.5 = 2', () => {
    expect(calculateNumber('DIVIDE', 5.5, 2.5)).to.equal(2);
  });

  it('divide by 3 / 0.2 = Error', () => {
    expect(calculateNumber('DIVIDE', 3, 0.2)).to.equal('Error');
  });

  it('sum of -1.2 + -3.7 = -5', () => {
    expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
  });
});
