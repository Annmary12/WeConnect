import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Footer from './Footer';
import Logincss from '../../../public/styles/login.scss';
import LoginForm from '../pages/forms/LoginForm';
import { userLoginRequest } from '../../actions/login';


/**
 * @description renders login  component
 *
 * @class Login
 *
 * @extends Component
*/
class Login extends Component {
  /**
   * @description displays create login form
   *
   * @returns { jsx } jsx - renders login form
   */
  render() {
    return (
            <div className="login-background">
                <div className="pad">
                    <div className="login-nav">
                        <Navigation />
                    </div>
                    <LoginForm userLoginRequest={this.props.userLoginRequest} />
                </div>
                <Footer />
            </div>
    );
  }
}

Login.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
};

export default connect(null, { userLoginRequest })(Login);
