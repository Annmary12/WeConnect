import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import Navigation from './Navigation';
import Footer from './Footer';
import Search from './Search';
import Card from './Card';
import { fetchBusinessesRequest } from '../../actions/fetchBusinesses';

/**
 * @description renders business component
 *
 * @class Business
 *
 * @extends component
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
    this.onPageChange = this.onPageChange.bind(this);
  }

  /**
     * @description - fetches all business
     *
     * @returns {void}
     *
     * @memberof Business
     */
  componentDidMount() {
    this.props.fetchBusinessesRequest(1);
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
    this.props.fetchBusinessesRequest(pageNumber);
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
    const {
      limit, currentPage, totalBusiness, totalPages
    } = this.props;
    return (
      <div className="nav-business">
        <div className="">
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
            <div className="center-align">
            {(totalBusiness > 6 && typeof totalBusiness !== 'undefined') ?
            <ReactPaginate
                      // className="center-align"
                       previousLabel={'previous'}
                       nextLabel={'next'}
                       breakLabel={<a href="">...</a>}
                       breakClassName={'break-me'}
                       pageCount={totalPages}
                       marginPagesDisplayed={currentPage}
                       pageRangeDisplayed={limit}
                       onPageChange={this.onPageChange}
                       containerClassName={'pagination'}
                       subContainerClassName={'pages pagination'}
                       activeClassName={'active'}
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
  businesses: state.BusinessReducer.businesses.allBusinesses,
  currentPage: state.BusinessReducer.businesses.currentPage,
  limit: state.BusinessReducer.businesses.limit,
  totalBusiness: state.BusinessReducer.businesses.numberOfBusinesses,
  totalPages: state.BusinessReducer.businesses.totalPages,
});

Business.propTypes = {
  fetchBusinessesRequest: PropTypes.func.isRequired,
  businesses: PropTypes.array
};
export default connect(mapStateToProps, { fetchBusinessesRequest })(Business);
