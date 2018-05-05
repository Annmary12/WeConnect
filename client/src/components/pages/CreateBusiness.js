import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CreateBusinessForm from './forms/CreateBusinessForm';

const CreateBusiness = () => {
  
  return(
    <div>
      <div className="nav-business">
        <Navigation />
        <div className="container">
          <div className="row register-business">
            <div className="col s10 offset-s1">  
              <h3 className="center-align">Register Business</h3>                      
            </div>      
          </div>
        </div>
        <CreateBusinessForm/>
        <Footer />
     </div>
    </div>
  )
}

export default CreateBusiness;