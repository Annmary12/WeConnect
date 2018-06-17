import React from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import TextTruncate from 'react-text-truncate';
import PropTypes from 'prop-types';

/**
   * @description renders businesses in cards
   *
   * @returns { jsx } jsx - renders business component
   */
const Card = ({
  name, description, id, image
}) => (
    <div className="card" style={{ overflow: 'visible' }}>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" id="activator" src={image} alt="businessImage" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          <TextTruncate text={name} lines={1} />
          <i className="material-icons right">more_vert</i>
        </span>
        <TextTruncate text={description} lines={1} />
      </div>
      <div className="card-reveal" style={{ display: 'none', transform: 'translateY(0px)' }}>
        <span className="card-title grey-text text-darken-4">{name}<i className="material-icons right">close</i></span>
        <p>{description} </p>
      </div>
      <div className="card-action">
        <Link to={`/businessProfile/${id}`}>More Details...</Link>
      </div>
    </div>
);

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string
};

export default Card;
