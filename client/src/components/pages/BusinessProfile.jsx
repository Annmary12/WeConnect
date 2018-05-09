import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Footer from './Footer';
import BusinessDetails from './BusinessDetails';
import { fetchOneBusinessRequest } from '../../actions/fetchBusinesses';

class BusinessProfile extends Component{
    constructor(props){
        super(props);
        this.renderBusiness = this.renderBusiness.bind(this);
    }
    componentWillMount(){
        this.props.fetchOneBusinessRequest(this.props.match.params.id);
    }
    renderBusiness() {
        const { business } = this.props;
        return (
         
            <BusinessDetails 
           // name={business.name}
        //    description={business.description}
        //    location={business.location}
        //    category={business.category}
           />
            
          
        ) 
      }

    render(){
        const business  = this.props.business.oneBusiness;
        console.log(business.id);
        return(
            <div className="">
        <div class="nav-business">
        <Navigation />
        <div class="container">
                            
                    <div class="row register-business">
                        <div class="col s10 offset-s1">                           
                        </div>      
                    </div>
              
           </div>

           {this.renderBusiness()}
            <Footer />
</div>
        </div>
        )
    }

}


const mapStateToProps = state => ({
    business: state.BusinessReducer
});

export default connect(mapStateToProps, { fetchOneBusinessRequest })(BusinessProfile);
