const { expect } = require('chai');
const sinon = require('sinon');
const countStudents = require('./3-read_file_async.js');

describe('countStudents', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('logs to the console the right messages', (done) => {
    countStudents('./database.csv').then(() => {
      const calls = consoleSpy.getCalls().map(call => call.args[0]);

      // Output the captured logs for debugging
      console.log('Captured console logs:', calls);

      expect(calls[0]).to.equal('Number of students: 10');
      expect(calls[1]).to.equal('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie');
      expect(calls[2]).to.equal('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');

      done();
    }).catch(done);
  });
});
