import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Footer from './Footer';
import EditBusinessForm from './forms/EditBusinessForm';
import { fetchOneBusinessRequest } from '../../actions/business';

/**
 * @description renders edit business component
 *
 * @class EditBusiness
 *
 * @extends component
 */
export class EditBusiness extends Component {
/**
   * @param {object} api call
   * @returns {object} performs an action
   */
  componentWillMount() {
    this.props.fetchOneBusinessRequest(this.props.match.params.id);
  }
  /**
   * @description renders business edit form
   *
   * @returns { jsx } jsx - renders business edit form component
   */
  render() {
    const { business } = this.props;
    return (
      <div>
        <div className="nav-business">
          <Navigation />
          <div className="container">
            <div className="row register-business">
              <div className="col s10 offset-s1">
                <h3 className="center-align">Update Business</h3>
              </div>
            </div>
          </div>
          <EditBusinessForm business={ business } />
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  business: state.OneBusiness.business,
  updatedBusiness: state.updateBusiness,
});

EditBusiness.contextTypes = {
  router: PropTypes.object.isRequired
};

EditBusiness.propTypes = {
  fetchOneBusinessRequest: PropTypes.func.isRequired,
  business: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, { fetchOneBusinessRequest })(EditBusiness);

