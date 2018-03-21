// const businesses = require('../model/business');
import businesses from '../model/business';

// const uuid = require('node-uuid');

class Business {
/**
   * @returns {Object} getbusinesses
   * @param {*} req
   * @param {*} res
   */
  static getBusinesses(req, res) {
    return res.status(200).json({
      businesses,
      message: 'List of all bussinesses',
      error: false
    });
  }

  /**
   * @returns {Object} getBusiness
   * @param {*} req
   * @param {*} res
   */

  static getBusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        const business = businesses[i];

        return res.status(200).json({
          business,
          error: false
        });
      }
    }

    return res.status(200).json({
      message: 'Business Not Found',
      error: false
    });
  }

  /**
   * @returns {Object} createBusiness
   * @param {*} req
   * @param {*} res
   */
  static create(req, res) {
    const business = req.body;

    const newBusiness = {
      id: businesses.length + 1,
      name: business.name,
      description: business.description,
      location: business.location,
      category: business.category
    };

    businesses.push(newBusiness);
    return res.status(200).json({
      newBusiness,
      message: 'Successfully Created a business',
      error: false
    });
  }

  /**
   * @returns {Object} updatebusiness
   * @param {*} req
   * @param {*} res
   */
  static update(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        businesses[i].name = req.body.name || businesses[i].name;
        businesses[i].description = req.body.description || businesses[i].description;
        businesses[i].location = req.body.location || businesses[i].location;
        businesses[i].category = req.body.category || businesses[i].category;

        const updateBusiness = businesses[i];
        return res.status(200).json({
          updateBusiness,
          message: 'Business Successfully Updated',
          error: false
        });
      }
    }

    return res.status(404).json({
      message: 'Business not found',
      error: true
    });
  }

  /**
   * @returns {Object} deleteBusiness
   * @param {*} req
   * @param {*} res
   */

  static delete(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      // search for the business
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        businesses.splice(i, 1);

        return res.status(200).json({
          message: 'Business Succefully Deleted',
          error: false
        });
      }
    }
    // if the business does not exist
    return res.status(404).json({
      message: 'Business not found',
      error: true
    });
  }
}

export default Business;
