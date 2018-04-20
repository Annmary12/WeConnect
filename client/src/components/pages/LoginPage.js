import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Logincss from '../../../public/styles/login.scss';
import LoginForm from '../pages/forms/LoginForm';

const Login = () => {
    return(
        <div className="login-background">
        <div className="login-nav">
        <Navigation />
        </div>
            <LoginForm />
              <Footer />
              </div>      
     
    )
}

export default Login;