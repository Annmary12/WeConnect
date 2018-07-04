import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputField from './InputFieldGroup.jsx';

/**
 * @description renders login  component
 *
 * @class LoginForm
 *
 * @extends Component
*/
class LoginForm extends Component {
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
    // this.setState({ errors: {}, isLoading: true });
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
    const { email, password } = this.state;
    return (
      <div className="container login">
        <div className="row">
          <div className="col s12 card loginPage">
            <div className="col hide-on-small-only m5 login-left-box">
              <p className="login-header"></p>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="col s12 m7" id="login-card" style={{ margin: '0px auto' }}>
                <InputField
                  onChange={this.onChange}
                  icon='email'
                  type='email'
                  name='email'
                  value={email}
                  label='Email'
                />
                <br />
                <InputField
                  onChange={this.onChange}
                  icon='lock'
                  type='password'
                  name='password'
                  value={password}
                  label='Password'
                />
                <br />
                <div className="input-field">
                  <button className="btn waves-effect waves-light btn_large" type="submit" name="action">login
                    <i className="material-icons left">send</i>
                  </button>
                </div><br />
                <span>Click here to <Link to='/signUp'>register</Link></span>
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
};
LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
};

/**
 * @description maps redux state to props
 *
 * @param { object } state - holds an authenticated user
 *
 * @return { object } props - returns mapped props from state
 */
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(LoginForm);
