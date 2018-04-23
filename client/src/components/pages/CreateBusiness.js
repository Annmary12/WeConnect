import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CreateBusinessForm from './forms/CreateBusinessForm';

const CreateBusiness = () => {
    return(
        <div>
            <div class="nav-business">
        <Navigation />
        <div class="container">
                            
                    <div class="row register-business">
                        <div class="col s10 offset-s1">  
                        <h3 class="center-align">Register Business</h3>                         
                        </div>      
                    </div>
              
           </div>

           <CreateBusinessForm />
            <Footer />
</div>
        </div>
      
    )
}

export default CreateBusiness;