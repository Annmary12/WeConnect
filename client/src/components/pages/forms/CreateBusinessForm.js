import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
    isLoading: false
  }
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}

onChange(e){
 this.setState({ [e.target.name]: e.target.value});
}

onSubmit(e){
  this.setState({errors: {}, isLoading:true});
  this.onSubmit(this.state).catch((error) => {
        Materialize.toast(errors.response.data.message, 4000, 'red accent-3 rounded');
        this.setState({errors: error.response.data, isLoading: false});
      });
}
render(){
  const { name, description, phoneNumber, address, image, location, category, website, isLoading } = this.state;
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
    
    

                                      <div className="input-field">
                                            <i className="material-icons prefix">label</i>
                                            <select
                                              id='category'
                                               name='category'
                                               onChange={this.onChange}
                                               value={category}
                                               >
                                                    <option value="" disabled selected>Choose Category</option>
                                                    <option value="IT">IT</option>
                                                    <option value="Marketing">Marketing</option>
                                                    <option value="Sports">Sports</option>
                                             </select>
                                             
                                </div>

                                <div className="input-field">
                                        <i className="material-icons prefix">location_on</i>
                                                <select
                                                     id='loaction'
                                                     name="location"
                                                     onChange={this.onChange}
                                                     value={location}
                                                >
                                                    <option value="" disabled selected>Choose Location</option>
                                                    <option value="Abia">Abia</option>
                                                    <option value="Abuja">Abuja</option>
                                                    <option value="Lagos">Lagos</option>
                                                </select>
                                        </div>

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



CreateBusinessForm.contextType = {
  router: PropTypes.object.isRequired,
}
export default CreateBusinessForm;