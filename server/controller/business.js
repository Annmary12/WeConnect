// const businesses = require('../model/business');
import businesses from '../model/business';

class Business {
/**
   * @returns {Object} businesses
   * @param {*} req
   * @param {*} res
   */
  static getBusiness(req, res) {
    res.json({ businesses });
  }
}

export default Business;
