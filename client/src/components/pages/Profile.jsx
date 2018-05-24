import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Footer from './Footer';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';
import { fetchBusinessesRequest } from '../../actions/fetchBusinesses';
import { getUserRequest } from '../../actions/getUser';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: ''
    }
  }

  componentDidMount() {
    this.props.getUserRequest(this.props.userId);
    this.props.fetchBusinessesRequest();
  }

  componentWillReceiveProps(nextProps){
     const { firstname, lastname, email } = nextProps.currentUser;
     this.setState({firstname:firstname, lastname:lastname, email:email})
  }

  render() {
    const { businesses, userId } = this.props;
    const userBusinesses = businesses && businesses.filter(business => {
      return business.userId === userId
    });


    const businessList = userBusinesses && userBusinesses.map((business) => {
      return (
        <div className="col s4" key={business.id}>
          <UserCard
            name={business.name}
            description={business.description}
            id={business.id} />
        </div>
      )
    });

    const noBusiness = (
      <div className="row">
        <div className="card blue-grey darken-1">
          <div className="card-content center-align">
            <p>No Business Yet</p>
          </div>
        </div>
      </div>
    )

    const businessMessage = (
      <div>
        <h4 className="">List of Your business</h4> <hr /><br />
      </div>
    );
   
     const { firstname, lastname, email } = this.state;
    return (
      <div className="">
        <div className="pad">
          <div className="profile-nav">
            <Navigation />
            <div className="container">
              <div className="row center-align image-box" >
                <div className="col s10 offset-s1">
                  <img src={require('../../../public/images/amaka_img.jpeg')} className="profile-image" />
                </div>
                  <div className="col s10 offset-s1">
                    <h5>{firstname} {lastname}</h5>
                    <span className=""><em>{email}</em></span>
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
              {businessList.length > 0 ? businessMessage : noBusiness}
              <div className="row">
                {businessList}

              </div>
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
  userId: state.auth.user.payload.id,
  currentUser: state.getUser.user
})

export default connect(mapStateToProps, { fetchBusinessesRequest, getUserRequest })(Profile);
