import React from 'react';

const Footer = () => {
    return(
        <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">weConnect</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l3 s6 right-align"> 
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">About Us</a></li>
              </ul>
            </div>
            <div className="col l3 s6 right-align">
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Contact</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Business</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container center-align">
          © 2014 Copyright weConnect<br />
          <a className="grey-text text-lighten-4" href="#!">by <span>Annie_maks</span></a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;