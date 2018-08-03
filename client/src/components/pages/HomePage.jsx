import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationPage from './Navigation';
import Footer from './Footer';

/**
 * @description displays homepage
 * @method Home
 * @returns { jsx } jsx - renders homepage component
*/
const Home = () => (
  <div className="home">
    <div className="nav-background">
      <NavigationPage />
      <div className="container">
        <div className="row header">
          <h1>We-Connect <br />you to the<br /> World!!!</h1>
        </div>
      </div>
    </div>
  </div>
);


Home.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Home;
