import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

const { expect } = chai;
chai.use(chaiHttp);
const BASE_URL = '/api/v1';

describe('POST /api/v1/auth/signup', () => {
  it('Name field id required', (done) => {
    const user = {
      id: 1,
      name: '',
      email: 'amaka@gmail.com',
      password: 'secret1235'
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(409);
        done();
      });
  });

  it('Email field is required', (done) => {
    const user = {
      id: 1,
      name: 'Annmary',
      email: '',
      password: 'secret1235'
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(409);
        done();
      });
  });

  it('Password field is required', (done) => {
    const user = {
      id: 1,
      name: 'Annmary',
      email: 'annmaty@gmail.com',
      password: ''
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(409);
        done();
      });
  });

  it('Password should have a minimum of 8 characters', (done) => {
    const user = {
      id: 1,
      name: 'Annmary',
      email: 'annmaty@gmail.com',
      password: 'secret'
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(409);
        done();
      });
  });
});
