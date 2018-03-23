import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

const { expect } = chai;
chai.use(chaiHttp);
const BASE_URL = '/api/v1';

describe('POST api/v1/businesses/:businessId/reviews', () => {
  it('it should create a review for a business', (done) => {
    const review = {
      id: 1,
      userId: 1,
      businessId: 2,
      content: 'Their Products are very nice'
    };
    chai.request(server)
      .post(`${BASE_URL}/businesses/2/reviews`)
      .send(review)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Review Created Sucessfully');
        done();
      });
  });
  it('it should not create review for non existing business', (done) => {
    const review = {
      content: 'Their Products are very nice'
    };
    chai.request(server)
      .post(`${BASE_URL}/businesses/10/reviews`)
      .send(review)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('Business You want to review is not found');
        done();
      });
  });
});

describe('GET/ reviews of a business', () => {
  it('it should get review of a particular business', (done) => {
    chai.request(server)
      .get(`${BASE_URL}/businesses/2/reviews`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.message).to.equal('list of reviews for this business');
        done();
      });
  });
});
