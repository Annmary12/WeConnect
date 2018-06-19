import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import SignUpForm from '../pages/forms/SignUpForm.jsx';

/**
 * @description displays the signup page
 * @method SignUp
 *
 * @returns { jsx } jsx - renders signup component
 */
const SignUp = () => (
  <div className="login-background">
    <div className="pad">
      <div className="login-nav">
        <Navigation />
      </div>
      <SignUpForm />
    </div>
    <Footer />
  </div>
);

export default SignUp;
