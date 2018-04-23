import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

const { expect } = chai;
chai.use(chaiHttp);
const BASE_URL = '/api/v1';
// let token;

const user = {
  firstname: 'Annmary',
  lastname: 'Agunanna',
  email: 'annmaryamaka@gmail.com',
  password: 'secret123',
  confirm_password: 'secret123',
  image: 'amaka'
};

describe('POST /api/v1/auth/signup', () => {
  
  it('Test to register a new users', (done) => {
    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.message).to.equal(`Hello ${user.firstname}, Welcome to we-connect`);
        done();
      });
  });

  it('Test for Email  Existing', (done) => {
    const user = {
      firstname: 'Annmary',
      lastname: 'Agunanna',
      email: 'annmaryamaka@gmail.com',
      password: 'secret123',
      confirm_password: 'secret123',
      image: 'amaka'
    };
    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.message).to.equal('Email is already existing');
        done();
      });
  });

  it('Test for FirstName field Required', (done) => {
    const user = {
      firstname: '',
      lastname: 'Agunanna',
      email: 'annmaryamaka@gmail.com',
      password: 'secret123',
      confirm_password: 'secret123',
      image: 'amaka'
    };
    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Test for LastName field Required', (done) => {
    const user = {
      firstname: 'Annmary',
      lastname: '',
      email: 'annmaryamaka@gmail.com',
      password: 'secret123',
      confirm_password: 'secret123',
      image: 'amaka'
    };
    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Test for Email field Required', (done) => {
    const user = {
      firstname: '',
      lastname: 'Agunanna',
      email: '',
      password: 'secret123',
      confirm_password: 'secret123',
      image: 'amaka'
    };
    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Test for Invalid Email', (done) => {
    const user = {
      firstname: '',
      lastname: 'Agunanna',
      email: 'annmaryamaka@gmail',
      password: 'secret123',
      confirm_password: 'secret123',
      image: 'amaka'
    };
    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Test for Password Required', (done) => {
    const user = {
      firstname: '',
      lastname: 'Agunanna',
      email: 'annmaryamaka@gmai.com',
      password: '',
      confirm_password: 'secret123',
      image: 'amaka'
    };
    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Test for Confirm Password Required', (done) => {
    const user = {
      firstname: '',
      lastname: 'Agunanna',
      email: 'annmaryamaka@gmai.com',
      password: 'secret123',
      confirm_password: '',
      image: 'amaka'
    };
    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Test for Password too short', (done) => {
    const user = {
      firstname: '',
      lastname: 'Agunanna',
      email: 'annmaryamaka@gmail',
      password: 'secret',
      confirm_password: 'secret123',
      image: 'amaka'
    };
    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe('POST /api/v1/auth/signin', () => {
  it('Test for User Login', (done) => {
    const user = {
      email: 'annmaryamaka@gmail.com',
      password: 'secret123',
      firstname: 'Annmary'
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/login`)
      .send(user)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        // token = res.body.token;
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal(`Hello ${user.firstname}, Welcome to we-connect`);
        done();
      });
  });
  it('Test for Incorrect Mail', (done) => {
    const checkuser = {
      email: 'tochiadams@gmail.com',
      password: 'secret123',
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/login`)
      .send(checkuser)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.message).to.equal('Incorrect Email Address');
        done();
      });
  });

  it('Test for valid Mail Address', (done) => {
    const checkuser = {
      email: 'tochiadamsgmail.com',
      password: 'secret123',
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/login`)
      .send(checkuser)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Test for Email Field Required', (done) => {
    const checkuser = {
      email: '',
      password: 'secret123',
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/login`)
      .send(checkuser)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Test for Password Field Required', (done) => {
    const checkuser = {
      email: 'tochiadamsgmail.com',
      password: '',
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/login`)
      .send(checkuser)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
