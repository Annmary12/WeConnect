// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import server from '../../app';

// let authtoken;

// const { expect } = chai;
// chai.use(chaiHttp);
// const BASE_URL = '/api/v1';

// describe('Review Test', () => {
//   describe('SignUp', () => {
//     before((done) => {
//       const user = {
//         firstname: 'Annmary',
//         lastname: 'Agunanna',
//         email: 'njaycares@gmail.com',
//         password: 'secret123',
//         image: 'amaka'
//       };

//       chai.request(server)
//         .post(`${BASE_URL}/auth/signup`)
//         .send(user)
//         .end((err, res) => {
//           authtoken = res.body.token;
//           done();
//         });
//     });
//   });

//   describe('Register Business', () => {
//     before((done) => {
//       const business = {
//         name: 'Molcom',
//         description: 'molcom is a big company',
//         phoneNumber: '081726758',
//         address: 'lagos',
//         image: 'business.jpg',
//         location: 'Lagos',
//         category: 'IT',
//         website: 'www.business.com',
//         userId: 2
//       };
//       chai.request(server)
//         .post(`${BASE_URL}/businesses/`)
//         .set('Authorization', authtoken)
//         .send(business)
//         .end((err, res) => {
//           expect(res).to.have.status(201);
//           expect(res.body.message).be.equal('Successfully Created');
//           done();
//         });
//     });
//   });

//   describe('POST api/v1/businesses/:businessId/reviews', () => {
//     it('test to create a review for a business', (done) => {
//       const review = {
//         context: 'Their Products are very nice'
//       };
//       chai.request(server)
//         .post(`${BASE_URL}/businesses/3/reviews`)
//         .send(review)
//         .end((err, res) => {
//           expect(res).to.have.status(201);
//           expect(res.body.message).to.equal('Review Created Sucessfully');
//           done();
//         });
//     });
//   });

// //   describe('GET/ reviews of a business', () => {
// //     it('it should get review of a particular business', (done) => {
// //       chai.request(server)
// //         .get(`${BASE_URL}/businesses/2/reviews`)
// //         .end((err, res) => {
// //           expect(res).to.have.status(200);
// //           expect(res.body).to.be.a('object');
// //           expect(res.body.message).to.equal('list of reviews for this business');
// //           done();
// //         });
// //     });
// //   });
// });
