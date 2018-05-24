import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewList from '../ReviewList';
import { reviewRequest, getReviewRequest } from '../../../actions/review';


class ReviewForm extends Component {
    constructor(props) {
        super(props);
        const id = this.props.businessId;
        this.state = {
            context: '',
            currentBusiness: this.props.businessId,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmitReview = this.onSubmitReview.bind(this);
    }

    onChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmitReview(event) {
        event.preventDefault();
        const id = this.props.businessId;
        this.props.reviewRequest(this.state, id).then(() => {
            const { isCreated, hasError, error } = this.props.review;
            if (isCreated && !hasError) {
                this.setState({ context: '' });
                this.props.getReviewRequest(this.props.businessId);
            }
            else if (!isCreated && hasError) {
                Materialize.toast(error, 4000, 'red accent-3 rounded');
            }

        });
    }
    render() {
        const { reviews } = this.props;
        const { isAuthenticated } = this.props.authData;

        const review = reviews && reviews.map((review) => {
            return (<ReviewList
                key={review.id}
                context={review.context}
                createdAt={review.createdAt} />)
        })

        return (

            <div className="reviewForm">
                <div className="row">
                    <div className="col s10 offset-s1">

                        <h5>Reviews</h5>
                        {isAuthenticated ?
                            <div className="row">
                                <div className="col s12">

                                    <div className="input-field">
                                        <i className="material-icons prefix">rate_review</i>
                                        <textarea
                                            id="textarea1"
                                            className="materialize-textarea"
                                            name='context'
                                            onChange={this.onChange}
                                            value={this.state.context}
                                            required>
                                        </textarea>
                                        <label htmlFor="textarea1">write a message...</label>
                                    </div><br />
                                    <div className="input-field right-align">
                                        <button className="btn waves-effect waves-light btn_large " type="submit" onClick={this.onSubmitReview} name="action">Post
                                                   <i className="material-icons left">send</i>
                                        </button>
                                    </div><br />
                                </div>
                            </div>
                            : null}

                        {review}

                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    businessId: state.OneBusiness.business.id,
    review: state.ReviewReducer,
    authData: state.auth
    // busid: state.BusinessReducer.oneBusiness.id

})

export default connect(mapStateToProps, { reviewRequest, getReviewRequest })(ReviewForm);