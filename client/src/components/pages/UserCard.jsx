import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = () => (
        <div>
             <div class="card" style={{overflow: 'visible'}}>
                                    <div class="card-image waves-effect waves-block waves-light">
                                      <img class="activator" id="activator" src={require('../../../public/images/bu.jpg')} />
                                    </div>
                                    <div class="card-content">
                                      <span class="card-title activator grey-text text-darken-4">Smart Phones<i class="material-icons right">more_vert</i></span>
                      
                                      <p>This platform is used to sell...</p>
                                    </div>
                                    <div class="card-reveal" style={{display: 'none', transform: ' translateY(0px)'}}>
                                      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                    </div>
                      
                                    <div class="card-action">
                                      <Link to='/editBusiness' type="button">Edit</Link>
                                      <Link to='/businessProfile' type="button">View</Link>
                                      <Link to='/deleteBusiness' type="button">Delete</Link>
                                    </div>
                                  </div>
        </div>
    );

export default UserCard;
