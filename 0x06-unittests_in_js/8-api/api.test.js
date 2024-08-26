const chai = require('chai');
const request = require('request');
const expect = chai.expect;

const baseUrl = 'http://localhost:7865'; // Correct port

describe('Index Page', () => {
  // Test for correct status code
  it('should return status 200', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  // Test for correct response content
  it('should return "Welcome to the payment system"', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Test for correct content type
  it('should return content type text/plain', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      if (err) return done(err);
      expect(res.headers['content-type']).to.contain('text/plain');
      done();
    });
  });
});
