import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UpdateProfileForm from './forms/UpdateProfile';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import { getUserRequest, updateUserRequest } from '../../actions/getUser';
import checkImage from '../../utils/imageChecker';


/**
 * @description renders component to update user profile
 * @class UpdateProfile
 * @extends Component
 */
class UpdateProfile extends Component {
  /**
     * @constructor
     * @param {object} props
     */
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      image: '',
      currentImageSrc: '',
      initialImageSrc: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  /**
   * @description fetches user details
   * @method componentWillMount
   *
   * @param {object} - user
   *
   * @returns {void}
   */
  componentDidMount() {
    // $(document).ready(() => {
    //   M.updateTextFields();
    // });
    this.props.getUserRequest(this.props.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser !== this.props.currentUser) {
      const {
        firstname, lastname, image, email
      } = nextProps.currentUser;
      this.setState({
        firstname,
        lastname,
        email,
        image,
        currentImageSrc: image,
        initialImageSrc: image
      });
    }
  }

  /**
   * @description handles on state change
   * @method onChange
   *
   * @param { object } event - event object containing user detail
   *
   * @returns { object } new user detail state
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * @description handles on state change for files
   * @method handleImageChange
   *
   * @param { object } event - event object containing file
   *
   * @returns { object } new file state
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
            this.setState({ currentImageSrc: e.target.result });
          };
          filereader.readAsDataURL(file);
        } else {
          this.setState({ currentImageSrc: this.state.initialImageSrc, imageFile: '' });
          Materialize.toast('please provide a valid image file', 2000, 'teal rounded');
        }
      });
    } else {
      this.setState({ currentImageSrc: this.state.initialImageSrc, imageFile: '' });
    }
  }

  /**
   * @description updates user
   * @method onUpdate
   *
   * @param { object } event - event object containing user details
   *
   * @returns { * } null
   */
  onUpdate(event) {
    event.preventDefault();
    this.props.updateUserRequest(this.state).then(
      () => {
        this.context.router.history.push('/profile');
        Materialize.toast(this.props.message, 2000, 'teal rounded');
      },
      () => {
        Materialize.toast('Error while updating', 2000, 'red rounded');
      }
    );
  }

  render() {
    return (
      <div className="login-background">
        <div className="pad">
          <div className="login-nav">
            <Navigation />
          </div>
          { this.props.currentUser ?
          <UpdateProfileForm
            { ...this.state }
            onChange={ this.onChange }
            onUpdate={ this.onUpdate}
            handleImageChange={ this.handleImageChange }
            isLoading = { this.props.isLoading }
          /> : null}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user.id,
  currentUser: state.getUser.user,
  updatedUser: state.getUser.updatedUser,
  message: state.getUser.message,
  isLoading: state.getUser.isLoading
});
UpdateProfile.contextTypes = {
  router: PropTypes.object.isRequired
};

UpdateProfile.propTypes = {
  getUserRequest: PropTypes.func.isRequired,
  updateUserRequest: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getUserRequest, updateUserRequest })(UpdateProfile);
