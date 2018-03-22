import businesses from '../model/business';

module.exports = {
  filter(req, res, next) {
    const { category, location } = req.query;

    // To search for business based on on location
    if (location) {
      const getBusiness = businesses.filter(business =>
        business.location.toLowerCase() === location.toLowerCase());
      if (getBusiness.length > 0) {
        return res.status(200).json({
          getBusiness,
          message: `List of business(es) in ${location}`,
          error: false
        });
      }

      return res.status(400).json({
        message: `No such business under this(${location}) location`,
        error: true
      });
    }

    // To search for business based on category
    if (category) {
      const getBusiness = businesses.filter(business =>
        business.category.toLowerCase() === category.toLowerCase());
      if (getBusiness.length > 0) {
        return res.status(200).json({
          getBusiness,
          message: `List of business(es) in ${category}`,
          error: false
        });
      }

      return res.status(400).json({
        message: `No sure business under this(${category}) category`,
        error: true
      });
    }
    next();
  }
};
