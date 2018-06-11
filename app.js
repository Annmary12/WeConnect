import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import validator from 'express-validator';
import winston from 'winston';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import swaggerDocument from './swagger.json';
import userRoutes from './server/routes/user';
import businessRoutes from './server/routes/business';
import reviewRoutes from './server/routes/review';
import config from './webpack.config';
// import webpackConfigDev from './webpack.dev';
// import webpackConfigProd from './webpack.prod';


dotenv.config();
const app = express();
const compiler = webpack(config);

// if (process.env.NODE_ENV !== 'production') {
//   app.use(webpackMiddleware(webpack(webpackConfigDev)));
// } else {
//   app.use(webpackMiddleware(webpack(webpackConfigProd)));
// }
const router = express.Router();


const port = process.env.PORT || 8200;
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './client/public')))

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

// app.get('/', (req, res) => res.status(200).send({
//   message: 'Welcome to weConnect Api',
//   error: false
// }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/public/index.html'));
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  winston.info(`Connected on port ${port}`);
});

export default app;
