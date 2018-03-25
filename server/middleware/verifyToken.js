import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

// import models from '../models/index';

// const businessModel = models.Business;
dotenv.config();
const secret = process.env.secretKey;

class Authorization {
  static verifyTok(req, res, next) {
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

  static verify(req, res, next) {
    jwt.verify(req.token, secret, (err, authData) => {
      if (err) {
        // Wrong token
        res.status(403).json({
          message: 'Token mismatch'
        });
      }
      return authData;
    });
    next();
  }
}

export default Authorization;

