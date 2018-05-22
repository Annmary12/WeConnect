import React from 'react';
import moment from 'moment';

const ReviewList = ({context, createdAt}) => (
        <div>
             <div className="row">
                            <div className="col s12 m2 l2">
                                <img src={require('../../../public/images/bu.jpg')} className="imageReview"/>
                                
                            </div>
    
                            <div className="col s12 m10 l10">
                              <p className="">
                                 { context }
                              </p>
                              <div className="row comment-by">
                                  <div className="col s6">
                                      by: <em>Annmary Amaka</em> 
                                  </div>
                                  <div className="col s6 right-align">
                                      <em className=""> 
                                      {moment(createdAt).invalidAt()} days
                                      </em>
                                  </div>
                                </div> 

                            </div>
                          </div><hr/>
         </div>
    );

export default ReviewList;
