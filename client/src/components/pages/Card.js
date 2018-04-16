import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    return(
        <div className="card" style={{ overflow: 'visible' }}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" id="activator" src={require('../../../public/images/bu.jpg')} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Smart Hub<i className="material-icons right">more_vert</i></span>

          <p>Smart hub business deals with ...</p>
        </div>
        <div className="card-reveal" style={{ display: 'none', transform: 'translateY(0px)' }}>
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>

        <div className="card-action">
          <Link to='/businessProfile'>More Details...</Link>
         
        </div>
      </div>
    )
}

export default Card;