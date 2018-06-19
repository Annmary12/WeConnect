import React from 'react';
import moment from 'moment';

/**
 * @description displays the reviews of a business
 * @method ReviewList
 *
 * @param { string } props - contains content of the review
 *
 * @returns { jsx } jsx - renders ReviewList component
 */
const ReviewList = ({ context, createdAt, user }) => (
    <div>
        <div className="row">
            <div className="col s12 m2 l2">
                <img src={require('../../../public/images/bu.jpg')} className="imageReview" />
            </div>

            <div className="col s12 m10 l10">
                <p className="">
                    {context}
                </p>
                <div className="row comment-by">
                    <div className="col s6">
                        by: <em>{user.firstname} {user.lastname}</em>
                    </div>
                    <div className="col s6 right-align">
                        <em className="">
                            {moment(new Date(createdAt)).fromNow()}
                        </em>
                    </div>
                </div>
            </div>
        </div><hr />
    </div>
);

export default ReviewList;
