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
   * @description creates an instance of LoginForm
   *
   * @constructor
   *
   * @param { props } props - contains login component properties
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * @description handles on state change
   * @method onChange
   *
   * @param { object } event - event object containing login detail
   *
   * @returns { object } new login detail state
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * @description creates a new user
   * @method onSubmit
   *
   * @param { object } event - event object containing user details
   *
   * @returns { * } null
   */
  onSubmit(event) {
    event.preventDefault();
    this.props.userLoginRequest(this.state).then(() => {
      const { isAuthenticated, hasError, error } = this.props.auth;
      if (isAuthenticated && !hasError) {
        Materialize.toast('Successfully Signed In', 4000, 'teal accent-3 rounded');
        this.context.router.history.push('/profile');
      } else if (!isAuthenticated && hasError) {
        Materialize.toast(error, 4000, 'red accent-3 rounded');
      }
    });
  }
  /**
   * @description displays create login form
   *
   * @returns { jsx } jsx - renders login form
   */
  render() {
    return (

      <div className="login-background">
        <main>
          <div className="pad">
            <div className="login-nav">
              <Navigation />
            </div>
            <LoginForm 
              { ...this.state }
              onChange={ this.onChange }
              onSubmit={ this.onSubmit }
            />
          </div>
        </main>
        <Footer />
      </div>

    );
  }
}

Login.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool, 
  hasError: PropTypes.bool,
  error: PropTypes.string,
  auth: PropTypes.object,
};
Login.contextTypes = {
  router: PropTypes.object.isRequired
};

/**
 * @description maps redux state to props
 * @param { object } state - holds an authenticated user
 * @return { object } props - returns mapped props from state
 */
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { userLoginRequest })(Login);
