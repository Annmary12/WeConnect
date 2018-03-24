import models from '../models/index';

const reviewModel = models.Review;
const businesses = models.Business;

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
  static create(req, res) {
    return businesses.findOne({ where: { id: req.params.businessId } })
      .then((business) => {
        // creates review of an existing business
        if (business) {
          const review = new reviewModel({
            context: req.body.context,
            userId: business.userId,
            buisnessId: business.id
          });

          return review.save()
            .then(rev => res.status(201).json({
              rev,
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
  static fetch(req, res) {
    businesses.findOne({ where: { id: req.params.businessId } })
      .then((business) => {
        if (business) {
          return reviewModel.findAll({ where: { buisnessId: business.id } })
            .then((reviews) => {
              res.status(200).json({
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
