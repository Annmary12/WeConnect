import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Logincss from '../../../public/styles/login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div>
        <Navigation />
        <div className="container login">
           
                <div className="row">
                           
                                    <div className="col s11 offset-s1 card">
                                        
                                            <div className="col s5 login-left-box">
                                                    <p className="login-header"></p>
                                            </div>
                                            <div className="col s7" id="login-card">
                                                        
                                                        <div className="input-field">
                                                                <i className="material-icons prefix">email</i>
                                                                <input id="icon_prefix" type="text" className="validate" />
                                                                <label for="icon_prefix">Email</label>
                                                              </div><br />

                                                              <div className="input-field">
                                                                    <i className="material-icons prefix">lock</i>
                                                                    <input id="icon_prefix" type="text" className="validate" />
                                                                    <label for="icon_prefix">Password</label>
                                                                  </div><br />
                                                                  <div className="input-field">
                                                                        <Link to='/profile' className="btn waves-effect waves-light btn_large" type="submit" name="action">login
                                                                                <i className="material-icons left">send</i>
                                                                        </Link>
                                                                  </div><br />
                                                                  <span>Click here to <Link to='/signUp'>register</Link></span>
                                                                  <br />
                                                                  
                                                
                                            </div>
                                       
                                    </div>
                               
                    </div>
              </div>
              <Footer />
              </div>      
     
    )
}

export default Login;