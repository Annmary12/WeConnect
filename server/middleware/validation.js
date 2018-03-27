import models from '../models/index';

const userModel = models.User;

class Validation {
  static emailExist(req, res, next) {
    return userModel.findOne({ where: { email: req.body.email } })
      .then((userExist) => {
        if (userExist) {
          return res.status(409).json({
            message: 'Email is already existing'
          });
        }
        next();
      })
      .catch(error => res.status(400).json({
        error
      }));
  }

  static signupValidator(req, res, next) {
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
      image: {
        notEmpty: true,
        errorMessage: 'Image is required'
      },
    });

    const errors = req.validationErrors();
    if (errors) {
      const allErrors = [];
      errors.forEach((error) => {
        allErrors.push({
          error: error.msg
        });
      });
      return res.status(409)
        .json(allErrors);
    }

    next();
  }

  static businessValidator(req, res, next) {
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
      image: {
        notEmpty: true,
        errorMessage: 'Image Required'
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

    const errors = req.validationErrors();
    if (errors) {
      const allErrors = [];
      errors.forEach((error) => {
        allErrors.push({
          error: error.msg
        });
      });

      return res.status(409)
        .json(allErrors);
    }
    next();
  }
}

export default Validation;