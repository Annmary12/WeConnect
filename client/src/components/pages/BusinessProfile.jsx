import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Footer from './Footer';
import BusinessDetails from './BusinessDetails';
import { fetchOneBusinessRequest, deleteBusinessRequest } from '../../actions/fetchBusinesses';

/**
 * @class BusinessProfile
 */
class BusinessProfile extends Component {
  /**
   *
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
   * @description fetches a particular business
   *
   * @returns {void}
   *
   * @memberOf BusinessProfile
   */
  componentDidMount() {
    this.props.fetchOneBusinessRequest(this.props.match.params.id);
  }
  /**
   *
   * @param {nextProps} nextProps
   *
   * @returns {void}
   */
  componentWillReceiveProps(nextProps) {
    this.setState({ oneBusiness: nextProps.business });
    if (nextProps.isDeleted === true) {
      this.context.router.history.push('/business');
      Materialize.toast('Successfully deleted', 2000, 'teal rounded');
    }
  }

  onDelete(event) {
    event.preventDefault();
    this.props.deleteBusinessRequest(this.props.match.params.id);
  }
  render() {
    const business = this.state.oneBusiness;
    return (
      <div className="nav-business">
        <Navigation />
        <div className="container">
          <div className="row register-business">
            <div className="col s10 offset-s1">
            </div>
          </div>
        </div>
        {business &&
          <BusinessDetails
            onDelete={this.onDelete}
            description={business.description}
            name={business.name}
            category={business.category}
            location={business.location}
            website={business.website}
            id={business.id}
          />
        }
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  business: state.BusinessReducer.oneBusiness,
  isDeleted: state.BusinessReducer.isDeleted
});

BusinessProfile.contextTypes = {
  router: PropTypes.object.isRequired
};
export default connect(mapStateToProps, { fetchOneBusinessRequest, deleteBusinessRequest })(BusinessProfile);
