import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import SignUpForm from '../pages/forms/SignUpForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/SignUpAction';

class SignUp extends Component{
render(){
        const { userSignupRequest } = this.props;
        return(
    <div className="login-background">
        <div className="login-nav">
        <Navigation />
        </div>
                <SignUpForm  userSignupRequest={userSignupRequest}/>
            <Footer />
        </div>
        )
}
}


SignUp.protoTypes = {
        userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest})(SignUp);