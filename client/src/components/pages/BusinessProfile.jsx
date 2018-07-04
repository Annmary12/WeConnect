import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Footer from './Footer';
import BusinessDetails from './BusinessDetails';
import { fetchOneBusinessRequest, deleteBusinessRequest, likeRequest } from '../../actions/fetchBusinesses';
import { getReviewRequest } from '../../actions/review';

/**
 * @description render business profile page
 *
 * @class BusinessProfile
 *
 * @extends component
 */
class BusinessProfile extends Component {
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
    const businessId = this.props.business.id;
    const { authId } = this.props;
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
    const { reviews } = this.props;
    return (
      <div className="nav-business " style={{ backgroundImage: `url("${business.image}")` }}>
        <div className="pad">
          <Navigation />
          <div className="container">
            <div className="row register-business">
              <div className="col s10 offset-s1">
                <div className="center-align" id="businessHeader">{business.name}</div>
              </div>
            </div>
          </div>
          { business &&
            <BusinessDetails
              onDelete={ this.onDelete }
              handleLike={ this.handleLike }
              description={ business.description }
              name={ business.name }
              category={ business.category }
              location={ business.location }
              website={ business.website }
              id={ business.id }
              reviews={ reviews }
              userId={ business.userId }
              numberOfLikes={ business.numberOfLikes }
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
  reviews: state.allReviews.reviews,
  authId: state.auth.user.id,
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
};
export default connect(mapStateToProps, {
  fetchOneBusinessRequest,
  deleteBusinessRequest,
  getReviewRequest,
  likeRequest
})(BusinessProfile);
