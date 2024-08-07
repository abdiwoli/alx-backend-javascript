// utils.js


const Utils = {
  calculateNumber: function(operation, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    switch (operation) {
      case 'SUM':
        return roundedA + roundedB;
      case 'SUBTRACT':
        return roundedA - roundedB;
      case 'DIVIDE':
        if (roundedB === 0) return 'Error';
        return roundedA / roundedB;
      default:
        return 'Invalid operation';
    }
  }
};


module.exports = Utils;
