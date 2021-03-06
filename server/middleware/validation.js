import models from '../models/index';

const userModel = models.User;

/**
 * class for input validation
 */
class Validation {
  /**
   * @description - checks the id passed is an integer
   * @param {*} req - api request
   * @param {*} res - route response
   * @param {*} next - next function
   * @returns {object} - error message
   */
  static idChecker(req, res, next) {
    // gets id passed
    const { businessId } = req.params;
    const numbers = /^[0-9]+$/;
    // invalid id
    if (!businessId.match(numbers)) {
      return res.status(400).json({
        message: 'Invalid Id'
      });
    }
    next();
  }

  /**
   *
   * @param {*} req - api request
   * @param {*} res - route response
   * @param {*} next - next action
   * @returns{object} - error message
   */
  static emailExist(req, res, next) {
    // find a user
    return userModel.findOne({ where: { email: req.body.email } })
      .then((userExist) => {
        // user exist
        if (userExist) {
          return res.status(404).json({
            message: 'Email is already existing'
          });
        }
        next();
      })
      // catches error
      .catch(error => res.status(400).json({
        error
      }));
  }
  /**
  *
  * @param {*} req - api request
  * @param {*} res - route response
  * @param {*} next - next action
  * @returns{array} - error message
  */
  static loginValidator(req, res, next) {
    // checks login input field
    req.checkBody({
      email: {
        notEmpty: true,
        isEmail: {
          errorMessage: 'Provide a valid a Email Address'
        },
        errorMessage: 'Your Email Address is required'
      },

      password: {
        notEmpty: true,
        errorMessage: 'Your Password is required'
      },
    });
    // get errors
    const errors = req.validationErrors();
    if (errors) {
      const allErrors = [];
      errors.forEach((error) => {
        allErrors.push({
          message: error.msg
        });
      });
      return res.status(404)
        .json(allErrors[0]);
    }

    next();
  }
  /**
*
 * @param {*} req - api request
 * @param {*} res - route response
 * @param {*} next - next action
 * @returns {array} - error message
 */
  static signupValidator(req, res, next) {
    // checks the signup field
    req.checkBody({
      firstname: {
        notEmpty: true,
        errorMessage: 'Your First Name is required'
      },
      lastname: {
        notEmpty: true,
        errorMessage: 'Your Last Name is required'
      },
      email: {
        notEmpty: true,
        isEmail: {
          errorMessage: 'Provide a valid a Email Address'
        },
        errorMessage: 'Your Email Address is required'
      },
      password: {
        notEmpty: true,
        isLength: {
          options: [{ min: 8 }],
          errorMessage: 'Provide a valid password with minimum of 8 characters'
        },
        errorMessage: 'Your Password is required'
      },
      confirmPassword: {
        notEmpty: true,
        errorMessage: 'Confirm Password is required'

      }
    });
    // catches error
    const errors = req.validationErrors();
    if (errors) {
      const allErrors = [];
      errors.forEach((error) => {
        allErrors.push({
          message: error.msg
        });
      });
      return res.status(404)
        .json(allErrors[0]);
    }

    next();
  }

  /**
 *
 * @param {*} req - api request
 * @param {*} res - route response
 * @param {*} next - next function
 * @returns {array} - of error message
 */
  static businessValidator(req, res, next) {
    // checks the busines field
    req.checkBody({
      name: {
        notEmpty: true,
        errorMessage: 'Name Field is required'
      },
      description: {
        notEmpty: true,
        errorMessage: 'Add description of your business'
      },
      phoneNumber: {
        notEmpty: true,
        errorMessage: 'Phone Number Required'
      },
      address: {
        notEmpty: true,
        errorMessage: 'Address Required'
      },
      location: {
        notEmpty: true,
        errorMessage: 'Location Field Required'
      },
      category: {
        notEmpty: true,
        errorMessage: 'Category Field Required'
      },
    });
    // catches error
    const errors = req.validationErrors();
    if (errors) {
      const allErrors = [];
      errors.forEach((error) => {
        allErrors.push({
          message: error.msg
        });
      });

      return res.status(404)
        .json(allErrors[0]);
    }
    next();
  }
}

export default Validation;
