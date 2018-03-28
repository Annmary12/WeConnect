require('dotenv').config();

module.exports = {

  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DBNAME,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
  // test: {
  //   use_env_variable: 'DB_URL_TEST',
  //   dialect: 'postgres'
  // },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TEST_NAME,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres'
  }

};
