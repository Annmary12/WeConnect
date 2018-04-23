import React from 'react';

const CreateBusinessForm = () => {
    return(
        <div>
            <div class="container">
                <div class="row register-section">
                        <div class="col s10 offset-s1">
                          <div class="card">
                            
                            <div class="card-content">
                                    <div class="input-field">
                                            <i class="material-icons prefix">face</i>
                                            <input id="last_name" type="text" class="validate" />
                                            <label for="last_name">Business Name</label>
                                          </div>
        
                                          <div class="input-field">
                                                <i class="material-icons prefix">description</i>
                                                <textarea id="textarea1" class="materialize-textarea"></textarea>
                                                <label for="textarea1">Description of your business...</label>
                                              </div>
                                          <div class="input-field">
                                                <i class="material-icons prefix">label</i>
                                                <select>
                                                        <option value="" disabled selected>Choose Category</option>
                                                        <option value="1">IT</option>
                                                        <option value="2">Marketing</option>
                                                        <option value="3">Sports</option>
                                                 </select>
                                                 
                                    </div>

                                    <div class="input-field">
                                            <i class="material-icons prefix">edit_location</i>
                                                    <select name="location">
                                                        <option value="" disabled selected>Choose Location</option>
                                                        <option>Abia</option>
                                                        <option>Abuja</option>
                                                        <option>Lagos</option>
                                                    </select>
                                            </div>

                                            <div class="file-field input-field">
                                                    <div class="btn" id="button">
                                                      <span>upload</span>
                                                      <input type="file" />
                                                    </div>
                                                    <div class="file-path-wrapper">
                                                      <input class="file-path validate" type="text" />
                                                    </div>
                                                  </div>

                                                  <div class="input-field center-align">
                                                        <button class="btn waves-effect waves-light btn_large" type="submit" name="action">SUBMIT
                                                                <i class="material-icons left">send</i>
                                                              </button>
                                                  </div><br />
                            </div>
                          
                          </div>
                        </div>
                      </div>
       
        </div>
        </div>
    )
}

export default CreateBusinessForm;