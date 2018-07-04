import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationPage from './Navigation';
import FeacturedBusiness from './FeacturedBusiness';
import Footer from './Footer';
import PropTypes from 'prop-types';

/**
 * @description displays homepage
 * @method Home
 *
 * @returns { jsx } jsx - renders homepage component
*/

const Home = () => {
  return (
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
}


Home.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Home;
