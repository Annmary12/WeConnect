import express from 'express';
import winston from 'winston';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require our routes
require('./server/routes')(app);

app.get('/', (req, res) => {
  res.send('Welcome to wecconect app...');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  winston.info(`Connected on port ${port}`);
});

