import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return(
        <div>
            <Navigation />
                   <div className="container login">
           
           <div className="row">
                      
                               <div className="col s11 offset-s1 card">
                                   
                                       <div className="col s5 signup-left-box">
                                               <p className="login-header">With your business ideas and collaboration, we make the world a better place!!!</p>
                                       </div>
                                       <div className="col s7" id="login-card">
                                          
                                                   <div className="input-field">
                                                       <i className="material-icons prefix">face</i>
                                                       <input id="icon_prefix" type="text" className="validate" />
                                                       <label for="icon_prefix">Name</label>
                                                     </div>
       
                                                     <div className="input-field">
                                                       <i className="material-icons prefix">email</i>
                                                       <input id="icon_prefix" type="email" className="validate" />
                                                       <label for="icon_prefix">Email</label>
                                                     </div>
       
                                                              
       
                                                                     <div className="input-field">
                                                                           <i className="material-icons prefix">lock</i>
                                                                           <input id="icon_prefix" type="text" className="validate" />
                                                                           <label for="icon_prefix">Password</label>
                                                                         </div>
       
                                                                         <div className="input-field">
                                                                           <i className="material-icons prefix">lock_outline</i>
                                                                           <input id="icon_prefix" type="text" className="validate" />
                                                                           <label for="icon_prefix">Confirm Password</label>
                                                                         </div><br/>
                                                             <div className="input-field">
                                                                   <a href="profile.html" className="btn waves-effect waves-light btn_large" type="submit" name="action">SIGNUP
                                                                           <i className="material-icons left">send</i>
                                                                   </a>
                                                             </div><br/>
                                                             <span>Click here to <Link to='/login'>Login</Link></span>
                                                             <br/><br/>
                                                             
                                           
                                       </div>
                                  
                               </div>
                          
               </div>
               
          
   </div>
            <Footer />
        </div>
    )
}

export default SignUp;