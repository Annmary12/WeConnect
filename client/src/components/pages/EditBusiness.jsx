import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Footer from './Footer';
import EditBusinessForm from './forms/EditBusinessForm';
import { fetchOneBusinessRequest } from '../../actions/fetchBusinesses';
import { PropTypes } from 'prop-types';

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
  
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.isUpdated);
    setTimeout(() => {
      if (nextProps.isUpdated === true && nextProps.updatedBusiness) {
        const { id } = nextProps.updatedBusiness;
        this.context.router.history.push(`/businessProfile/${id}`);
        Materialize.toast('Successfully Updated', 2000, 'teal rounded');
      } else if(nextProps.isUpdated === false && !nextProps.updatedBusiness) {
        console.log(this.props.updatedBusiness);
        Materialize.toast('Not Updated', 2000, 'red rounded');
      }
    }, 2000);
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
  business: state.BusinessReducer.oneBusiness,
  updatedBusiness: state.BusinessReducer.updatedBusiness,
  isUpdated: state.BusinessReducer.isUpdated
});

EditBusiness.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { fetchOneBusinessRequest })(EditBusiness);
