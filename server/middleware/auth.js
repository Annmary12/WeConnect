import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const secret = process.env.secretKey;
/**
 * @class - for authorization
 */
class Authorization {
  /**
   * @description - Sets the header
   * @param {*} req - api request
   * @param {*} res - route response
   * @param {*} next - next function
   * @returns {object} - returns message
   */
  static setHeader(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers.authorization;
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
      req.token = bearerHeader;

      next();
    } else {
      // Forbidden
      res.status(403).json({
        message: 'Add token to header',
        error: true
      });
    }
  }

  /**
   * @description - verifies the token
   * @param {*} req - api request
   * @param {*} res - route response
   * @param {*} next - next function
   * @returns {object} - returns message
   */
  static verifyToken(req, res, next) {
    jwt.verify(req.token, secret, (err, authData) => {
      if (err) {
        // Wrong token
        res.status(403).json({
          message: 'Please, Kindly SignIn Again'
        });
      }
      req.user = authData;
    });
    next();
  }
}

export default Authorization;

