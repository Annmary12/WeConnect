import React from 'react';
import PropTypes from 'prop-types';
import InputFieldGroup from './InputFieldGroup.jsx';
import Spinner from 'react-md-spinner';


/**
 * @description displays a form to create a business
 * @method UpdateProfile
 *
 * @param { props } props - takes states and function
 *
 * @returns { jsx } jsx - renders createBusinessForm component
 */
const UpdateProfile = (props) => {
  const {
    firstname, lastname, email, currentImageSrc,
    isLoading, onChange, onUpdate, handleImageChange
  } = props;
  
  return (
    <div className="container login">
      <div className="row">
        <div className="col s11 offset-s1 card">
          <div className="col s5">
            <img
              className="circle responsive-img"
              src={ currentImageSrc }
              alt="profile image"
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
                type='text'
                value={ firstname }
                onChange={ onChange }
                name="firstname"
                label='First Name'
                icon='face'
              />
              <InputFieldGroup
                type='text'
                value={ lastname }
                onChange={ onChange }
                name="lastname"
                label='Last Name'
                icon='face'
              />
              <InputFieldGroup
                type='email'
                value={ email }
                onChange={ onChange }
                name="email"
                label='Email'
                icon='email'
              />
              <br />
              <div className="input-field">
                <button
                  className="btn waves-effect waves-light btn_large"
                  type="submit"
                  name="action"
                  // disabled={isLoading}
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
};

export default UpdateProfile;
