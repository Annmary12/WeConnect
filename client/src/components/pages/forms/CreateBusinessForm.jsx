import React, { Component } from 'react';
import { Input, Row } from 'react-materialize';
import PropTypes from 'prop-types';

/**
 * @description displays a form to create a business
 * @method CreateBusnessForm
 *
 * @param { props } props - takes states and function
 *
 * @returns { jsx } jsx - renders createBusinessForm component
 */
const CreateBusnessForm = (props) => {
  const {
    onChange, onSubmit, handleImageChange, isLoading
  } = props;

  return (
    <div>
      <div className="container">
        <div className="row register-section">
          <div className="col s10 offset-s1">
            <div className="card">
              <form onSubmit={ onSubmit }>
                <div className="card-content">
                  <div className="input-field">
                    <i className="material-icons prefix">face</i>
                    <input
                      id="last_name"
                      type="text"
                      name='name'
                      onChange={ onChange }
                      value={ props.name }
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
                      onChange={ onChange }
                      value={ props.description }
                      required />
                    <label htmlFor="textarea1">Description of your business...</label>
                  </div>

                  <div className="input-field">
                    <i className="material-icons prefix">location_city</i>
                    <input
                      id="address"
                      type="text"
                      name='address'
                      onChange={ onChange }
                      value={ props.address }
                      required />
                    <label htmlFor="last_name">Enter Address</label>
                  </div>

                  <div className="input-field">
                    <i className="material-icons prefix">local_phone</i>
                    <input
                      id="phoneNumber"
                      type="number"
                      name='phoneNumber'
                      onChange={ onChange }
                      value={ props.phoneNumber }
                      required
                    />
                    <label htmlFor="last_name">Enter Phone Number</label>
                  </div>

                  <Row>
                    <Input
                      s={12}
                      type='select'
                      label='Select Location'
                      icon='location_on'
                      defaultValue={ props.location }
                      name='location'
                      onChange={ onChange }
                    >
                      <option value="">Select Location</option>
                      <option value="Abia">Abia</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Lagos">Lagos</option>
                    </Input>
                  </Row>

                  <Row>
                    <Input
                      s={12}
                      type='select'
                      label='Select Category'
                      icon='label'
                      defaultValue={ props.category }
                      name='category'
                      onChange={ onChange }
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
                      onChange={ onChange }
                      value={ props.website }
                    />
                    <label htmlFor="last_name">Enter Website url</label>
                  </div>
                  <div id="mainApp">
                    <div className="previewComponent">

                      <input type="file" className="fileInput" onChange={ handleImageChange } />
                      <div className="imgPreview">
                        <img src={ props.imageSrc } alt="businessImage" />
                      </div>
                    </div>
                  </div>


                  <div className="input-field center-align">
                    <button className="btn waves-effect waves-light btn_large" type="submit" name="action">
                      {isLoading
                        ?
                        'SAVING...'
                        :
                        'SUBMIT'
                      }
                      <i className="material-icons left">send</i>
                    </button>
                  </div><br />
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

CreateBusnessForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
};

export default CreateBusnessForm;

