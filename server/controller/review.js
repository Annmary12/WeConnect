import reviews from '../model/review';
import businesses from '../model/business';

class Review {
  static create(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
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

    return res.status(404).json({
      message: 'Business You want to review is not found',
      error: true
    });
  }
}

export default Review;
