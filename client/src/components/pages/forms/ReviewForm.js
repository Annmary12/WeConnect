import React from 'react';
import ReviewList from '../ReviewList';

const ReviewForm = () => {
    return(
        <div className="reviewForm">
            <div class="row">
                        <div class="col s10 offset-s1">
    
                          <h5>Reviews</h5>
                          <div class="row">
                              <div class="col s12">
                               
                                <div class="input-field">
                                    <i class="material-icons prefix">rate_review</i>
                                    <textarea id="textarea1" class="materialize-textarea" value=""></textarea>
                                    <label for="textarea1">write a message...</label>
                                  </div><br/>
                                  <div class="input-field right-align">
                                      <button class="btn waves-effect waves-light btn_large " type="submit" name="action">Post
                                              <i class="material-icons left">send</i>
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