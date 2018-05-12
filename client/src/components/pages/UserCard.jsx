import React from 'react';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate'

const UserCard = ({name, description}) => (
        <div>
             <div className="card" style={{overflow: 'visible'}}>
                                    <div className="card-image waves-effect waves-block waves-light">
                                      <img className="activator" id="activator" src={require('../../../public/images/bu.jpg')} />
                                    </div>
                                    <div className="card-content">
                                      <span className="card-title activator grey-text text-darken-4"><TextTruncate text={name} lines={1} / ><i className="material-icons right">more_vert</i></span>
                      
                                      <TextTruncate text={description} lines={1}/>
                                    </div>
                                    <div className="card-reveal" style={{display: 'none', transform: ' translateY(0px)'}}>
                                      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                    </div>
                      
                                    <div className="card-action">
                                      <Link to='/editBusiness' type="button">Edit</Link>
                                      <Link to='/businessProfile' type="button">View</Link>
                                      <Link to='/deleteBusiness' type="button">Delete</Link>
                                    </div>
                                  </div>
        </div>
    );

export default UserCard;
