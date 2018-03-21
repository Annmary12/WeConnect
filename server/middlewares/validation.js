import Users from '../model/user';

class Validation {
  static emailExist(req, res, next) {
    for (let i = 0; i < Users.length; i += 1) {
      if (Users[i].email === req.body.email) {
        return res.status(409).json({
          message: 'Email is already existing',
        });
      }
    }
    next();
  }

  //   static isEmail(req, res, next) {
  //     if (emailValidator.validate(req.body.email)) {
  //       next();
  //     } else {
  //       return res.status(400).json({
  //         message: 'Not an email !'
  //       });
  //     }
  //   }


  static signupValidator(req, res, next) {
    req.checkBody({
      name: {
        notEmpty: true,
        errorMessage: 'Your Name is required'
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
      }
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
      location: {
        notEmpty: true,
        errorMessage: 'Location Field Required'
      },
      category: {
        notEmpty: true,
        errorMessage: 'Category Field Required'
      }

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
