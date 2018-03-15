import express from 'express';
import winston from 'winston';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from './swagger.json';


const app = express();
const router = express.Router();

// app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 8200;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// middleware to use for all requests
router.use((req, res, next) => {
  winston.info('Welcome to We-Connect');
  next(); // make sure we go to the next routes and don't stop here
});

// require our routes
require('./server/routes')(router);

router.get('*', (req, res) => res.status(404).send({
  message: 'Bad Request',
  error: true
}));

app.use('/api/v1', router);


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  winston.info(`Connected on port ${port}`);
});

export default app;
