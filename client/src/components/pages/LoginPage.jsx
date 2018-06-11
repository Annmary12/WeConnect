import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Logincss from '../../../public/styles/login.scss';
import LoginForm from '../pages/forms/LoginForm';
import PropTypes from 'prop-types';
import { userLoginRequest } from '../../actions/login';
import SignUp from './SignUp';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        const { userLoginRequest } = this.props;
        return (
            <div className="login-background">
                <div className="pad">
                    <div className="login-nav">
                        <Navigation />
                    </div>
                    <LoginForm userLoginRequest={userLoginRequest} />
                </div>
                <Footer />
            </div>
        )
    }
}

Login.propTypes = {
    userLoginRequest: PropTypes.func.isRequired
}

export default connect(null, { userLoginRequest })(Login);