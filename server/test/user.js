import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

const { expect } = chai;
chai.use(chaiHttp);
const BASE_URL = '/api/v1';

describe('POST /api/v1/auth/signup', () => {
  it('It should register a new users', (done) => {
    const user = {
      id: 1,
      name: 'Annmary Agunanna',
      email: 'amaka@gmail.com',
      password: 'secret1235'
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Sucessfully Registered');
        done();
      });
  });
  it('Check whether email exist', (done) => {
    const user = {
      id: 1,
      name: '',
      email: 'annmaryamaka@gmail.com',
      password: 'secret'
    };
    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        // expect(res.body.name).not.be.empty();
        expect(res).to.have.status(409);
        expect(res.body.message).to.equal('Email is already existing');
        done();
      });
  });
});

describe('POST /api/v1/auth/login', () => {
  it('it should signin a user', (done) => {
    const user = {
      email: 'annmaryamaka@gmail.com',
      password: 'secret',
      name: 'Annmary Agunanna'
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/login`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal(`Hello ${user.name}, Welcome to weConnect`);
        expect(res.body.email).to.equal('annmaryamaka@gmail.com');
        expect(res.body.name).to.equal('Annmary Agunanna');
        done();
      });
  });
  it('it should not signin a user that is not register', (done) => {
    const user = {
      email: 'njaycares@gmail',
      password: 'secret',
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/login`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('You are not a register user');
        done();
      });
  });
});
