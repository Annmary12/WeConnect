import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InputFieldGroup from './InputFieldGroup';

/**
 * @description renders create user form component
 *
 * @class SignUpForm
 *
 * @extends Component
*/
const SignUpForm = ({
  firstname,
  lastname,
  email,
  password,
  confirmPassword,
  isLoading,
  onSubmit,
  onChange
}) => (

  <div className="container login">
    <div className="row">
      <div className="col s12 card signupPage">
        <div className="col hide-on-small-only m5 signup-left-box">
          <p className="login-header">
            With your business ideas and collaboration, we make the world a better place!!!
          </p>
        </div>
        <div className="col s12 m7" id="login-card">
          <form onSubmit={ onSubmit }>
            <InputFieldGroup
                type="text"
                value={ firstname }
                onChange={ onChange }
                name="firstname"
                label="First Name"
                icon="face"
              />
            <InputFieldGroup
                type="text"
                value={ lastname }
                onChange={ onChange }
                name="lastname"
                label="Last Name"
                icon="face"
              />
            <InputFieldGroup
                type="email"
                value={ email }
                onChange={ onChange }
                name="email"
                label="Email"
                icon="email"
              />
            <InputFieldGroup
                type="password"
                value={ password }
                onChange={ onChange }
                name="password"
                label="Password"
                icon="lock"
              />
            <InputFieldGroup
                type="password"
                value={ confirmPassword }
                onChange={ onChange }
                name="confirmPassword"
                label="Confirm Password"
                icon="lock_outline"
              />
            <br />
            <div className="input-field">
              <button
                  className="btn waves-effect waves-light btn_large"
                  type="submit"
                  name="action"
                  disabled={ isLoading }
                >
                  SIGNUP<i className="material-icons left">send</i>
              </button>
            </div>
            <br />
            <span>Click here to <Link to="/login" href="/login">Login</Link></span>
            <br /><br />
          </form>
        </div>
      </div>
    </div>
  </div>
);


const mapStateToProps = state => ({
  signUpData: state.auth
});

SignUpForm.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpForm;

