import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBusinessesRequest } from '../../actions/fetchBusinesses';


/**
 * @description renders Search  component
 *
 * @class Search
 *
 * @extends Component
*/
class Search extends Component {
  /**
   * @description creates an instance of Search
   *
   * @constructor
   *
   * @param { props } props - contains login Search properties
   */
  constructor(props) {
    super(props);
    this.state = {
      searchType: '',
      value: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  /**
   * @description sets the materialize select
   * @method componentWillMount
   * @returns {void}
   *
   */
  componentDidMount() {
    $('select').material_select();
    $('select').change(event => this.onChange(event));
  }
  /**
   * @description handles on state change
   * @method onChange
   *
   * @param { object } event - event object containing search detail
   *
   * @returns { object } new search detail state
   */
  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * @description handles the search
   * @method onSearch
   *
   * @param { object } event - event object containing search detail
   *
   * @returns { object } new login detail state
   */
  onSearch(event) {
    event.preventDefault();
    const { searchType, value } = this.state;
    console.log(this.state);
    this.props.searchBusinessesRequest(searchType, value);
  }
  /**
   * @description displays the search field
   *
   * @returns { jsx } jsx - renders search form
   */
  render() {
    const { searchType, value } = this.state;
    return (
      <div>
    <div className="container search-box">
      <div className="card row search">
        <div className="col s10 offset-s1">
          <div className="row">
            <form onSubmit={this.onSearch}>
              <div className="col s4">
                <div className="input-field">
                  <input
                  id="icon_prefix"
                   type="text"
                   className="validate"
                   name='value'
                   onChange={this.onChange}/>
                  <label htmlFor="icon_prefix">Enter Business Name</label>
                </div>
              </div>


              <div className="col s5">
                <div className="input-field">
                  <select name="category" onChange={this.onChange} name='searchType'>
                    <option value="">Choose</option>
                    <option value='name'>Name</option>
                    <option value='location'>Location</option>
                    <option value='category'>Category</option>
                  </select>
                </div>
              </div>
              <div className="col s3" id="search-button">
                <button className="btn waves-effect waves-light btn_large" type="submit" name="action">Search
                                                                <i className="material-icons right">search</i>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>

    </div>
  </div>
    );
  }
}

export default connect(null, { searchBusinessesRequest })(Search);
