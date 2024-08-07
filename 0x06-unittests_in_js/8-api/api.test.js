const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Index Page', () => {
  it('should return status 200', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return "Welcome to the payment system"', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

describe('Cart Page', () => {
  it('should return status 200 for cart with id 123', (done) => {
    chai.request(server)
      .get('/cart/123')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return "Payment methods for cart 123"', (done) => {
    chai.request(server)
      .get('/cart/123')
      .end((err, res) => {
        expect(res.text).to.equal('Payment methods for cart 123');
        done();
      });
  });
});

after(() => {
  server.close(); // Close the server after all tests are done
});
