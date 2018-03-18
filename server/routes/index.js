// const businessController = require('../controller/business');
import verifyToken from '../middleware/verifyToken';
import businessController from '../controllers/business';
import userController from '../controllers/users';
// import reviewController from '../controllers/review';


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to we-connect Api',
  }));

  app.post('/auth/signup', userController.signup);
  app.post('/auth/signin', userController.signin);

  app.get('/businesses', businessController.getBusiness);
  app.post('/businesses/', verifyToken.verifyTok, businessController.create);
  app.put('/businesses/:businessId', verifyToken.verifyTok, businessController.update);
  app.delete('/businesses/:businessId', verifyToken.verifyTok, businessController.delete);

  // app.post('/businesses/:businessId/reviews', reviewController.create);
  // app.get('/businesses/:businessId/reviews', reviewController.fetch);
  // app.get('/users', userController.fetch);
};

