import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Footer from './Footer';
import BusinessDetails from './BusinessDetails';
import { fetchOneBusinessRequest, deleteBusinessRequest, likeRequest } from '../../actions/business';
import { getReviewRequest } from '../../actions/review';

/**
 * @description render business profile page
 *
 * @class BusinessProfile
 *
 * @extends component
 */
export class BusinessProfile extends Component {
  /**
   * @description creates an instance of BusinessProfile
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      oneBusiness: [],
    };

    this.onDelete = this.onDelete.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  /**
   * @description fetches a business and get reviews for it
   * @method componentWillMount
   *
   * @param {object} - business and review
   *
   * @returns {void}
   *
   * @memberOf BusinessProfile
   */
  componentWillMount() {
    this.props.fetchOneBusinessRequest(this.props.match.params.id);
    this.props.getReviewRequest(this.props.match.params.id);
  }
  /**
   * @description updates the state
   * @method componentWillReceiveProps
   *
   * @param {nextProps} nextProps - object of new incoming property
   *
   * @returns {void}
   */
  componentWillReceiveProps(nextProps) {
    this.setState({ oneBusiness: nextProps.business });
  }
  /**
   * @description handles deleting a business
   * @method onDelete
   *
   * @returns {*} null
   */
  onDelete() {
    this.props.deleteBusinessRequest(this.props.match.params.id).then(() => {
      if (this.props.isDeleted) {
        this.props.fetchOneBusinessRequest(this.props.match.params.id);
        this.context.router.history.push('/business');
        Materialize.toast('Successfully deleted', 2000, 'teal rounded');
      }
    });
  }

  /**
   * @description handles liking a business
   * @method handleLike
   *
   * @returns {*} null
   */
  handleLike() {
    const { authId, business } = this.props;
    const businessId = business.id;
    this.props.likeRequest(businessId, authId).then(() => {
      this.props.fetchOneBusinessRequest(this.props.match.params.id);
    });
  }
  /**
   * @description renders a particular business details
   *
   * @returns { jsx } jsx - renders business details component
   */
  render() {
    const business = this.state.oneBusiness;
    const { name, description, category, location, website, id, userId, numberOfLikes, image, averageRating } = business;
    const { reviews, authData, totalReview } = this.props;
    return (
      <div className="nav-business " style={ { backgroundImage: `url("${image}")` } }>
        <div className="pad">
          <Navigation />
          <div className="container">
            <div className="row register-business">
              <div className="col s10 offset-s1">
                <div className="center-align" id="businessHeader">{ name }</div>
              </div>
            </div>
          </div>
          { business &&
            <BusinessDetails
              onDelete={ this.onDelete }
              handleLike={ this.handleLike }
              description={ description }
              name={ name }
              category={ category }
              location={ location }
              website={ website }
              id={ id }
              reviews={ reviews }
              userId={ userId }
              numberOfLikes={ numberOfLikes }
              averageRating={ averageRating }
              totalReview={ totalReview }
              authData={ authData }
            />
          }
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  business: state.OneBusiness.business,
  isDeleted: state.OneBusiness.isDeleted,
  reviews: state.ReviewReducer.reviews,
  authId: state.auth.user.id,
  authData: state.auth,
  totalReview: state.ReviewReducer.totalReview
});

BusinessProfile.contextTypes = {
  router: PropTypes.object.isRequired,
};
BusinessProfile.propTypes = {
  getReviewRequest: PropTypes.func.isRequired,
  fetchOneBusinessRequest: PropTypes.func.isRequired,
  deleteBusinessRequest: PropTypes.func.isRequired,
  business: PropTypes.object.isRequired,
  reviews: PropTypes.array,
  isDeleted: PropTypes.bool,
  authId: PropTypes.number,
  likeRequest: PropTypes.func.isRequired,
  totalReview: PropTypes.number,
  authData: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, {
  fetchOneBusinessRequest,
  deleteBusinessRequest,
  getReviewRequest,
  likeRequest
})(BusinessProfile);
