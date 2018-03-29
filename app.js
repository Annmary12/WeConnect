import express from 'express';
import validator from 'express-validator';
import winston from 'winston';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import swaggerDocument from './swagger.json';
import userRoutes from './server/routes/user';
import businessRoutes from './server/routes/business';
import reviewRoutes from './server/routes/review';

dotenv.config();
const app = express();
const router = express.Router();


const port = process.env.PORT || 8200;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(validator());

// middleware to use for all requests
router.use((req, res, next) => {
  winston.info('Welcome to We-Connect');
  next();
});

router.get('*', (req, res) => res.status(404).send({
  message: 'Bad Request',
  error: true
}));


app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/businesses', businessRoutes);
app.use('/api/v1/businesses', reviewRoutes);

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to weConnect Api',
  error: false
}));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  winston.info(`Connected on port ${port}`);
});

export default app;
