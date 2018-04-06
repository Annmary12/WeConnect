import models from '../models/index';

const reviewModel = models.Review;
const businesses = models.Business;

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
    return businesses.findOne({ where: { id: req.params.businessId } })
      .then((business) => {
        // creates review of an existing business
        if (business) {
          if (business.userId === authData.payload.id) {
            return res.status(404).json({
              message: 'You can not review yourself',
              error: true
            });
          }
          const newReview = new reviewModel({
            context: req.body.context,
            userId: business.userId,
            buisnessId: business.id
          });

          return newReview.save()
            .then(review => res.status(201).json({
              review,
              message: 'Sucessfully Created',
              error: false
            }))
            .catch(err => res.status(400).json({
              error: err
            }));
        }
        // check business you are about to review exist
        return res.status(404).json({

          message: 'Business Not Found',
          error: true
        });

        // res.status(200).send(business);
      })
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
    return businesses.findOne({ where: { id: req.params.businessId } })
      .then((business) => {
        if (business) {
          return reviewModel.findAll({ where: { buisnessId: business.id } })
            .then((reviews) => {
              if (reviews.length < 0) {
                return res.status(200).json({
                  message: `No review(s) for ${business.name}`,
                  error: false
                });
              }
              return res.status(200).json({
                reviews,
                message: `List of review(s) for ${business.name}`,
                error: false
              });
            })
            .catch(err => res.status(400).json({
              error: err
            }));
        }

        return res.status(404).json({
          message: 'Business Not Found',
          error: true
        });
      })
      .catch(err => res.status(400).json({
        error: err
      }));
  }
}

export default Review;
