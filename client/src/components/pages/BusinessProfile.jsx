import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Footer from './Footer';
import BusinessDetails from './BusinessDetails';
import { fetchOneBusinessRequest } from '../../actions/fetchBusinesses';

class BusinessProfile extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchOneBusinessRequest(this.props.match.params.id);
  }
    
  render(){
    const { business }  = this.props;
    console.log(business);
    return(
      <div className="nav-business">
      <Navigation />
        <div className="container">           
          <div className="row register-business">
            <div className="col s10 offset-s1">                           
            </div>      
          </div> 
          </div>
        { business && 
          <BusinessDetails 
            description={business.description}
            name={business.name}
            category={business.category}
            location={business.location}
            website={business.website}
            />
        }
      <Footer />
      </div>
        )
    }
}


const mapStateToProps = state => ({
    business: state.BusinessReducer.oneBusiness
});

export default connect(mapStateToProps, { fetchOneBusinessRequest })(BusinessProfile);
