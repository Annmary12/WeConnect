import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

const { expect } = chai;
chai.use(chaiHttp);
const BASE_URL = '/api/v1';
let authtoken;
let secondAuthtoken;

describe('Business Test', () => {
  before((done) => {
    const user = {
      firstname: 'Annmary',
      lastname: 'Agunanna',
      email: 'njaycares@gmail.com',
      password: 'secret123',
      confirmPassword: 'secret123',
      image: 'amaka',
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(user)
      .end((err, res) => {
        authtoken = res.body.token;
        // done();
      });

    const secondUser = {
      firstname: 'Ihuoma',
      lastname: 'Agunanna',
      email: 'ihuoma@gmail.com',
      password: 'secret123',
      confirmPassword: 'secret123',
      image: 'amaka',
    };

    chai.request(server)
      .post(`${BASE_URL}/auth/signup`)
      .send(secondUser)
      .end((err, res) => {
        secondAuthtoken = res.body.token;
        done();
      });
  });
  describe('/POST Business', () => {
    it('Test to Check Name Field to create new business', (done) => {
      const business = {
        name: '',
        description: 'Connecting people with their business ideas',
        phoneNumber: '08136763972',
        address: 'Abuja',
        image: 'business.jpg',
        location: 'Lagos',
        category: 'IT',
        website: 'www.business.com',
        userId: '2'
      };
      chai.request(server)
        .post(`${BASE_URL}/businesses/`)
        .set('Authorization', authtoken)
        .send(business)
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });

    it('Test to Check Decription Field to create new business', (done) => {
      const business = {
        name: 'Molcom',
        description: '',
        phoneNumber: '08136763972',
        address: 'Abuja',
        image: 'business.jpg',
        location: 'Lagos',
        category: 'IT',
        website: 'www.business.com',
        userId: '2'
      };
      chai.request(server)
        .post(`${BASE_URL}/businesses/`)
        .set('Authorization', authtoken)
        .send(business)
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });

    it('Test to Check Phone Number  Field', (done) => {
      const business = {
        name: 'Molcom',
        description: 'molcom is a big company',
        phoneNumber: '',
        address: 'Abuja',
        image: 'business.jpg',
        location: 'Lagos',
        category: 'IT',
        website: 'www.business.com',
        userId: '2'
      };
      chai.request(server)
        .post(`${BASE_URL}/businesses/`)
        .set('Authorization', authtoken)
        .send(business)
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });

    it('Test to Check Address Field', (done) => {
      const business = {
        name: 'Molcom',
        description: 'molcom is a big company',
        phoneNumber: '08136763972',
        address: '',
        image: 'business.jpg',
        location: 'Lagos',
        category: 'IT',
        website: 'www.business.com',
        userId: '2'
      };
      chai.request(server)
        .post(`${BASE_URL}/businesses/`)
        .set('Authorization', authtoken)
        .send(business)
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });

    it('Test to Check Location Field', (done) => {
      const business = {
        name: 'Molcom',
        description: 'molcom is a big company',
        phoneNumber: '08136763972',
        address: 'lagos',
        image: 'business.jpg',
        location: '',
        category: 'IT',
        website: 'www.business.com',
        userId: '2'
      };
      chai.request(server)
        .post(`${BASE_URL}/businesses/`)
        .set('Authorization', authtoken)
        .send(business)
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });

    it('Test to Check Category Field', (done) => {
      const business = {
        name: 'Molcom',
        description: 'molcom is a big company',
        phoneNumber: '08136763972',
        address: 'abuja',
        image: 'business.jpg',
        location: 'Lagos',
        category: '',
        website: 'www.business.com',
        userId: '2'
      };
      chai.request(server)
        .post(`${BASE_URL}/businesses/`)
        .set('Authorization', authtoken)
        .send(business)
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });

    it('Test to Verify Token', (done) => {
      const wrongToken = 'sgfhfjjefuf';
      const business = {
        name: 'Molcom',
        description: 'molcom is a big company',
        phoneNumber: '08136763972',
        address: 'lagos',
        image: 'business.jpg',
        location: 'Lagos',
        category: 'IT',
        website: 'www.business.com',
        userId: '2'
      };
      chai.request(server)
        .post(`${BASE_URL}/businesses/`)
        .set('Authorization', wrongToken)
        .send(business)
        .end((err, res) => {
          expect(res).to.have.status(403);
          expect(res.body.message).be.equal('Please, Kindly SignIn Again');
          done();
        });
    });

    it('Test to Set Header', (done) => {
      const business = {
        name: 'Molcom',
        description: 'molcom is a big company',
        phoneNumber: '08136763972',
        address: 'lagos',
        image: 'business.jpg',
        location: 'Lagos',
        category: 'IT',
        website: 'www.business.com',
        userId: '2'
      };
      chai.request(server)
        .post(`${BASE_URL}/businesses/`)
        .send(business)
        .end((err, res) => {
          expect(res).to.have.status(403);
          expect(res.body.message).be.equal('Add token to header');
          done();
        });
    });

    it('Test to Post a New Business', (done) => {
      const business = {
        name: 'Molcom',
        description: 'molcom is a big company',
        phoneNumber: '081726758',
        address: 'lagos',
        image: 'business.jpg',
        location: 'Lagos',
        category: 'IT',
        website: 'www.business.com',
        userId: 2
      };
      chai.request(server)
        .post(`${BASE_URL}/businesses/`)
        .set('Authorization', authtoken)
        .send(business)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body.message).be.equal('Successfully Created');
          done();
        });
    });
  });
  describe('Review API Test', () => {
    it('test to check whether you are authorized to review for a business', (done) => {
      const review = {
        context: 'Their Products are very nice'
      };
      chai.request(server)
        .post(`${BASE_URL}/businesses/1/reviews`)
        .set('Authorization', authtoken)
        .send(review)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('You can not review yourself');
          done();
        });
    });

    it('test to check no review(s) for a  business', (done) => {
      chai.request(server)
        .get(`${BASE_URL}/businesses/1/reviews`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('No Review Found');
          done();
        });
    });

    it('test to check whether context field is empty', (done) => {
      const review = {
        context: ''
      };
      chai.request(server)
        .post(`${BASE_URL}/businesses/1/reviews`)
        .set('Authorization', secondAuthtoken)
        .send(review)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Please write a review');
          done();
        });
    });

    it('test to create a new review for a business', (done) => {
      const review = {
        context: 'Their Products are very nice'
      };
      chai.request(server)
        .post(`${BASE_URL}/businesses/1/reviews`)
        .set('Authorization', secondAuthtoken)
        .send(review)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body.message).to.equal('Sucessfully Created');
          done();
        });
    });

    it('test to check whether business exit', (done) => {
      const review = {
        context: 'Their Products are very nice'
      };
      chai.request(server)
        .post(`${BASE_URL}/businesses/4/reviews`)
        .set('Authorization', authtoken)
        .send(review)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('Business Not Found');
          done();
        });
    });
  });

  describe('GET/ reviews of a business', () => {
    it('test to get reviews for a  business', (done) => {
      chai.request(server)
        .get(`${BASE_URL}/businesses/1/reviews`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('List of review(s) for Molcom');
          done();
        });
    });


    it('test to check business exist', (done) => {
      chai.request(server)
        .get(`${BASE_URL}/businesses/4/reviews`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('Business Not Found');
          done();
        });
    });
  });

  describe('/GET Businesses', () => {
    it('Test to get all businesses', (done) => {
      chai.request(server)
        .get(`${BASE_URL}/businesses`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('List of all businesses');
          done();
        });
    });

    it('Test to get businesses under lagos location', (done) => {
      chai.request(server)
        .get(`${BASE_URL}/businesses?location=lagos`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('List of business(es)');
          done();
        });
    });

    it('it should not get any businesses under newyork location', (done) => {
      chai.request(server)
        .get(`${BASE_URL}/businesses?location=newyork`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('Business Not Found');
          done();
        });
    });

    it('it should not get any businesses under IT category', (done) => {
      chai.request(server)
        .get(`${BASE_URL}/businesses?category=IT`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('List of business(es)');
          done();
        });
    });

    it('it should not get any businesses under market category', (done) => {
      chai.request(server)
        .get(`${BASE_URL}/businesses?category=market`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('Business Not Found');
          done();
        });
    });
  });

  describe('/PUT/:id businessId', () => {
    it('it should update a particular business', (done) => {
      const business = {
        name: 'Molcom',
        description: 'molcom is a big company',
        phoneNumber: '081726758',
        address: 'lagos',
        image: 'business.jpg',
        location: 'Lagos',
        category: 'IT',
        website: 'www.business.com',
        userId: 2
      };

      chai.request(server)
        .put(`${BASE_URL}/businesses/1`)
        .send(business)
        .set('Authorization', authtoken)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('Sucessfully Updated');
          done();
        });
    });

    it('Test to check business to update exist', (done) => {
      const business = {
        name: 'Molcom',
        description: 'molcom is a big company',
        phoneNumber: '081726758',
        address: 'lagos',
        image: 'business.jpg',
        location: 'Lagos',
        category: 'IT',
        website: 'www.business.com',
        userId: 2
      };

      chai.request(server)
        .put(`${BASE_URL}/businesses/4`)
        .send(business)
        .set('Authorization', authtoken)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('Business Not Found');
          done();
        });
    });
  });

  describe('/DELETE/:id Business', () => {
    it('Test to check whether a user is the owner of the business he/she wants to delete', (done) => {
      chai.request(server)
        .delete(`${BASE_URL}/businesses/1`)
        .set('Authorization', secondAuthtoken)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('You can not delete this business');
          done();
        });
    });

    it('Test to check whether a business exist before delete', (done) => {
      chai.request(server)
        .delete(`${BASE_URL}/businesses/5`)
        .set('Authorization', authtoken)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('Business Not Found');
          done();
        });
    });

    it('Test to Delete a business', (done) => {
      chai.request(server)
        .delete(`${BASE_URL}/businesses/1`)
        .set('Authorization', authtoken)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('Sucessfully Deleted');
          done();
        });
    });
  });
});
