import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Footer from './Footer';
import BusinessDetails from './BusinessDetails';
import { fetchOneBusinessRequest, deleteBusinessRequest } from '../../actions/fetchBusinesses';
import { getReviewRequest } from '../../actions/review';

/**
 * @class BusinessProfile
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
  }

  /**
   * @description fetches on a business and get reviews for it
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
   * @param {nextProps} nextProps - object of new incoming property
   *
   * @returns {void}
   */
  componentWillReceiveProps(nextProps) {
    this.setState({ oneBusiness: nextProps.business });
  }
  /**
   * @description handles deleting a business
   * @method deleteBusinessRequest
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
   * @description renders a particular business details
   *
   * @returns { jsx } jsx - renders business details component
   */
  render() {
    const business = this.state.oneBusiness;
    const { reviews } = this.props;
    return (
      <div className="nav-business ">
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
              description={ business.description }
              name={ business.name }
              category={ business.category }
              location={ business.location }
              website={ business.website }
              id={ business.id }
              reviews={ reviews }
              userId={ business.userId }
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
  reviews: state.allReviews.reviews
});

BusinessProfile.contextTypes = {
  router: PropTypes.object.isRequired,
};
BusinessProfile.propTypes = {
  getReviewRequest: PropTypes.func.isRequired,
  fetchOneBusinessRequest: PropTypes.func.isRequired,
  deleteBusinessRequest: PropTypes.func.isRequired,
  business: PropTypes.object.isRequired,
  reviews: PropTypes.object,
};
export default connect(mapStateToProps, { fetchOneBusinessRequest, deleteBusinessRequest, getReviewRequest })(BusinessProfile);