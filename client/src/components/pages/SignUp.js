import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import SignUpForm from '../pages/forms/SignUpForm';
import PropTypes from 'prop-types';

const SignUp = () => {
  return (
    <div className="login-background">
      <div className="login-nav">
        <Navigation />
      </div>
      <SignUpForm />
      <Footer />
    </div>
  )
}

export default SignUp;