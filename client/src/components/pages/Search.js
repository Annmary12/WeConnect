import React from 'react';

const Search = () => {
    return(
        <div>
                    <div className="container search-box">
                            
                            <div className="card row search">
                                <div className="col s10 offset-s1">
                                    <div className="row">
                                            <form>
                                                <div className="col s3">
                                                        <div className="input-field">
                                                                <input id="icon_prefix" type="text" className="validate" />
                                                                <label for="icon_prefix">Enter Business Name</label>
                                                              </div>
                                                </div>
                                                <div className="col s3">
                                                        <div className="input-field">
                                                                <select>
                                                                        <option value="" disabled>Choose Category</option>
                                                                        <option value="1">IT</option>
                                                                        <option value="2">Marketing</option>
                                                                        <option value="3">Sports</option>
                                                                 </select>
                                                                 
                                                    </div>
                                                </div>
        
                                                <div className="col s3">
                                                        <div className="input-field">
                                                            <select name="category">
                                                                <option value="" disabled>Choose Location</option>
                                                                <option>Abia</option>
                                                                <option>Abuja</option>
                                                                <option>Lagos</option>
                                                            </select>
                                                    </div>
                                                </div>
                                                <div className="col s3" id="search-button">
                                                        <button className="btn waves-effect waves-light btn_large" type="submit" name="action">Search
                                                                <i className="material-icons right">search</i>
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