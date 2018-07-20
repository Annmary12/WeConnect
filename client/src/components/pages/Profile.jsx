import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-md-spinner';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import Navigation from './Navigation';
import Footer from './Footer';
import UserCard from './UserCard';
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
      email: '',
      image: ''
    };
    this.onPageChange = this.onPageChange.bind(this);
  }

  /**
   * @description fetches user details and business of the user
   * @method componentWillMount
   * @returns {void}
   */
  componentDidMount() {
    const { userId } = this.props;
    this.props.getUserRequest(userId);
    this.props.getUserBusinessesRequest(userId, 1);
  }

  /**
   * @description updates the state
   * @method componentWillReceiveProps
   * @param {nextProps} nextProps - object of new incoming property
   *
   * @returns {void}
   */
  componentWillReceiveProps(nextProps) {
    const {
      firstname, lastname, email, image
    } = nextProps.currentUser;
    this.setState({
      firstname, lastname, email, image
    });
  }

  /**
     * @description - Handle the pagination
     *
     * @returns {void}
     * @param {number} page - holds the page number you clicked
     *
     * @memberof Business
     */
  onPageChange(page) {
    const pageNumber = page.selected + 1;
    this.props.getUserBusinessesRequest(this.props.userId, pageNumber);
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
      <div className="col s4" key={ business.id }>
        <UserCard
            name={ business.name }
            description={ business.description }
            id={ business.id }
            image={ business.image } />
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

    const {
      firstname, lastname, email, image
    } = this.state;
    const {
      limit, currentPage, totalBusiness, totalPages
    } = this.props;

    return (
      <div className="">
        <div className="pad">
          <div className="profile-nav">
            <Navigation />
            <div className="container">
              <div className="row center-align image-box" >
                <div className="col s10 offset-s1">
                  <img
                    src={ image !== null
                      ?
                      image
                      :
                      'https://www.facsa.uliege.be/upload/docs/image/jpeg/2016-12/user.jpg'
                    }
                    className="profile-image"
                    alt="userImage" />
                </div>
                <div className="col s10 offset-s1">
                  <h5>{ firstname } { lastname }</h5>
                  <span className=""><em>{ email }</em></span>
                </div>
              </div>
            </div>
          </div>
          <div className="container profile-section">
            <div className="row section1">
              <div className="row right-align">
                <Link to="/createBusiness" className="btn waves-effect waves-light btn_large " type="submit" name="action">Create New Business
                  <i className="material-icons left">add</i>
                </Link>
              </div>
              { businessMessage }
              { this.props.isLoading
              ?
                <div className="spinner"> <Spinner size="50" /></div> :
                <div className="row">
                  { businessList.length > 0
                    ?
                    businessList
                    :
                     noBusiness
                  }
                </div>
              }
            </div><br />
            <div className="center-align">
              {(totalBusiness > 6 && typeof totalBusiness !== 'undefined') ?
                <ReactPaginate
                       previousLabel="previous"
                       nextLabel="next"
                       breakLabel={ <a href="">...</a> }
                       breakClassName="break-me"
                       pageCount={ totalPages }
                       marginPagesDisplayed={ currentPage }
                       pageRangeDisplayed={ limit }
                       onPageChange={ this.onPageChange }
                       containerClassName="pagination"
                       subContainerClassName="pages pagination"
                       activeClassName="active"
                       />
                       : null }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userId: state.auth.user.id,
  currentUser: state.getUser.user,
  userBusinesses: state.userBusinesses.businesses,
  limit: state.userBusinesses.limit,
  currentPage: state.userBusinesses.currentPage,
  totalPages: state.userBusinesses.totalPages,
  totalBusiness: state.userBusinesses.totalBusiness,
  isLoading: state.userBusinesses.isLoading || state.createBusiness.isLoading
});

Profile.propTypes = {
  getUserRequest: PropTypes.func.isRequired,
  getUserBusinessesRequest: PropTypes.func.isRequired,
  userBusinesses: PropTypes.array.isRequired,
  limit: PropTypes.number,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  totalBusiness: PropTypes.number,
  currentUser: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { getUserRequest, getUserBusinessesRequest })(Profile);
