import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from '../models/index';
// import User from '../models/user';

const userModel = models.User;
dotenv.config();
const secret = process.env.secretKey;

/**
 * @class User
 */

class User {
  /**
    * @returns {Object} signup
    * @param {*} req
   * @param {*} res
   */
  static signup(req, res) {
    // to check whether the user is existing
    userModel.findOne({ where: { email: req.body.email } })
      .then((existUser) => {
        if (existUser) {
          res.status(409).json({
            message: 'User is already existing'
          });
        } else {
          const user = new userModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
            image: req.body.image
          });
          user.save()
            .then((newUser) => {
              if (newUser) {
                const token = jwt.sign({ newUser }, secret);
                return res.status(201).json({
                  success: true,
                  message: 'Signup Successfully',
                  token
                });
              }
            })
            .catch((err) => {
              res.status(500).json({
                error: err
              });
            });
        }
      })
      .catch(error => res.status(400).send(error));
  }

  /**
    * @returns {Object} signin
    * @param {*} req
   * @param {*} res
   */

  static signin(req, res) {
    userModel.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            message: 'Incorrect Email Address'
          });
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign({ user }, secret, {
            expiresIn: '6h'
          });
          return res.status(200).json({
            message: 'Auth Successful',
            token
          });
        }
        return res.status(401).json({
          message: 'Incorrect Password'
        });
      })
      .catch();
  }
}

export default User;

