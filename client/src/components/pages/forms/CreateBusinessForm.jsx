import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Row } from 'react-materialize';
import PropTypes from 'prop-types';
import { createBusinessRequest } from '../../../actions/createBusiness';

/**
 * @class CreateBusinessForm
 */
class CreateBusinessForm extends Component {
  /**
     * @constructor
     * @param {object} props
     */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      phoneNumber: '',
      address: '',
      image: '',
      location: '',
      category: '',
      website: '',
      errors: {},
      isLoading: false,
      isCreated: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
 * Handles change of values in state
 * @param {object} event
 *
 * @returns {object} SyntheticEvent
 */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
 * Submits business form
 * @param {object} event
 *
 * @returns {object} SyntheticEvent
 */
  onSubmit(event) {
    event.preventDefault();
    this.props.createBusinessRequest(this.state);
  }

  /**
   * @param {object} nextProps
   *
   * @returns {object} assigns nextprops to state
   */
  componentWillReceiveProps(nextProps) {
    const { isCreated, hasError, error } = nextProps.createBusinessData[0];
    if (hasError) {
      if (error.response) {
        Materialize.toast(error.response.data, 4000, 'red accent-3 rounded');
      } else {
        Materialize.toast('There was an error submiting your request', 4000, 'red accent-3 rounded');
      }
    } else if (isCreated && !hasError) {
      this.context.router.history.push('/profile');
      Materialize.toast('Successully Created', 4000, 'teal accent-3 rounded');
    }
  }

  /**
     *
     * React element markup
     * @returns {object} markUp
     */
  render() {
    const {
      name,
      description,
      phoneNumber,
      address,
      // image,
      location,
      category,
      website
    } = this.state;
    return (
      <div className="container">
        <div className="row register-section">
          <div className="col s10 offset-s1">
            <div className="card">
              <form onSubmit={this.onSubmit}>
                <div className="card-content">
                  <div className="input-field">
                    <i className="material-icons prefix">face</i>
                    <input
                      id="last_name"
                      type="text"
                      name='name'
                      onChange={this.onChange}
                      value={name}
                      required
                    />
                    <label htmlFor="last_name">Business Name</label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">description</i>
                    <textarea
                      id="textarea1"
                      className="materialize-textarea"
                      name='description'
                      onChange={this.onChange}
                      value={description}
                      required>
                    </textarea>
                    <label htmlFor="textarea1">Description of your business...</label>
                  </div>

                  <div className="input-field">
                    <i className="material-icons prefix">location_city</i>
                    <input
                      id="address"
                      type="text"
                      name='address'
                      onChange={this.onChange}
                      value={address}
                      required />
                    <label htmlFor="last_name">Enter Address</label>
                  </div>

                  <div className="input-field">
                    <i className="material-icons prefix">local_phone</i>
                    <input
                      id="phoneNumber"
                      type="number"
                      name='phoneNumber'
                      onChange={this.onChange}
                      value={phoneNumber}
                      required
                    />
                    <label htmlFor="last_name">Enter Phone Number</label>
                  </div>

                  <Row>
                    <Input s={12}
                      type='select'
                      label='Select Location'
                      icon='location_on'
                      defaultValue={location}
                      name='location'
                      onChange={this.onChange}
                    >
                      < option value="">Select Location</option>
                      <option value="Abia">Abia</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Lagos">Lagos</option>
                    </Input>
                  </Row>

                  <Row>
                    <Input s={12}
                      type='select'
                      label='Select Category'
                      icon='label'
                      defaultValue={category}
                      name='category'
                      onChange={this.onChange}
                    >
                      <option value="">Select Category</option>
                      <option value="IT">IT</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sports">Sports</option>
                    </Input>
                  </Row>

                  <div className="input-field">
                    <i className="material-icons prefix">web</i>
                    <input
                      id="website"
                      type="text"
                      name='website'
                      onChange={this.onChange}
                      value={website}
                    />
                    <label htmlFor="last_name">Enter Website url</label>
                  </div>

                  <div className="file-field input-field">
                    <div className="btn" id="button">
                      <span>upload</span>
                      <input type="file" />
                    </div>
                    <div className="file-path-wrapper">
                      <input className="file-path validate" type="text" />
                    </div>
                  </div>

                  <div className="input-field center-align">
                    <button className="btn waves-effect waves-light btn_large" type="submit" name="action">SUBMIT
                                                            <i className="material-icons left">send</i>
                    </button>
                  </div><br />
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  createBusinessData: state.createBusiness
});
CreateBusinessForm.propTypes = {
  createBusinessRequest: PropTypes.func.isRequired,
};
CreateBusinessForm.contextTypes = {
  router: PropTypes.object.isRequired
};
export default connect(mapStateToProps, { createBusinessRequest })(CreateBusinessForm);
