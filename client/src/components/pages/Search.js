import React from 'react';

const Search = () => {
    return(
        <div>
                    <div class="container search-box">
                            
                            <div class="card row search">
                                <div class="col s10 offset-s1">
                                    <div class="row">
                                            <form>
                                                <div class="col s3">
                                                        <div class="input-field">
                                                                <input id="icon_prefix" type="text" class="validate" />
                                                                <label for="icon_prefix">Enter Business Name</label>
                                                              </div>
                                                </div>
                                                <div class="col s3">
                                                        <div class="input-field">
                                                                <select>
                                                                        <option value="" disabled selected>Choose Category</option>
                                                                        <option value="1">IT</option>
                                                                        <option value="2">Marketing</option>
                                                                        <option value="3">Sports</option>
                                                                 </select>
                                                                 
                                                    </div>
                                                </div>
        
                                                <div class="col s3">
                                                        <div class="input-field">
                                                            <select name="category">
                                                                <option value="" disabled selected>Choose Location</option>
                                                                <option>Abia</option>
                                                                <option>Abuja</option>
                                                                <option>Lagos</option>
                                                            </select>
                                                    </div>
                                                </div>
                                                <div class="col s3" id="search-button">
                                                        <button class="btn waves-effect waves-light btn_large" type="submit" name="action">Search
                                                                <i class="material-icons right">search</i>
                                                              </button>
                                                </div>
                                            </form>
                                    </div>
                                   
                                </div>
                                  
                            </div>
                      
                   </div>
                </div>
    )
}

export default Search;