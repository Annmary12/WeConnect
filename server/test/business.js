// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import server from '../../app';

// const { expect } = chai;
// chai.use(chaiHttp);
// const BASE_URL = '/api/v1';

// describe('/GET Businesses', () => {
//   it('it should get all businesses', (done) => {
//     chai.request(server)
//       .get(`${BASE_URL}/businesses`)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.message).to.equal('List of all bussinesses');
//         done();
//       });
//   });

//   it('it should get businesses under abuja location', (done) => {
//     chai.request(server)
//       .get(`${BASE_URL}/businesses?location=abuja`)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.message).to.equal('List of business(es) in abuja');
//         done();
//       });
//   });

//   it('it should not get any businesses under newyork location', (done) => {
//     chai.request(server)
//       .get(`${BASE_URL}/businesses?location=newyork`)
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.message).to.equal('No such business under this(newyork) location');
//         done();
//       });
//   });

//   it('it should not get any businesses under IT category', (done) => {
//     chai.request(server)
//       .get(`${BASE_URL}/businesses?category=IT`)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.message).to.equal('List of business(es) in IT');
//         done();
//       });
//   });

//   it('it should not get any businesses under market category', (done) => {
//     chai.request(server)
//       .get(`${BASE_URL}/businesses?category=market`)
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.message).to.equal('No sure business under this(market) category');
//         done();
//       });
//   });
// });

// describe('/POST Business', () => {
//   it('it should create new business', (done) => {
//     const business = {
//       id: 1,
//       name: 'WeConnect',
//       description: 'Connecting people with their business ideas',
//       location: 'Lagos',
//       category: 'IT'
//     };
//     chai.request(server)
//       .post(`${BASE_URL}/businesses/`)
//       .send(business)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.message).to.equal('Successfully Created a business');
//         expect(res.body).should.be.a('object');
//         done();
//       });
//   });

//   it('it should not post business without name field', (done) => {
//     const business = {
//       id: 1,
//       description: 'Connecting people with their business ideas',
//       location: 'Lagos',
//       category: 'IT'
//     };
//     chai.request(server)
//       .post(`${BASE_URL}/businesses/`)
//       .send(business)
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.message).to.equal('Required Field');
//         done();
//       });
//   });
// });

// describe('/PUT/:id businessId', () => {
//   it('it should update a particular business', (done) => {
//     const business = {
//       id: 1,
//       name: 'WeConnect',
//       description: 'Connecting people with their business ideas',
//       location: 'Lagos',
//       category: 'IT'
//     };

//     chai.request(server)
//       .put(`${BASE_URL}/businesses/${business.id}`)
//       .send(business)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.message).to.equal('Business Successfully Updated');
//         done();
//       });
//   });
// });

// describe('/DELETE/:id Business', () => {
//   it('it should delete a particular business', (done) => {
//     chai.request(server)
//       .delete(`${BASE_URL}/businesses/1`)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.message).to.equal('Business Succefully Deleted');
//         done();
//       });
//   });
// });
