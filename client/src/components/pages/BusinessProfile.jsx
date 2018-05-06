import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import BusinessDetails from './BusinessDetails';

const BusinessProfile = () => (
        <div className="">
        <div class="nav-business">
        <Navigation />
        <div class="container">
                            
                    <div class="row register-business">
                        <div class="col s10 offset-s1">                           
                        </div>      
                    </div>
              
           </div>

           <BusinessDetails />
            <Footer />
</div>
        </div>
    );

export default BusinessProfile;
