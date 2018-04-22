import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import SignUpForm from '../pages/forms/SignUpForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/SignUpAction';
import { addFlashMessage } from '../../actions/flashMessages';

class SignUp extends Component{
render(){
        const { userSignupRequest, addFlashMessage } = this.props;
        return(
    <div className="login-background">
        <div className="login-nav">
        <Navigation />
        </div>
                <SignUpForm  userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
            <Footer />
        </div>
        )
}
}


SignUp.protoTypes = {
        userSignupRequest: PropTypes.func.isRequired,
        addFlashMessage: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest, addFlashMessage})(SignUp);