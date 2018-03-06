// const businesses = require('../model/business');
import businesses from '../model/business';

const uuid = require('node-uuid');

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
      });
    }
    businesses.push({
      id: uuid.v4(),
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
}

export default Business;
