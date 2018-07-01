import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import CreateBusinessForm from './forms/CreateBusinessForm.jsx';
import createBusinessRequest from '../../actions/createBusiness';
import checkImage from '../../utils/imageChecker';


/**
 * @description renders component to create a business
 * @class CreateBusiness
 * @extends Component
 */
class CreateBusiness extends Component {
  /**
   * @description create instance of create business form
   *
   * @constructor
   *
   * @param {object} props - contains create business component properties
   */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      phoneNumber: '',
      address: '',
      imageSrc: '/images/noImage.jpg',
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
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  /**
 * @description Handles change of values in state
 * @method onChange
 *
 * @param {object} event
 *
 * @returns {object} SyntheticEvent
 */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
  * @description Handles image input of values in state
  * @method handleImageChange
  *
  * @param {object} event
  *
  * @returns {object} SyntheticEvent
  */
  handleImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const filereader = new FileReader();
      checkImage(filereader, file, (fileType) => {
        if (fileType === 'image/png' || fileType === 'image/gif' ||
          fileType === 'image/jpeg') {
          this.setState({ image: file });
          filereader.onload = (e) => {
            this.setState({ imageSrc: e.target.result });
          };
          filereader.readAsDataURL(file);
        } else {
          this.setState({ imageSrc: '/images/noimageyet.jpg', image: '' });
          Materialize.toast('please provide a valid image file', 2000, 'teal rounded');
        }
      });
    } else {
      this.setState({ imageSrc: '/images/noimageyet.jpg', image: '' });
    }
  }


  /**
* @description Submits business form
* @method onSubmit
* @param {object} event
*
* @returns { * } null
*/
  onSubmit(event) {
    event.preventDefault();
    this.props.createBusinessRequest(this.state)
      .then(() => {
        this.context.router.history.push('/profile');
        Materialize.toast('Successfully Created the business profile', 4000, 'teal accent-3 rounded');
      }, (error) => {
        const errorMessage = error.response.data[0] || error.response.data.message;
        Materialize.toast(errorMessage, 4000, 'red accent-3 rounded');
      });
  }

  /**
     * @description renders create business form
     *
     * @returns { jsx } jsx - renders business form
     */
  render() {
    return (
      <div>
        <div className="nav-business">
          <Navigation />
          <div className="container">
            <div className="row register-business">
              <div className="col s10 offset-s1">
                <h3 className="center-align">Register Business</h3>
              </div>
            </div>
          </div>
          <CreateBusinessForm
            {...this.state}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            handleImageChange={this.handleImageChange}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  createBusinessData: state.createBusiness.isCreated
});
CreateBusiness.propTypes = {
  createBusinessRequest: PropTypes.func.isRequired,
  createBusinessData: PropTypes.bool.isRequired,
};
CreateBusiness.contextTypes = {
  router: PropTypes.object.isRequired
};
export default connect(mapStateToProps, { createBusinessRequest })(CreateBusiness);
