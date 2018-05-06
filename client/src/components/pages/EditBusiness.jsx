import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import EditBusinessForm from './forms/EditBusinessForm';

const EditBusiness = () => (
        <div>
            <div class="nav-business">
        <Navigation />
        <div class="container">
                            
                    <div class="row register-business">
                        <div class="col s10 offset-s1">  
                        <h3 class="center-align">Update Business</h3>                         
                        </div>      
                    </div>
              
           </div>

           <EditBusinessForm />
            <Footer />
</div>
        </div>
      
    );

export default EditBusiness;
