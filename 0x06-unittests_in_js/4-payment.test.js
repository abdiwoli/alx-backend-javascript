const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

function fetchData(callback) {
  setTimeout(() => {
    callback('SUM', 100, 20);
  }, 100);
}

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;
  const callback = sinon.stub();

  beforeEach(() => {
    fetchData(callback);

    // Stub Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original functions after each test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with "SUM", 100, and 20 and log the result', () => {
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called with the correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify that the correct message was logged
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
