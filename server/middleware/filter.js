import models from '../models/index';

const businessModel = models.Business;


module.exports = {
  // filter business by name, location and category
  filter(req, res, next) {
    const { category, location, name } = req.query;
    // filter by location
    if (location) {
      // find business(es)
      return businessModel.findAll({
        where: {
          location: {
            $iLike: `%${location}%`,
          },
        },
        order: [['createdAt', 'DESC']]
      })
        .then((businesses) => {
          // business not found
          if (businesses.length < 1) {
            return res.status(404).json({
              message: 'Business Not Found',
              error: true
            });
          }
          // business found
          return res.status(200).json({
            allBusinesses: businesses,
            message: 'List of business(es)',
            error: false
          });
        })
        // catches error
        .catch(error =>
          res.status(400).json({
            error
          }));
    }
    // filter by category
    if (category) {
      // find business(es)
      return businessModel.findAll({
        where: {
          category: {
            $iLike: `%${category}%`,
          }
        },
        order: [['createdAt', 'DESC']]
      })
        .then((businesses) => {
          // business not found
          if (businesses.length < 1) {
            return res.status(404).json({
              message: 'Business Not Found',
              error: true
            });
          }
          // business found
          return res.status(200).json({
            allBusinesses: businesses,
            message: 'List of business(es)',
            error: false
          });
        })
        // catches error
        .catch(error => res.status(400).json({
          error
        }));
    }
    // filter by name
    if (name) {
      return businessModel.findAll({
        where: {
          name: {
            $iLike: `%${name}%`,
          }
        },
        order: [['createdAt', 'DESC']]
      })
        .then((businesses) => {
          // business not found
          if (businesses.length < 1) {
            return res.status(404).json({
              message: 'Business Not Found',
              error: true
            });
          }
          // business found
          return res.status(200).json({
            allBusinesses: businesses,
            message: 'List of business(es)',
            error: false
          });
        })
        // catches error
        .catch(error => res.status(400).json({
          error
        }));
    }
    next();
  }


};
