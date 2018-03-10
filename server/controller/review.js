import reviews from '../model/review';
import businesses from '../model/business';

class Review {
/**
   * @returns {Object} createReview
   * @param {*} req
   * @param {*} res
   */
  static create(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        reviews.push({
          id: reviews.length + 1,
          userId: 2,
          businessId: req.params.businessId,
          content: req.body.content
        });

        res.json({
          reviews,
          message: 'Review Created Sucessfully',
          error: false
        });
      }
    }

    return res.json({
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
    const getreviews = [];
    for (let i = 0; i < reviews.length; i += 1) {
      if (reviews[i].businessId === parseInt(req.params.businessId, 10)) {
        getreviews.push(reviews[i]);
      }
    }
    if (getreviews.length > 0) {
      return res.json({
        getreviews,
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
