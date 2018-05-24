import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/login';
import decodeToken from '../utils/decodeToken';

export default function(CheckRoute){
    class RouteAuth extends Component {
        componentWillMount(){
            if(!this.props.auth){
                Materialize.toast('Please SignIn to continue', 2000, 'red rounded');
                this.context.router.history.push('/login');
            }

            if(!decodeToken()) {
                Materialize.toast('Sorry your session has expired', 2000, 'red rounded');
                this.props.logout();
                this.context.router.history.push('/login');
            }
        }

        render() {
            return(
                <CheckRoute {...this.props} />
            )
        }

    }
    function mapStateToProps(state){
        return {
            auth: state.auth.isAuthenticated
        }
    }

    RouteAuth.contextTypes = {
        router: PropTypes.object.isRequired
    }
    return connect(mapStateToProps, {logout})(RouteAuth);
}

