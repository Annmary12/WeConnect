import models from '../models/index';

const businessModel = models.Business;


module.exports = {
  filter(req, res, next) {
    const { category, location, name } = req.query;
    if (location) {
      return businessModel.findAll({
        where: {
          location: {
            $iLike: `%${location}%`,
          },
        },
        order: [['createdAt', 'DESC']]
      })
        .then((businesses) => {
          if (businesses.length < 1) {
            return res.status(404).json({
              message: 'Business Not Found',
              error: true
            });
          }
          return res.status(200).json({
            businesses,
            message: 'List of business(es)',
            error: false
          });
        })
        .catch(error =>
          res.status(400).json({
            error
          }));
    }

    if (category) {
      return businessModel.findAll({
        where: {
          category: {
            $iLike: `%${category}%`,
          }
        },
        order: [['createdAt', 'DESC']]
      })
        .then((businesses) => {
          if (businesses.length < 1) {
            return res.status(404).json({
              message: 'Business Not Found',
              error: true
            });
          }
          return res.status(200).json({
            businesses,
            message: 'List of business(es)',
            error: false
          });
        })
        .catch(error => res.status(400).json({
          error
        }));
    }
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
          if (businesses.length < 1) {
            return res.status(404).json({
              message: 'Business Not Found',
              error: true
            });
          }
          return res.status(200).json({
            businesses,
            message: 'List of business(es)',
            error: false
          });
        })
        .catch(error => res.status(400).json({
          error
        }));
    }
    next();
  }


};
