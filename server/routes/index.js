// const businessController = require('../controller/business');
import businessController from '../controller/business';

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to we-connect Api',
  }));

  app.get('/businesses', businessController.getBusiness);
  // app.get('/users', userController.fetch);
};
