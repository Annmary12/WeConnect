import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import moment from 'moment';

/**
 * @description displays the reviews of a business
 * @method ReviewList
 *
 * @param { string } props - contains content of the review
 *
 * @returns { jsx } jsx - renders ReviewList component
 */
const ReviewList = ({
  context, createdAt, user, image, rating
}) => (
  <div>
    <div className="row">
      <div className="col s12 m2 l2">
        <img src={ image } className="imageReview" alt="userImage" />
      </div>
      <div className="col s12 m10 l10">
        <p className="">
          { context }
        </p>
        <div className="row comment-by">
          <div className="col s6">
            by: <em>{user.firstname} {user.lastname}</em>
          </div>
          <div className="col s6 right-align">
            <em className="">
              { moment(new Date(createdAt)).fromNow() }
            </em>
          </div>
        </div>
        <div>
          <StarRatings
          rating={ !rating ? 0 : rating }
          starRatedColor="#f7c454"
          numberOfStars={ 5 }
          name='rating'
          starDimension='20px'
          starSpacing='0'
          />
        </div>
      </div>
    </div>
    
    <hr />
  </div>
);

ReviewList.propTypes = {
  context: PropTypes.string.isRequired, 
  createdAt: PropTypes.string.isRequired, 
  user: PropTypes.object.isRequired, 
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default ReviewList;
