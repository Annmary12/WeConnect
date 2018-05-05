import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createBusinessRequest } from '../../../actions/createBusiness';
import { connect } from 'react-redux';
import {Input, Row} from 'react-materialize'


class CreateBusinessForm extends Component{
constructor(props){
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
  }
  
}

onChange = (event) => {
 this.setState({ [event.target.name]: event.target.value});
}

onSubmit = (event) => {
  e.preventDefault();
}


render(){
  const {
    name, 
    description,
    phoneNumber,
    address, 
    image, 
    location, 
    category, 
    website
  } = this.state;
  return(
    <div>
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
                                                  value={description}>
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
                                              />
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
                                                   < option value="Abia">Abia</option>
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
    </div>
)
}
}

CreateBusinessForm.propTypes = {
  createBusinessRequest: PropTypes.func.isRequired,
}

// CreateBusinessForm.contextType = {
//   router: PropTypes.object.isRequired,
// }
export default connect(createBusinessRequest, { createBusinessRequest})(CreateBusinessForm);