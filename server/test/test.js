import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../../server';

const { expect } = chai;
chai.use(chaiHttp);

// Test for getting undefind rouotes
describe('Test API', () => {
  it('Should return 404 for routes not specified', (done) => {
    chai.request(app)
      .get('*')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
});

// describe('Test API', () => {
//   // Test for default route
//   it('Should return 200 for the default route', (done) => {
//     chai.request(app)
//       .get('/')
//       .end((err, res) => {
//         expect(res.status).to.equal(200);
//         done();
//       });
//   });
// });
