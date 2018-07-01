import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Footer from './Footer';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';
import Spinner from 'react-md-spinner';
import { getUserRequest, getUserBusinessesRequest } from '../../actions/getUser';

/**
 * @description renders user profile page
 *
 * @class Profile
 *
 * @extends Component
 */
class Profile extends Component {
  /**
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: ''
    };
  }

  /**
   * @description fetches user details and business of the user
   * @method componentWillMount
   *
   * @param {object} - business and user
   *
   * @returns {void}
   */
  componentDidMount() {
    this.props.getUserRequest(this.props.userId);
    this.props.getUserBusinessesRequest(this.props.userId);
  }

  /**
   * @description updates the state
   * @method componentWillReceiveProps
   * @param {nextProps} nextProps - object of new incoming property
   *
   * @returns {void}
   */
  componentWillReceiveProps(nextProps) {
    const { firstname, lastname, email } = nextProps.currentUser;
    this.setState({ firstname, lastname, email });
  }

  /**
     *
     * React element markup
     * @returns {jsx} jsx - renders profile page
     */
  render() {
    const { userBusinesses } = this.props;

    // gets the list of user's businesses
    const businessList = userBusinesses && userBusinesses.map(business => (
        <div className="col s4" key={business.id}>
          <UserCard
            name={business.name}
            description={business.description}
            id={business.id}
            image={business.image} />
        </div>
    ));
    // message for no business
    const noBusiness = (
      <div className="row">
        <div className="card blue-grey darken-1">
          <div className="card-content center-align">
            <p>No Business Yet</p>
          </div>
        </div>
      </div>
    );

    const businessMessage = (
      <div>
        <h4 className="">Your businesses</h4> <hr /><br />
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
              {businessMessage}
              {this.props.isLoading ? <div className="spinner"> <Spinner size="50" /></div> :
                <div className="row">
                  {businessList.length > 0 ? businessList : noBusiness}
                </div>
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  // businesses: state.BusinessReducer.businesses,
  userId: state.auth.user.payload.id,
  currentUser: state.getUser.user,
  userBusinesses: state.userBusinesses.businesses,
  isLoading: state.userBusinesses.isLoading || state.createBusiness.isLoading
});

export default connect(mapStateToProps, { getUserRequest, getUserBusinessesRequest })(Profile);
