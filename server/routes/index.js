import token from '../middleware/verifyToken';
import filterBy from '../middleware/filter';
import businessController from '../controllers/business';
import userController from '../controllers/users';
import reviewController from '../controllers/review';
import validator from '../middleware/validation';


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to we-connect Api',
  }));

  app.post('/auth/signup', validator.emailExist, validator.signupValidator, userController.signup);
  app.post('/auth/login', userController.signin);

  app.get('/businesses', filterBy.filter, businessController.getBusinesses);
  app.get('/businesses/:businessId', businessController.getBusiness);
  app.post('/businesses/', token.verifyTok, validator.businessValidator, businessController.create);
  app.put('/businesses/:businessId', token.verifyTok, businessController.update);
  app.delete('/businesses/:businessId', token.verifyTok, businessController.delete);

  app.post('/businesses/:businessId/reviews', reviewController.create);
  app.get('/businesses/:businessId/reviews', reviewController.fetch);
};

