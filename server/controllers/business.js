import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import models from '../models/index';

const businessModel = models.Business;
dotenv.config();
const secret = process.env.secretKey;
// const uuid = require('node-uuid');


class Business {
/**
   * @returns {Object} getbusinesses
   * @param {*} req
   * @param {*} res
   */
  static getBusiness(req, res) {
    // const { category, location } = req.query;
    // const loc = [];
    // const cat = [];

    // if (location) {
    //   for (let i = 0; i < businesses.length; i += 1) {
    //     if (businesses[i].location.toLowerCase() === location.toLowerCase()) {
    //       loc.push(businesses[i]);
    //     }
    //   }
    //   if (loc.length > 0) {
    //     return res.status(200).json({
    //       loc,
    //       message: `List of business(es) in ${location}`,
    //       error: false
    //     });
    //   }

    //   return res.status(400).json({
    //     message: `No such business under this(${location}) location`,
    //     error: true
    //   });
    // }

    // if (category) {
    //   for (let i = 0; i < businesses.length; i += 1) {
    //     if (businesses[i].category.toLowerCase() === category.toLowerCase()) {
    //       cat.push(businesses[i]);
    //     }
    //   }

    //   if (cat.length > 0) {
    //     return res.status(200).json({
    //       cat,
    //       message: `List of business(es) in ${category}`,
    //       error: false
    //     });
    //   }

    //   return res.status(400).json({
    //     message: `No sure business under this(${category}) category`,
    //     error: true
    //   });
    // }

    // return all the business
    return businessModel.find()
      .then(businesses => req.status(200).json({
        businesses,
        message: 'List of all bussinesses'
      }))
      .catch(err => res.status(400).json({
        message: 'message errors',
        error: err

      }));
  }


  /**
   * @returns {Object} createBusiness
   * @param {*} req
   * @param {*} res
   */
  static create(req, res) {
    jwt.verify(req.token, secret, (err, authData) => {
      if (err) {
        // Wrong token
        res.status(403).json({
          message: 'Token mismatch'
        });
      } else {
        const business = new businessModel({
          userId: authData.user.id, // get the id of the user from the authData token
          name: req.body.name,
          description: req.body.description,
          phone_number: req.body.phone_number,
          address: req.body.address,
          image: req.body.image,
          location: req.body.location,
          category: req.body.category,
          website: req.body.website
        });


        business.save()
          .then(busi => res.status(201).json({
            busi,
            authData,
            message: 'Successfully Created',
            error: false
          }))
          .catch(err => res.status(400).json({
            error: err
          }));
      }
    });
  }

  /**
   * @returns {Object} updatebusiness
   * @param {*} req
   * @param {*} res
   */
  static update(req, res) {
    jwt.verify(req.token, secret, (err, authData) => {
      if (err) {
        // Wrong token
        res.status(403).json({
          message: 'Token mismatch'
        });
      } else {
        businessModel.findById(req.params.businessId)
          .then((business) => {
            if (business) {
              if (business.userId === authData.user.id) {
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

              return res.status(409).json({
                message: 'Unauthorized User',
                error: true
              });
            }

            return res.status(400).json({
              message: 'Business Not Found',
              error: true
            });
          })
          .catch(err => res.status(400).json({
            error: err
          }));
      }
    });
  }

  /**
   * @returns {Object} deleteBusiness
   * @param {*} req
   * @param {*} res
   */

  static delete(req, res) {
    jwt.verify(req.token, secret, (err, authData) => {
      if (err) {
        // Wrong token
        res.status(403).json({
          message: 'Token mismatch'
        });
      } else {
        businessModel.findById(req.params.businessId)
          .then((business) => {
            if (business) {
              if (business.userId === authData.user.id) {
                return business.destroy()
                  .then(() => res.status(200).json({
                    message: 'Sucessfully Deleted',
                    error: false,
                  }))
                  .catch(err => res.status(400).json({
                    error: err
                  }));
              }

              return res.status(409).json({
                message: 'Unauthorized User',
                error: true
              });
            }

            return res.status(400).json({
              message: 'Business Not Found',
              error: true
            });
          })
          .catch(err => res.status(400).json({
            error: err
          }));
      }
    });
  }

  // static searchByLocation(req, res) {
  //   const location = req.body.location;
  // }
}

export default Business;