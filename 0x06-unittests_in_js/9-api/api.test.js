const chai = require('chai');
const request = require('request');
const expect = chai.expect;

const baseUrl = 'http://localhost:7865'; // Ensure this is the correct port

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
  it('should return content type text/html', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      if (err) return done(err);
      expect(res.headers['content-type']).to.contain('text/html');
      done();
    });
  });
});

describe('Cart Page', () => {
  // Test for correct status code when :id is a number
  it('should return status 200 when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/123`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  // Test for correct status code when :id is NOT a number
  it('should return status 404 when :id is NOT a number', (done) => {
    request.get(`${baseUrl}/cart/abc`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  // Test for correct response content when :id is a number
  it('should return "Cart details for ID :id" when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/123`, (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Cart details for ID 123');
      done();
    });
  });

  // Test for correct response content when :id is NOT a number
  it('should return "Not found" when :id is NOT a number', (done) => {
    request.get(`${baseUrl}/cart/abc`, (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Not found');
      done();
    });
  });

  // Test for correct content type when :id is a number
  it('should return content type text/html when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/123`, (err, res, body) => {
      if (err) return done(err);
      expect(res.headers['content-type']).to.contain('text/html');
      done();
    });
  });

  // Test for correct content type when :id is NOT a number
  it('should return content type text/html when :id is NOT a number', (done) => {
    request.get(`${baseUrl}/cart/abc`, (err, res, body) => {
      if (err) return done(err);
      expect(res.headers['content-type']).to.contain('text/html');
      done();
    });
  });
});
