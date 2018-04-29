import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CreateBusinessForm from './forms/CreateBusinessForm';
// import { connect } from 'react-redux';
// import { createBusinessRequest } from '../../actions/BusinessAction';
// import PropTypes from 'prop-types';

class CreateBusiness extends Component {
    // onSubmit(business) {
    //     this.props.createBusinessRequest(business)
    //         .then(() => Console.log('Business created'));
    // }
    render(){
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
}
// CreateBusiness.propType = {
//     createBusinessRequest: PropTypes.func.isRequired,
// }
// export default connect(null, {createBusinessRequest})(CreateBusiness);

export default CreateBusiness;