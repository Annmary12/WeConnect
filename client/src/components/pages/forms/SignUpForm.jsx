import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userSignupRequest } from '../../../actions/SignUpAction';
import InputFieldGroup from './InputFieldGroup.jsx';

/**
 * @description renders create user form component
 *
 * @class SignUpForm
 *
 * @extends Component
*/
class SignUpForm extends Component {
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
      confirm_password: '',
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
    this.props.userSignupRequest(this.state);
  }
  /**
     *
     * @description displays the signup form
     * @returns {jsx} jsx - renders signup form
     */
  render() {
    return (
      <div className="container login">
        <div className="row">
          <div className="col s11 offset-s1 card">
            <div className="col s5 signup-left-box">
              <p className="login-header">
                With your business ideas and collaboration, we make the world a better place!!!
              </p>
            </div>
            <div className="col s7" id="login-card">
              <form onSubmit={this.onSubmit}>
                <InputFieldGroup
                  type='text'
                  value={this.state.firstname}
                  onChange={this.onChange}
                  name="firstname"
                  label='First Name'
                  icon='face'
                />
                <InputFieldGroup
                  type='text'
                  value={this.state.lastname}
                  onChange={this.onChange}
                  name="lastname"
                  label='Last Name'
                  icon='face'
                />
                <InputFieldGroup
                  type='email'
                  value={this.state.email}
                  onChange={this.onChange}
                  name="email"
                  label='Email'
                  icon='email'
                />
                <InputFieldGroup
                  type='password'
                  value={this.state.password}
                  onChange={this.onChange}
                  name="password"
                  label='Password'
                  icon='lock'
                />
                <InputFieldGroup
                  type='password'
                  value={this.state.confirm_password}
                  onChange={this.onChange}
                  name="confirm_password"
                  label='Confirm Password'
                  icon='lock_outline'
                />
                <br/>
                <div className="input-field">
                  <button
                    className="btn waves-effect waves-light btn_large"
                    type="submit"
                    name="action"
                    disabled={this.state.isLoading}
                  >
                    SIGNUP<i className="material-icons left">send</i>
                  </button>
                </div>
                <br/>
                <span>Click here to <Link to='/login'>Login</Link></span>
                <br/><br/>
             </form>
           </div>
         </div>
       </div>
     </div>
    );
  }
}

const mapStateToProps = state => ({
  signUpData: state.auth
});

SignUpForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  signUpData: PropTypes.object.isRequired,
};

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { userSignupRequest })(SignUpForm);

