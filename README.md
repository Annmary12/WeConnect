# WeConnect

[![Build Status](https://travis-ci.org/Annmary12/WeConnect.svg?branch=develop)](https://travis-ci.org/Annmary12/WeConnect) [![Coverage Status](https://coveralls.io/repos/github/Annmary12/WeConnect/badge.svg?branch=develop)](https://coveralls.io/github/Annmary12/WeConnect?branch=develop) [![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/Annmary12/WeConnect) 


WeConnect brings your business to live by collaborating with various individuals/business partner. It creates an avenue for awareness and creates the ability for users to write reviews about the businesses they have interacted with.

## Features
1. Users should be able to
    * signin
    * signup
    * create business
    * see all businesses
    * edit business
    * view business
    * delete business
    * add review for a business
    * get reviews for a business
    * search for a business

## UI
The UI pages is hosted on <a href="https://annmary12.github.io/WeConnect/template/index.html" target="_blank">gh-pages</a>

## Designed With
* Materialize css
* HTML
* Custom css

## Backend
* `Node js` is a JavaScript runtime built on Chrome's V8 JavaScript engine
* `Express JS` A minimalist web framework
* `PostgresSQL`  A powerful, open source object-relational database system
* `Sequelize` is a promise-based ORM for Node.js v4 and up
* `ESLint` provides a pluggable linting utility for JavaScript.
* `Mocha` Mocha is a feature-rich JavaScript test framework 
* `Babel` A JavaScript compiler for converting codes written in ES6 or JSX to ES5 that is supported by many browsers

## Installation
* Install npm
`NodeJS` and `PostgreSQL` on your computer
* Clone this repository `https://github.com/Annmary12/WeConnect`
* Navigate to the root directory
* Install all dependencies with `npm install`
* Globally `install sequelize-cli`
* Using `sequelize db:migrate` migrate the database
* Set up your .env file using the sample provided in the project
* Start the server by running `npm run start-dev`

## Test
* Run test with this command `npm run test`

## API documentation
Used swagger for documentation <a href="https://weconnect12-server.herokuapp.com/docs/" target="_blank">link</a>
