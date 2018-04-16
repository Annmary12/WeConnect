import React from 'react';

const ReviewList = () => {
    return(
        <div>
             <div class="row">
                            <div class="col s12 m2 l2">
                                <img src={require('../../../public/images/bu.jpg')} class="image"/>
                                
                            </div>
    
                            <div class="col s12 m10 l10">
                              <p class="">
                                  Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.
                              </p>
                              <div class="row comment-by">
                                  <div class="col s6">
                                      by: <em>Annmary Amaka</em> 
                                  </div>
                                  <div class="col s6 right-align">
                                      <em class=""> 2days ago</em>
                                  </div>
                                </div> 

                            </div>
                          </div><hr/>
         </div>
    )
}

export default ReviewList;