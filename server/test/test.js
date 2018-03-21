// import winston from 'winston';
// import chaiHttp from 'chai-http';
// import chai from 'chai';
// import app from '../../app';
// import businesses from '../model/business';


// // const { should } = chai.should();
// const { expect } = chai;
// chai.use(chaiHttp);
// const BASE_URL = '/api';

/*

*  Test to get all businesses

*/

// describe('GET businesses', () => {
//   it('it should GET all the businesses', (done) => {
//     chai.request(app)
//       .post(`${BASE_URL}/businesses/`)
//       .end((err, res, body) => {
//         expect(res).to.have.status(200);
//         winston.info(body);
//         done();
//       });
//   });
// });

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

// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../../app';

// const { expect } = chai;
// chai.use(chaiHttp);

// const BASE_URL = '/api/v1';

// describe('Test the index URL of API for response', () => {
//   it('should return a 200 code', (done) => {
//     chai.request(app)
//       .get('/businesses')
//       .end((err, res) => {
//         expect(res).to.have.status(404);
//         done();
//       });
//   });
// });
