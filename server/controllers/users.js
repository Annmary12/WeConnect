import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from '../models/index';
// import User from '../models/user';

const userModel = models.User;
dotenv.config();
const secret = process.env.secretKey;

/**
   * @description Status Code Used
   * 201 - Created
   * 200 - Ok
   * 204 - No Content
   * 404 - Not Found
   * 400 - bad request
   * /

/**
 * @class User
 * @description - creates User components for signup and login user
 */
class User {
  /**
    * @description Signup a new user
    * @returns {Object} signup
    * @param {*} req
   * @param {*} res
   */
  static signup(req, res) {
    const {
      firstname, lastname, email, password, image
    } = req.body;

    const newUser = new userModel({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
      image
    });

    return newUser.save()
      .then((user) => {
        if (user) {
          const payload = {
            id: user.id
          };
          const token = jwt.sign({ payload }, secret);
          return res.status(201).json({
            name: newUser.firstname,
            email: newUser.email,
            message: `Hello ${user.firstname}, Welcome to we-connect`,
            token,
            success: true
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: err
        });
      });
  }

  /**
    * @description Logs in an existing user
    * @returns {Object} signin
    * @param {*} req
   * @param {*} res
   */

  static login(req, res) {
    userModel.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            message: 'Incorrect Email Address'
          });
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            id: user.id
          };
          const token = jwt.sign({ payload }, secret, {
            expiresIn: '4h'
          });
          return res.status(200).json({
            name: `${user.firstname} ${user.lastname}`,
            message: `Hello ${user.firstname}, Welcome to we-connect`,
            token
          });
        }
        return res.status(401).json({
          message: 'Incorrect Password'
        });
      })
      .catch(err => res.status(500).json({ err }));
  }

  /**
    * @description Logs in an existing user
    * @returns {Object} signin
    * @param {*} req
   * @param {*} res
   */ 
  static getUser(req, res){
    return userModel.findById(req.params.userId)
    .then((user)=> {
      if(!user){
        return res.status(400).json({
          message: 'User Not Found'
        })
      }
     
      const getUser ={
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email
      }
      return res.status(200).json({
        getUser
        
      })
    })
  }
}

export default User;

