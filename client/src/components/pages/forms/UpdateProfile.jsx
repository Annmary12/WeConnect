import React from 'react';
import Spinner from 'react-md-spinner';
import PropTypes from 'prop-types';
import InputFieldGroup from './InputFieldGroup';


/**
 * @description displays a form to create a business
 * @method UpdateProfile
 *
 * @param { props } props - takes states and function
 *
 * @returns { jsx } jsx - renders createBusinessForm component
 */
const UpdateProfile = ({
  firstname, lastname, email, currentImageSrc,
  isLoading, onChange, onUpdate, handleImageChange
}) =>
  (
    <div className="container login">
      <div className="row">
        <div className="col s11 offset-s1 card">
          <div className="col s5">
            <img
              className="circle responsive-img"
              src={ currentImageSrc }
              alt="profileimage"
            />
            <div className="upload-update-btn-wrapper center-align">
              <button className="btn updateProfile">Upload a file</button>
              <input
                type="file"
                name="file"
                onChange={ handleImageChange }
              />
            </div>
          </div>
          <div className="col s7" id="login-card">
            <form onSubmit={ onUpdate }>
              <InputFieldGroup
                type="text"
                value={ firstname }
                onChange={ onChange }
                name="firstname"
                label="First Name"
                icon="face"
              />
              <InputFieldGroup
                type="text"
                value={ lastname }
                onChange={ onChange }
                name="lastname"
                label="Last Name"
                icon="face"
              />
              <InputFieldGroup
                type="email"
                value={ email }
                onChange={ onChange }
                name="email"
                label="Email"
                icon="email"
              />
              <br />
              <div className="input-field">
                <button
                  id="updateProfile"
                  className="btn waves-effect waves-light btn_large"
                  type="submit"
                  name="action"
                >
                  { isLoading
                 ?
                   <span><i className="material-icons left">send</i>Updating...</span>
                 :
                   <span><i className="material-icons left">send</i>Update</span>
                 }
                </button>


              </div>
              <br />

              <br /><br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
UpdateProfile.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  currentImageSrc: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired
};

export default UpdateProfile;
