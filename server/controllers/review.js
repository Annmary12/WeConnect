import models from '../models/index';

const reviewModel = models.Review;
const businesses = models.Business;

class Review {
/**
   * @returns {Object} createReview
   * @param {*} req
   * @param {*} res
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
        message: 'message error',
        error: err
      }));
  }

  /**
   * @returns {Object} getreviews
   * @param {*} req
   * @param {*} res
   */
  static fetch(req, res) {
    //     const getreviews = [];
    //     for (let i = 0; i < reviews.length; i += 1) {
    //       if (reviews[i].businessId === parseInt(req.params.businessId, 10)) {
    //         getreviews.push(reviews[i]);
    //       }
    //     }
    //     if (getreviews.length > 0) {
    //       return res.json({
    //         getreviews,
    //         message: 'list of reviews for this business',
    //         error: false
    //       });
    //     }

    //     return res.json({
    //       message: 'No review found for this business',
    //       error: false
    //     });
  }
}

export default Review;
