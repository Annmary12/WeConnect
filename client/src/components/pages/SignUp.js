import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import SignUpForm from '../pages/forms/SignUpForm';
import PropTypes from 'prop-types';
// import { addFlashMessage } from '../../actions/flashMessages';

class SignUp extends Component{
render(){
       //  const { userSignupRequest, addFlashMessage } = this.props;
        return(
    <div className="login-background">
        <div className="login-nav">
        <Navigation />
        </div>
                <SignUpForm />
            <Footer />
        </div>
        )
}
}

export default SignUp;