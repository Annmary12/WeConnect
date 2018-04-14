import React from 'react';

const Footer = () => {
    return(
        <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">weConnect</h5>
              <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div class="col l3 s6 right-align"> 
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">About Us</a></li>
              </ul>
            </div>
            <div class="col l3 s6 right-align">
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Contact</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Business</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container center-align">
          © 2014 Copyright weConnect<br />
          <a class="grey-text text-lighten-4" href="#!">by <span>Annie_maks</span></a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;