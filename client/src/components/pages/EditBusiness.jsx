import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Footer from './Footer';
import EditBusinessForm from './forms/EditBusinessForm';
import { fetchOneBusinessRequest } from '../../actions/fetchBusinesses';

class EditBusiness extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * @param {object} api call
   * @returns {object} performs an action
   */
  componentDidMount() {
    this.props.fetchOneBusinessRequest(this.props.match.params.id);
  }


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
          {business && <EditBusinessForm
            name={business.name}
            description={business.description}
            phoneNumber={business.phoneNumber}
            location={business.location}
            category={business.category}
            website={business.website}
            address={business.address}
            id={business.id}
          />}
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  business: state.BusinessReducer.oneBusiness
});

export default connect(mapStateToProps, { fetchOneBusinessRequest })(EditBusiness);
