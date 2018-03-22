import businesses from '../model/business';

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
    businesses.forEach((business) => {
      if (business.id === parseInt(req.params.businessId, 10)) {
        return res.status(200).json({
          business,
          error: false
        });
      }
    });
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
    const {
      description, location, category, name
    } = req.body;

    businesses.forEach((business) => {
      if (business.id === parseInt(req.params.businessId, 10)) {
        business.name = name || business.name;
        business.description = description || business.description;
        business.location = location || business.location;
        business.category = category || business.category;

        return res.status(200).json({
          business,
          message: 'Business Successfully Updated',
          error: false
        });
      }
    });

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
    businesses.forEach((business) => {
      if (business.id === parseInt(req.params.businessId, 10)) {
        businesses.splice(business, 1);
        return res.status(200).json({
          message: 'Business Succefully Deleted',
          error: false
        });
      }
    });
    // if the business does not exist
    return res.status(404).json({
      message: 'Business not found',
      error: true
    });
  }
}

export default Business;
