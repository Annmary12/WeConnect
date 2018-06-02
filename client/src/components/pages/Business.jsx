import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Footer from './Footer';
import Search from './Search';
import Card from './Card';
import { fetchBusinessesRequest } from '../../actions/fetchBusinesses';

/**
 * @class Business
 */
class Business extends Component {
  /**
     * @constructor
     * @param {object} props
     */
  constructor(props) {
    super(props);
    this.state = {
      // loader: false
    };
    this.renderBusiness = this.renderBusiness.bind(this);
  }

  /**
     * @description - fetches all business
     *
     * @returns {void}
     *
     * @memberof Business
     */
  componentDidMount() {
    this.props.fetchBusinessesRequest();
  }

  /**
     *
     * React element markup
     * @returns {object} markUp
     */
  renderBusiness() {
    const allBusiness = this.props.businesses;
    return (
      allBusiness && allBusiness.map(business => (
      <div className="col s12 m6 l4" key={business.id}>
          <Card
            
            id={business.id}
            name={business.name}
            description={business.description}
            image={business.image}
           />
      </div>

      ))
    );
  }

  /**
     *
     * React element markup
     * @returns {object} markUp
     */
  render() {
    return (
      <div className="">
        <div className="nav-business">
          <Navigation />
          <Search />
        </div>
        <div className="container business-section pad">
            <div className="row section1">
              <div className="row sub-header-row">
                  <div className="col s6">
                    <h5 className="sub-header">Businesses</h5>
                  </div>
                  <div className="col s6 right-align">
                    <button className="btn-flat waves-effect waves-light" type="submit" name="action">view all
                      <i className="material-icons right">chevron_right</i>
                    </button>
                  </div>
              </div>
            <hr /><br/>
            <div className="row">
              {this.renderBusiness()}
            </div>
                {/* <div className="row sub-header-row">
                  <div className="col s6">
                    <h5 className="sub-header">Marketing</h5>
                  </div>
                  <div className="col s6 right-align">
                   <button className="btn-flat waves-effect waves-light" type="submit" name="action">view all
                      <i className="material-icons right">chevron_right</i>
                   </button>
                  </div>
                </div>
                <hr /><br/>
                <div className="row">
                  <div className="col s12 m6 l4">
                    <Card />
                  </div>
                  <div className="col s12 m6 l4">
                    <Card />
                  </div>
                  <div className="col s12 m6 l4">
                    <Card />
                  </div>
                </div> */}
            </div>
          </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  businesses: state.BusinessReducer.businesses
});

Business.propTypes = {
  fetchBusinessesRequest: PropTypes.func.isRequired,
  businesses: PropTypes.array.isRequired
};
export default connect(mapStateToProps, { fetchBusinessesRequest })(Business);
