import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import SignUpForm from '../pages/forms/SignUpForm.jsx';

const SignUp = () => (
  <div className="login-background">
    <div className="login-nav">
      <Navigation />
    </div>
    <SignUpForm />
    <Footer />
  </div>
);

export default SignUp;
