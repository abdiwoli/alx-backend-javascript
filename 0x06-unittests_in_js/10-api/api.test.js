const chai = require('chai');
const request = require('request');
const expect = chai.expect;

const baseUrl = 'http://localhost:7865'; // Ensure this is the correct port

describe('Available Payments', () => {
  // Test for correct status code
  it('should return status 200', (done) => {
    request.get(`${baseUrl}/available_payments`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  // Test for correct response content
  it('should return JSON object with payment methods', (done) => {
    request.get({ url: `${baseUrl}/available_payments`, json: true }, (err, res, body) => {
      if (err) return done(err);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });

  // Test for correct content type
  it('should return content type application/json', (done) => {
    request.get(`${baseUrl}/available_payments`, (err, res, body) => {
      if (err) return done(err);
      expect(res.headers['content-type']).to.contain('application/json');
      done();
    });
  });
});

describe('Login Page', () => {
  // Test for correct status code when userName is provided
  it('should return status 200 when userName is provided', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: { userName: 'john_doe' }
    }, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  // Test for correct status code when userName is not provided
  it('should return status 401 when userName is not provided', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: {}
    }, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(401);
      done();
    });
  });

  // Test for correct response content when userName is provided
  it('should return "Welcome john_doe" when userName is provided', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: { userName: 'john_doe' }
    }, (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Welcome john_doe');
      done();
    });
  });

  // Test for correct response content when userName is not provided
  it('should return "unauthorized" when userName is not provided', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: {}
    }, (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('unauthorized');
      done();
    });
  });

  // Test for correct content type when userName is provided
  it('should return content type text/html when userName is provided', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: { userName: 'john_doe' }
    }, (err, res, body) => {
      if (err) return done(err);
      expect(res.headers['content-type']).to.contain('text/html');
      done();
    });
  });

  // Test for correct content type when userName is not provided
  it('should return content type text/html when userName is not provided', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: {}
    }, (err, res, body) => {
      if (err) return done(err);
      expect(res.headers['content-type']).to.contain('text/html');
      done();
    });
  });
});
