import React from 'react';
import ReviewForm from './forms/ReviewForm';

const BusinessDetails = () => (
    <div className="busidetails">
            <div class=""><br/><br/><br/><br/><br/>
          <div class="row">
              <div class="col s12 m12 l8">
                  <div class="row">
                      <div class="col s10 offset-s1">
                       <p class="p-body">
                      
                              Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.
    
                              Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.
                              
                              What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.
                       </p>
                       <div class="row">
                         <div class="col s6 p-body">
                            <b>Business Location:</b> Abuja<br/>
                            <b>Category:</b><span class="label">Network</span>
                         </div>
                         <div class="col s6 right-align">
                            <span><b>30</b> reviews</span>
                        <a href="#!"><i class="small material-icons">favorite_border</i></a> 
                        <b id="like-count">21 likes</b>
                         </div>
                       </div>
                     
                    
                      </div>
                    </div>
                    <ReviewForm />
    </div>
    <div class="col s12 m12 l3 left">
                  <div class="card side-card">
                      <div class="card-content">
                          <span class="card-title">Related Businesses</span><br/><hr/>
                              <div class="row">
                                     <div class="col s3">
                                        <img src={require('../../../public/images/login2.jpg')} class="image-nav"/>
                                     </div>
                                     <div class="col s9">Smart Hub</div>
                                    </div><hr/>

                                    <div class="row">
                                        <div class="col s3">
                                           <img src={require('../../../public/images/login2.jpg')} class="image-nav"/>
                                        </div>
                                        <div class="col s9">Smart Hub</div>
                                       </div><hr/>

                                       <div class="row">
                                          <div class="col s3">
                                             <img src={require('../../../public/images/login2.jpg')} class="image-nav"/>
                                          </div>
                                          <div class="col s9">Smart Hub</div>
                                         </div><hr/>

                                         <div class="row">
                                            <div class="col s3">
                                               <img src={require('../../../public/images/login2.jpg')} class="image-nav"/>
                                            </div>
                                            <div class="col s9">Smart Hub</div>
                                           </div>
                      </div>
                    
                    </div>

                    <div class="card side-card">
                        <div class="card-content">
                            <span class="card-title">Trending Businesses</span><br/><hr/>
                                <div class="row">
                                       <div class="col s3">
                                          <img src={require('../../../public/images/login2.jpg')} class="image-nav"/>
                                       </div>
                                       <div class="col s9">Smart Hub</div>
                                      </div><hr/>
  
                                      <div class="row">
                                          <div class="col s3">
                                             <img src={require('../../../public/images/login2.jpg')} class="image-nav"/>
                                          </div>
                                          <div class="col s9">Smart Hub</div>
                                         </div><hr/>
  
                                         <div class="row">
                                            <div class="col s3">
                                               <img src={require('../../../public/images/login2.jpg')} class="image-nav"/>
                                            </div>
                                            <div class="col s9">Smart Hub</div>
                                           </div><hr/>
  
                                           <div class="row">
                                              <div class="col s3">
                                                 <img src={require('../../../public/images/login2.jpg')} class="image-nav"/>
                                              </div>
                                              <div class="col s9">Smart Hub</div>
                                             </div>
                        </div>
                      
                      </div>
              </div>
          </div>
    </div>
    </div>
  
    );

export default BusinessDetails;
