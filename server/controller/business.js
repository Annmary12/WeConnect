// const businesses = require('../model/business');
import businesses from '../model/business';

// const uuid = require('node-uuid');

class Business {
/**
   * @returns {Object} businesses
   * @param {*} req
   * @param {*} res
   */
  static getBusiness(req, res) {
    res.json({ businesses });
  }

  static create(req, res) {
    const business = req.body;
    if (!business.name) {
      return res.status(400).send({
        message: 'Required Field',
        error: true
      });
    }
    businesses.push({
      id: businesses.length + 1,
      name: business.name,
      description: business.description,
      location: business.location,
      category: business.category
    });
    return res.json({
      businesses,
      message: 'Successfully Created a business',
      error: false
    });
  }

  static update(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        businesses[i].name = req.body.name;
        businesses[i].description = req.body.description;
        businesses[i].location = req.body.location;
        businesses[i].category = req.body.category;

        return res.json({
          businesses,
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

  static delete(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        businesses.splice(i, 1);

        res.json({
          businesses,
          message: 'Business Succefully Deleted',
          error: false
        });
      }
    }

    return res.status(404).json({
      message: 'Business not found',
      error: true
    });
  }

  // static searchByLocation(req, res) {
  //   const location = req.body.location;
  // }
}

export default Business;
