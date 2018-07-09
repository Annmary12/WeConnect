import models from '../models/index';

const reviewModel = models.Review;
const businesses = models.Business;
const UserModel = models.User;

/**
   * @description Status Code Used
   * 201 - Created
   * 200 - Ok
   * 404 - Not Found
   * 400 - bad request
   * /

/**
 * @description - creates Business Review components for get and create a review for a business
 */
class Review {
/**
   * @description Creates review for a business
   * @returns {Object} createReview
   * @param {*} req - api request
   * @param {*} res - route response
   */
  static createReview(req, res) {
    const authData = req.user;
    // finds business by Id
    return businesses.findOne({ where: { id: req.params.businessId } })
      .then((business) => {
        // business found
        if (business) {
          // checks whether you can review a business
          if (business.userId === authData.payload.id) {
            return res.status(404).json({
              message: 'You can not review yourself',
              error: true
            });
          }
          // checks whether the review input field is empty
          if(req.body.context.trim() === ''){
            return res.status(400).json({
              message: 'Please write a review'
            })
          }
          const newReview = new reviewModel({
            context: req.body.context,
            userId: authData.payload.id,
            businessId: business.id
          });
          // creates new review
          return newReview.save()
            .then(review => res.status(201).json({
              review,
              message: 'Sucessfully Created',
              error: false
            }))
            // catches error
            .catch(err => res.status(400).json({
              error: err
            }));
        }
        // business not found
        return res.status(404).json({
          message: 'Business Not Found',
          error: true
        });
      })
      // catches error
      .catch(err => res.status(400).json({
        error: err
      }));
  }

  /**
   * @description Gets reviews for a business
   * @returns {Object} getreviews
   * @param {*} req - api request
   * @param {*} res - route response
   */
  static fetchReviews(req, res) {
    const { businessId } = req.params;
    // fetch one business
    return businesses.findOne({ where: { id: req.params.businessId } })
      .then((business) => {
        if (business) {
          // get all reviews for the business found
          return reviewModel.findAll({ where: { businessId },
          include: [{
            model: UserModel,
            as: 'reviewer',
            attributes: ['firstname', 'lastname', 'image']
          }] })
            .then((reviews) => {
              // review not found
              if (!reviews.length) {
                return res.status(404).json({
                  message: `No Review Found`,
                  error: false
                });
              }
              const totalReview = reviews.length;
              // review found
              return res.status(200).json({
                reviews,
                totalReview,
                message: `List of review(s) for ${business.name}`,
                error: false
              });
            })
            // catches error
            .catch(err => res.status(400).json({
              error: err
            }));
        }
        // business not found
        return res.status(404).json({
          message: 'Business Not Found',
          error: true
        });
      })
      // catches error
      .catch(err => res.status(400).json({
        error: err
      }));
  }
}

export default Review;
