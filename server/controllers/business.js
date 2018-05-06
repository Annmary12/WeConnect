import dotenv from 'dotenv';
import models from '../models/index';

const businessModel = models.Business;
dotenv.config();

/**
   * @description Status Code Used
   * 201 - Created
   * 200 - Ok
   * 404 - Not Found
   * 400 - bad request
   */
/**
 *  @description - creates the Business components for read, create, update and delete businesses
 */
class Business {
/**
   * @description Gets all the businesses
   * @returns {Object} getbusinesses
   * @param {*} req - api request
   * @param {*} res - route response
   */
  static getBusinesses(req, res) {
    return businessModel.findAll()
      .then((businesses) => {
        if (businesses.length > 0) {
          return res.status(200).json({
            businesses,
            message: 'List of all bussinesses'
          });
        }

        return res.status(404).json({
          message: 'Business Not Found'
        });
      })
      .catch(error => res.status(400).json({
        error

      }));
  }

  /**
   * @description Get a particular business
   * @returns {Object} getbusiness
   * @param {*} req - api request
   * @param {*} res - api response
   */
  static getBusiness(req, res) {
    // const numbers = /^[0-9]+$/;
    // if (!req.params.businessId.match(numbers)) {
    //   return res.status(400).json({
    //     message: 'Invalid Id'
    //   });
    // }

    return businessModel.findById(req.params.businessId)
      .then((businesses) => {
        if (businesses) {
          return res.status(200).json({
            businesses,
            error: false
          });
        }

        return res.status(404).json({
          message: 'Business Not Found',
          error: true
        });
      })
      .catch(error => res.status(400).json({
        error

      }));
  }


  /**
   * @description Creates a new business
   * @returns {Object} createBusiness
   * @param {*} req - api request
   * @param {*} res - route response
   */
  static createBusiness(req, res) {
    const {
      name, description, address, image, location, category, website,
      phoneNumber
    } = req.body;

    const authData = req.user;
    const getbusiness = new businessModel({
      userId: authData.payload.id, // get the id of the user from the authData token
      phoneNumber,
      name,
      description,
      address,
      image,
      location,
      category,
      website
    });


    return getbusiness.save()
      .then(business => res.status(201).json({
        business,
        message: 'Successfully Created',
        error: false
      }))
      .catch((error) => {
        const errorMessage = error.errors.map(value => value.message);
        return res.status(400).send(errorMessage);
      });
  }

  /**
   * @description Updates a particular business
   * @returns {Object} updatebusiness
   * @param {*} req - api response
   * @param {*} res - route response
   */
  static updateBusiness(req, res) {
    const authData = req.user;
    businessModel.findById(req.params.businessId)
      .then((business) => {
        if (business) {
          if (business.userId === authData.payload.id) {
            return business.update({
              name: req.body.name || business.name,
              description: req.body.description || business.description,
              phone_number: req.body.phone_number || business.phone_number,
              address: req.body.address || business.address,
              image: req.body.image || business.image,
              location: req.body.location || business.location,
              category: req.body.category || business.category,
              website: req.body.website || business.website

            })
              .then(() => res.status(200).json({
                business,
                message: 'Sucessfully Updated',
                error: false,
              }))
              .catch(err => res.status(400).json({
                error: err
              }));
          }

          return res.status(401).json({
            message: 'Unauthorized User',
            error: true
          });
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

  /**
   * @description Deletes a particular user
   * @returns {Object} deleteBusiness
   * @param {*} req - api request
   * @param {*} res - route response
   */

  static deleteBusiness(req, res) {
    const authData = req.user;
    return businessModel.findById(req.params.businessId)
      .then((business) => {
        if (business) {
          if (business.userId === authData.payload.id) {
            return business.destroy()
              .then(() => res.status(200).json({
                message: 'Sucessfully Deleted',
                error: false,
              }))
              .catch(err => res.status(400).json({
                err
              }));
          }

          return res.status(401).json({
            message: 'Unauthorized User',
            error: true
          });
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

export default Business;
