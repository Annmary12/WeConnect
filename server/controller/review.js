import reviews from '../model/review';
import businesses from '../model/business';

class Review {
/**
   * @returns {Object} createReview
   * @param {*} req
   * @param {*} res
   */
  static create(req, res) {
    const getbusiness = businesses.find(business =>
      business.id === parseInt(req.params.businessId, 10));
    if (getbusiness) {
      const newReview = {
        id: reviews.length + 1,
        userId: 2,
        businessId: req.params.businessId,
        content: req.body.content
      };
      reviews.push(newReview);

      return res.status(200).json({
        newReview,
        message: 'Review Created Sucessfully',
        error: false
      });
    }
    return res.status(400).json({
      message: 'Business You want to review is not found',
      error: true
    });
  }

  /**
   * @returns {Object} getreviews
   * @param {*} req
   * @param {*} res
   */
  static fetch(req, res) {
    const allreviews =
    reviews.filter(review => review.businessId === parseInt(req.params.businessId, 10));
    if (allreviews.length > 0) {
      return res.json({
        allreviews,
        message: 'list of reviews for this business',
        error: false
      });
    }


    return res.json({
      message: 'No review found for this business',
      error: false
    });
  }
}

export default Review;
