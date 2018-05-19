import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Footer from './Footer';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';
import { fetchBusinessesRequest } from '../../actions/fetchBusinesses';

class Profile extends Component {

  componentWillMount(){
    this.props.fetchBusinessesRequest();
  }
  renderUserBusiness(){
    const { businesses, userId } = this.props;
    // const userBusiness = businesses.filter(business => {
    //     return business.userId === userId
    //   });
   
  }
  render() {
    const { businesses, userId } = this.props;
    const userBusinesses = businesses && businesses.filter(business => {
      return business.userId === userId
    });

    
      const businessList = userBusinesses && userBusinesses.map((business) => {
        return(
              <div className="col s4">
                  <UserCard 
                  name = { business.name}
                  description = { business.description}
                  key={ business.id }
                  id={business.id}/>
                </div>
        )
      });
    
    

    
    return (
      <div>
        <div className="profile-nav">
          <Navigation />


          <div className="container">

            <div className="row center-align image-box" >
              <div className="col s10 offset-s1">
                <img src={require('../../../public/images/amaka_img.jpeg')} className="profile-image" />

              </div>
              <div className="col s10 offset-s1">
                <h5>Annmary Agunanna</h5>
                <span className=""><em>annmaryamaka@gmail.com</em></span>
              </div>

            </div>
          </div>
        </div>
        <div className="container profile-section">
          <div className="row section1">
            <div className="row right-align">
              <Link to='/createBusiness' className="btn waves-effect waves-light btn_large " type="submit" name="action">Create New Business
                  <i className="material-icons left">add</i>
              </Link>
            </div>
            <h4 className="">List of Your business</h4>
            <hr /><br />
            <div className="row">
             { businessList }

            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

}
const mapStateToProps = (state) => ({
  businesses: state.BusinessReducer.businesses,
  userId: state.auth.user.payload.id
})

export default connect(mapStateToProps, { fetchBusinessesRequest })(Profile);
