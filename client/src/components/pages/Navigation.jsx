import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/login';

/**
 * @description renders navigation  component
 * @class Navigation
 * @extends Component
*/
class Navigation extends Component {
  /**
   * @description creates an instance of Navigation
   * @constructor
   */
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  /**
   * @description initials materialize side nav bar
   * @returns {void} 
   */
  componentDidMount() {
    $('.sidenav').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
    });
  }
/**
   * @description logs out a user
   * @method logout
   * @param { object } event - event object containing user details
   * @returns { * } null
   */
  logout(event) {
    event.preventDefault();
    this.props.logout();
    this.context.router.history.push('/');
  }

  /**
   * @description displays the navigation bar
   * @returns { jsx } jsx - renders navigation links
   */
  render() {

    const { isAuthenticated } = this.props.auth;

    /**
   * @description displays authenticated user link
   * @returns { jsx } jsx - renders authenticated user component
   */
    const authUserLink = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/business'>Business</Link></li>
        <li><Link to='/profile'>Dashboard</Link></li>
        <li><Link to='/updateProfile'>Update Profile</Link></li>
        <li><Link to='/logout' onClick={ this.logout }>Logout</Link></li>
      </ul>);

    /**
   * @description displays user guest link
   * @returns { jsx } jsx - renders user guest component
   */
    const guestLink = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/' className="active">Home</Link></li>
        <li><Link to='/business'>Business</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to='/signUp'>SignUp</Link></li>

      </ul>
    );

    return (
      <div className="">
        <nav>
          <div className="nav-wrapper">
            <Link to='/' className="brand-logo">weCo<span className="logo">nn</span>ect</Link>
            {isAuthenticated ? authUserLink : guestLink}
            <a to="#" data-activates="slide-out" className="sidenav">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

Navigation.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

Navigation.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { logout })(Navigation);
