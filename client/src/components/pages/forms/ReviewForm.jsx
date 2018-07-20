import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import ReviewList from '../ReviewList';
import { reviewRequest, getReviewRequest } from '../../../actions/review';

/**
 * @description renders review form  component
 *
 * @class ReviewForm
 *
 * @extends Component
*/
class ReviewForm extends Component {
  /**
   * @description creates an instance of LoginForm
   *
   * @constructor
   *
   * @param { props } props - contains login component properties
   */
  constructor(props) {
    super(props);
    this.state = {
      context: '',
      rating: 0,
      currentBusiness: this.props.businessId,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmitReview = this.onSubmitReview.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  /**
   * @description handles on state change
   * @method onChange
   *
   * @param { object } event - event object containing review detail
   *
   * @returns { object } new review detail state
   */
  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * @description creates review
   * @method onSubmitReview
   *
   * @param { object } event - event object containing new user details
   *
   * @returns { * } null
   */
  onSubmitReview(event) {
    event.preventDefault();
    const id = this.props.businessId;
    this.props.reviewRequest(this.state, id).then(() => {
      const { isCreated, hasError, error } = this.props.review;
      if (isCreated && !hasError) {
        this.setState({ context: '' });
        this.props.getReviewRequest(this.props.businessId);
      } else if (!isCreated && hasError) {
        Materialize.toast(error, 4000, 'red accent-3 rounded');
      }
    });
  }

  /**
   * @description handles on state change for rating
   * @method changeRating
   *
   * @param { number } newRating - event object containing new user details
   *
   * @returns { * } null
   */
  changeRating(newRating) {
    this.setState({ rating: newRating });
  }

  /**
   * @description displays reviews and renders review form
   * @returns { jsx } jsx - renders review form and review
   */
  render() {
    const { reviews } = this.props;
    const { isAuthenticated } = this.props.authData;

    // gets reviews of a particular business
    const review = reviews && reviews.map(getReview => (<ReviewList
      key={ getReview.id }
      context={ getReview.context }
      createdAt={ getReview.createdAt }
      user={ getReview.reviewer }
      image={ getReview.reviewer.image }
      rating={ getReview.rating } />));

    const { context, rating } = this.state;
    return (

      <div className="reviewForm">
        <div className="row">
          <div className="col s10 offset-s1">
            <h5>Reviews</h5>
            { isAuthenticated
              ?
                <div className="row">
                  <div className="col s12">
                    <div className="input-field">
                      <i className="material-icons prefix">rate_review</i>
                      <textarea
                        id="textarea1"
                        className="materialize-textarea"
                        name="context"
                        onChange={ this.onChange }
                        value={ context }
                        required />
                      <label htmlFor="textarea1">write a message...</label>
                    </div><br />
                    <div className="rating">
                      <StarRatings
                        rating={ rating }
                        starRatedColor="#f7c454"
                        changeRating={ this.changeRating }
                        numberOfStars={ 5 }
                        starDimension="40px"
                        name="rating"
                      />
                    </div>
                    <div className="input-field right-align">
                      <button className="btn waves-effect waves-light btn_large " type="submit" onClick={ this.onSubmitReview } name="action">Post
                        <i className="material-icons left">send</i>
                      </button>
                    </div><br />
                  </div>
                </div>
              :
                null
            }
            { review }
          </div>
        </div>
      </div>
    );
  }
}

ReviewForm.propTypes = {
  reviewRequest: PropTypes.func.isRequired,
  getReviewRequest: PropTypes.func.isRequired,
  businessId: PropTypes.number,
  review: PropTypes.object.isRequired,
  reviews: PropTypes.array,
  authData: PropTypes.object.isRequired,
};

/**
 * @description maps redux state to props
 * @param { object } state - holds an authenticated user, list of reviews and business id
 * @return { object } props - returns mapped props from state
 */
const mapStateToProps = state => ({
  businessId: state.OneBusiness.business.id,
  review: state.ReviewReducer,
  authData: state.auth

});

export default connect(mapStateToProps, { reviewRequest, getReviewRequest })(ReviewForm);
