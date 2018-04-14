import React from 'react';

const FeacturedBusiness = () => {
    return(
        <div class="container">
        <div class="row section1">
            <h2 class="center-align">Our Services</h2>

            <div class="row">
              <div class="col s4">
                      <div class="card" style="overflow: visible;">
                              <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" id="activator" src={require('../../../public/images/bu.jpg')} />
                              </div>
                              <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Smart Hub<i class="material-icons right">more_vert</i></span>
                
                                <p><a href="#!">Smart hub business deals with ...</a></p>
                              </div>
                              <div class="card-reveal" style="display: none; transform: translateY(0px);">
                                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                              </div>
                
                              <div class="card-action">
                                <a href="businessProfile.html">Read more...</a>
                               
                              </div>
                            </div>
              </div>
              <div class="col s4">
                      
                      <div class="card" style="overflow: visible;">
                              <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" id="activator" src={require('../../../public/images/background2.png')} />
                              </div>
                              <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">E-Connect<i class="material-icons right">more_vert</i></span>
                
                                <p><a href="businessProfile.html">E-Connect helps you to connect...</a></p>
                              </div>
                              <div class="card-reveal" style="display: none; transform: translateY(0px);">
                                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                              </div>
                
                              <div class="card-action">
                                  <a href="businessProfile.html">Read more...</a>
                               
                              </div>
                            </div>
              </div>
              <div class="col s4">
                      
                      <div class="card" style="overflow: visible;">
                              <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" id="activator" src={require('../../../public/images/login.jpg')} />
                              </div>
                              <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Projaro<i class="material-icons right">more_vert</i></span>
                
                                <p><a href="businessProfile.html">We develop softwares system...</a></p>
                              </div>
                              <div class="card-reveal" style="display: none; transform: translateY(0px);">
                                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                              </div>
                
                              <div class="card-action">
                                  <a href="businessProfile.html">Read more...</a>
                              </div>
                            </div>
              </div>
          </div>
        </div>
    </div>
    )
}
export default FeacturedBusiness;