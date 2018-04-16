import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="">
                <nav>
                        <div className="nav-wrapper">
                          <Link to='/' className="brand-logo">weCo<span className="logo">nn</span>ect</Link>
                          <ul id="nav-mobile" className="right hide-on-med-and-down">
                              <li><Link to='/' className="active">Home</Link></li>
                              <li><Link to='/business'>Business</Link></li>
                              <li><Link to="/login">Login</Link></li>
                              <li><Link to='/signUp'>SignUp</Link></li>
                              
                          </ul>
                        </div>
                      </nav>
            </div>
    )
}

export default Navigation;