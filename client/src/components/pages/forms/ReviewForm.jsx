import React from 'react';
import ReviewList from '../ReviewList';

const ReviewForm = () => {
    return(
        <div className="reviewForm">
            <div className="row">
                        <div className="col s10 offset-s1">
    
                          <h5>Reviews</h5>
                          <div className="row">
                              <div className="col s12">
                               
                                <div className="input-field">
                                    <i className="material-icons prefix">rate_review</i>
                                    <textarea id="textarea1" className="materialize-textarea" value=""></textarea>
                                    <label htmlFor="textarea1">write a message...</label>
                                  </div><br/>
                                  <div className="input-field right-align">
                                      <button className="btn waves-effect waves-light btn_large " type="submit" name="action">Post
                                              <i className="material-icons left">send</i>
                                            </button>
                                </div><br/>
                            </div>
                          </div>
                          <ReviewList />
                          <ReviewList />
                          </div>
                          </div>
        </div>
    )
}

export default ReviewForm;