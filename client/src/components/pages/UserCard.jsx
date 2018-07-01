import React from 'react';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

/**
 * @description displays user business card
 * @method UserCard
 *
 * @param { string } props - contains business details
 *
 * @returns { jsx } jsx - renders UserCard component
 */
const UserCard = ({
  name, description, id, image
}) => (
  <div>
    <div className="card" style={{ overflow: 'visible' }}>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" id="activator" src={image} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          <TextTruncate text={name} lines={1} />
          <i className="material-icons right">more_vert</i>
        </span>
        <TextTruncate text={description} lines={1} />
      </div>
      <div className="card-reveal" style={{ display: 'none', transform: ' translateY(0px)' }}>
        <span className="card-title grey-text text-darken-4">
          {name}
          <i className="material-icons right">close</i>
        </span>
        {description}
      </div>
      <div className="card-action">
        <Link to={`/editBusiness/${id}`} type="button">Edit</Link>
        <Link to={`/businessProfile/${id}`} type="button">View</Link>
      </div>
    </div>
  </div>
);

export default UserCard;
