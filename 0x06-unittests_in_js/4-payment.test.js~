// 3-payment.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;
  let consoleLogSpy;

  beforeEach(() => {
    // Set up spies before each test
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original functions after each test
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with "SUM", totalAmount, and totalShipping and log the result', () => {
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Verify that calculateNumber was called with the correct arguments
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify that the correct message was logged
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });
});
