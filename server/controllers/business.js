import dotenv from 'dotenv';
import models from '../models/index';
// business model
const businessModel = models.Business;
// vote model
const voteModel = models.Vote;
dotenv.config();

/**
   * @description Status Code Used
   * 201 - Created
   * 200 - Ok
   * 404 - Not Found
   * 400 - bad request
   * 500 - Internal Server Error
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
    //to count business already existing in database
    businessModel
      .findAndCountAll()
      .then((businesses) => {
        // business does not exist
      if(businesses.count == 0){
        return res.status(404).json({
            message: 'Business Not Found'
          });
      }
      const pageQuery = req.query.page || 1;
      let offset = 0;
      const limit = 6,
      currentPage = parseInt(pageQuery, 10),
      numberOfBusinesses = businesses.count,
      totalPages = Math.ceil(numberOfBusinesses / limit);
      offset = limit * (currentPage - 1);
      // find all businesses
      return businessModel.findAll({
        limit,
        offset,
        order: [ ["createdAt", "DESC"] ]
      })
      .then((allBusinesses) => {
        if (allBusinesses.length > 0) {
          const payload = {
            numberOfBusinesses,
            limit,
            totalPages,
            currentPage,
            allBusinesses
          }
          // successfully found businesses
          return res.status(200).json(Object.assign({
            message: 'List of all businesses'
          }, payload));
        }
        // business not found
        return res.status(404).json({
          message: 'Business Not Found'
        });
    })
    // catches error
    .catch(error => res.status(400).json({
      error
    }));

  });
     
  }

  /**
   * @description Get a particular business
   * @returns {Object} getbusiness
   * @param {*} req - api request
   * @param {*} res - api response
   */
  static getBusiness(req, res) {
    const { businessId } = req.params;
    // find one business
    return businessModel.find({ where: { id: businessId},
    include: [{
      model: voteModel,
      as: 'getvote',
      attributes: ['businessId', 'userId']
    }],
  })
      .then((businesses) => {
        if (businesses) {
          const numberOfLikes = businesses.getvote.length;
          const { getvote, ...formattedBusiness } = businesses.dataValues;
          // returns business found
          return res.status(200).json({
            businesses: { ...formattedBusiness, numberOfLikes },
            error: false
          });
        }
        // business not found
        return res.status(404).json({
          message: 'Business Not Found',
          error: true
        });
      })
      // catches error
      .catch(error => {
        return res.status(500).json({ error })
      });
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
    // gets authenticated user data
    const authData = req.user;
    let newBusiness = {
      userId: authData.payload.id, // get the id of the user from the authData token
      phoneNumber,
      name,
      description,
      address,
      image,
      location,
      category
    };
    newBusiness = website ? { ...newBusiness, website } : newBusiness;
    const getbusiness = new businessModel(newBusiness);

  businessModel.findOne({ where: { name}})
  .then((businessFound) => {
    // checks whether the business name already exist
    if(businessFound){
      return res.status(409).json({
        message: 'Business name already existsss'
      });
    }
    // creates the business
    return getbusiness.save()
      .then(business => res.status(201).json({
        business,
        message: 'Successfully Created',
        error: false
      }))
      // catches error
      .catch((error) => {
          const errorMessage = error.errors.map(value => value.message);
          return res.status(400).send(errorMessage);
      });
  })
    
  }

  /**
   * @description Updates a particular business
   * @returns {Object} updatebusiness
   * @param {*} req - api response
   * @param {*} res - route response
   */
  static updateBusiness(req, res) {
     // gets authenticated user data
    const authData = req.user;
    // find a business by id
    businessModel.findById(req.params.businessId)
      .then((business) => {
        // checks if business exist
        if (business) {
          // checks whether the business belongs to authenticated user
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
            // successfully update business
              .then((newBusiness) =>
                res.status(200).json({
                newBusiness,
                message: 'Sucessfully Updated',
                error: false,
              }))
              // catches error
              .catch((error) => {
                const errorMessage = error.errors.map(value => value.message);
                return res.status(400).send(errorMessage);
            });
          }
          // unauthorizes user
          return res.status(401).json({
            message: 'Unauthorized User',
            error: true
          });
        }
        // business not found
        return res.status(404).json({
          message: 'Business Not Found',
          error: true
        });
      })
      // catches error
      .catch(err => res.status(500).json({
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
    // find business by id
    return businessModel.findById(req.params.businessId)
      .then((business) => {
        // business found
        if (business) {
          // checks whether the business belongs to authenticated user
          if (business.userId === authData.payload.id) {
            // deletes the business
            return business.destroy()
              .then(() => res.status(200).json({
                message: 'Sucessfully Deleted',
                error: false,
              }))
              // catches error
              .catch(err => res.status(400).json({
                err
              }));
          }
          // unauthorize user to delete a business
          return res.status(400).json({
            message: 'You can not delete this business',
            error: true
          });
        }
        // business not found
        return res.status(404).json({
          message: 'Business Not Found',
          error: true
        });
      })
      // catches error
      .catch(err => res.status(500).json({
        error: err
      }));
  }
}

export default Business;
