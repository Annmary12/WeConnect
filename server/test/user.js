import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

const { expect } = chai;
chai.use(chaiHttp);
const BASE_URL = '/api/v1';

describe('POST/ signup', () => {
  it('It should register a new users', (done) => {
    const user = {
      id: 1,
      name: 'Annmary Agunanna',
      email: 'annmaryamaka@gmail',
      password: 'secret'
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
});

describe('POST/ signin', () => {
  it('it should signin a user', (done) => {
    const user = {
      email: 'annmaryamaka@gmail',
      password: 'secret',
      name: 'Annmary Agunanna'
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/signin`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal(`Hello ${user.name}, Welcome to weConnect`);
        done();
      });
  });
});
