import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Footer from './Footer';
import BusinessDetails from './BusinessDetails';
import { fetchOneBusinessRequest, deleteBusinessRequest } from '../../actions/fetchBusinesses';

class BusinessProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneBusiness: [],
    };

    this.onDelete = this.onDelete.bind(this);
  }
  componentDidMount() {
    this.props.fetchOneBusinessRequest(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ oneBusiness: nextProps.business });
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
  business: state.BusinessReducer.oneBusiness
});

export default connect(mapStateToProps, { fetchOneBusinessRequest, deleteBusinessRequest })(BusinessProfile);
