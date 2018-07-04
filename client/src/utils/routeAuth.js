import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/login';
import decodeToken from '../utils/decodeToken';

 /**
 * @description verifies routes
 * @returns {*} - void
 * @param {component} VerifyComponent 
 * @extends component
 */
export default function (VerifyComponent) {
  /**
 * @description checks routes
 * @class VerifyRoute
 * @extends component
 */
  class VerifyRoute extends Component {
    
    /**
     * @description - checks whether a user is login or user's token has expires
     * @returns {void}
     * @memberof VerifyRoute
     */
    componentWillMount() {
      // checks whether a user is login
      if (!this.props.auth) {
        Materialize.toast('Please SignIn to continue', 2000, 'red rounded');
        this.context.router.history.push('/login');
      }

      // checks whether a user token has expired
      if (!decodeToken()) {
        Materialize.toast('Sorry your session has expired, Please SignIn again', 2000, 'red rounded');
        this.props.logout();
        // this.context.router.history.push('/login');
      }
    }

     /**
     * @returns {void}
     * @memberof VerifyRoute
     */       
    render() {
      return (
        <VerifyComponent { ...this.props } />
      );
    }
  }
  function mapStateToProps(state) {
    return {
      auth: state.auth.isAuthenticated
    };
  }

  VerifyRoute.contextTypes = {
    router: PropTypes.object.isRequired
  };
  return connect(mapStateToProps, { logout })(VerifyRoute);
}

