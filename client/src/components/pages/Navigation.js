import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/login';

class Navigation extends Component{
    logout(e){
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        
        const authUserLink = (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to='/' className="active">Home</Link></li>
                <li><Link to='/business'>Business</Link></li>
                <li><Link to='/profile'>Dashboard</Link></li>
                <li><Link to='/logout' onClick={this.logout.bind(this)}>Logout</Link></li>
              
            </ul>
        )

        const guestLink =(
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to='/' className="active">Home</Link></li>
                <li><Link to='/business'>Business</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to='/signUp'>SignUp</Link></li>
           
            </ul>
        )

        return(
            <div className="">
                    <nav>
                            <div className="nav-wrapper">
                              <Link to='/' className="brand-logo">weCo<span className="logo">nn</span>ect</Link>
                             {isAuthenticated ? authUserLink : guestLink}
                            </div>
                          </nav>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

Navigation.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, {logout})(Navigation);