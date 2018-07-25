import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Footer from './Footer';
import SignUpForm from '../pages/forms/SignUpForm';
import userSignupRequest from '../../actions/SignUpAction';


/**
 * @description displays the signup page
 * @method SignUp
 *
 * @returns { jsx } jsx - renders signup component
 */
class SignUp extends Component {
  /**
   * @description creates an instance of SignUpForm
   *
   * @constructor
   *
   * @param { props } props - contains SignUpForm component properties
   */
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * @param {object} nextProps
   *
   * @returns {object} assigns nextprops to state
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.signUpData.hasError) {
      Materialize.toast(nextProps.signUpData.error.message, 4000, 'red accent-3 rounded');
    } else {
      this.context.router.history.push('/profile');
    }
  }

  /**
 * @description Handles change of values in state
 * @method onChange
 *
 * @param {object} event - event object containing signup detail
 *
 * @returns {object} SyntheticEvent
 */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
 * @description Submits user signup data
 * @method onSubmit
 *
 * @param {object} event - event object containing new user details
 *
 * @returns {object} SyntheticEvent
 */
  onSubmit(event) {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      Materialize.toast('Confirm password should be thesame with password', 4000, 'red accent-3 rounded');
    } else {
      this.props.userSignupRequest(this.state);
    }
  }
  /**
     *
     * @description displays the signup form
     * @returns {jsx} jsx - renders signup form
     */
  render() {
    const { isAuthenticated } = this.props.signUpData;
    if (isAuthenticated) {
      return <Redirect to="/profile" />;
    }
    return (
      <div className="login-background">
        <div className="pad">
          <div className="login-nav">
            <Navigation />
          </div>
          <SignUpForm
          { ...this.state }
          onChange={ this.onChange }
          onSubmit={ this.onSubmit }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signUpData: state.auth
});

SignUp.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  signUpData: PropTypes.object.isRequired
};

SignUp.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { userSignupRequest })(SignUp);
