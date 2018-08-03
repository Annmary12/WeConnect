import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputField from './InputFieldGroup';

/**
 * @description renders login  component
 * @function LoginForm
 * @returns { JSX } - render login form
*/
const LoginForm = ({
  email, password, onSubmit, onChange
}) =>
  /**
   * @description displays create login form
   *
   * @returns { jsx } jsx - renders login form
   */
  (
    <div className="container login">
      <div className="row">
        <div className="col s12 card loginPage">
          <div className="col hide-on-small-only m5 login-left-box">
            <p className="login-header" />
          </div>
          <form onSubmit={ onSubmit }>
            <div className="col s12 m7" id="login-card" style={ { margin: '0px auto' } }>
              <InputField
                onChange={ onChange }
                icon="email"
                type="email"
                name="email"
                value={ email }
                label="Email"
              />
              <br />
              <InputField
                  onChange={ onChange }
                  icon="lock"
                  type="password"
                  name="password"
                  value={ password }
                  label="Password"
                />
              <br />
              <div className="input-field">
                <button id="login" className="btn waves-effect waves-light btn_large" type="submit" name="action">login
                  <i className="material-icons left">send</i>
                </button>
              </div><br />
              <span>Click here to <Link to="/signUp" href="signup">register</Link></span>
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default LoginForm;
