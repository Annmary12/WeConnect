import React from 'react';


const EditBusinessForm = () => {
    return(
        <div>
                <div class="container">
                <div class="row register-section">
                        <div class="col s10 offset-s1">
                          <div class="card">
                            
                            <div class="card-content">
                                    <div class="input-field">
                                            <i class="material-icons prefix">face</i>
                                            <input id="last_name" type="text" class="validate" value="Smart Phone" />
                                            <label for="last_name">Business Name</label>
                                          </div>
                                          <div class="input-field">
                                                <i class="material-icons prefix">description</i>
                                                <textarea id="textarea1" class="materialize-textarea" value="">Smart phone description</textarea>
                                                <label for="textarea1">Description of your business...</label>
                                              </div>

                                          <div class="input-field">
                                                <i class="material-icons prefix">label</i>
                                                <select>
                                                        <option value="" disabled >Choose Category</option>
                                                        <option value="1" selected>IT</option>
                                                        <option value="2">Marketing</option>
                                                        <option value="3">Sports</option>
                                                 </select>
                                                 
                                    </div>
                                    <div class="input-field">
                                            <i class="material-icons prefix">edit_location</i>
                                                    <select name="location">
                                                        <option value="" disabled>Choose Location</option>
                                                        <option>Abia</option>
                                                        <option selected>Abuja</option>
                                                        <option>Lagos</option>
                                                    </select>
                                            </div>

                                            <div class="file-field input-field">
                                                    <div class="btn" id="button">
                                                      <span>upload</span>
                                                      <input type="file" />
                                                    </div>
                                                    <div class="file-path-wrapper">
                                                      <input class="file-path validate" type="text" value="amaka.jpg" /> 
                                                    </div>
                                                  </div>

                                                  <div class="input-field center-align">
                                                        <button class="btn waves-effect waves-light btn_large" type="submit" name="action">Update
                                                                <i class="material-icons left">send</i>
                                                              </button>
                                                  </div><br />
                            </div>
                            <div class="card-action">
 
                            </div>
                          </div>
                        </div>
                      </div>
       
        </div>
        </div>
    )
}

export default EditBusinessForm;