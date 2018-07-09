import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from '../models/index';
// import User from '../models/user';

const userModel = models.User;
const businessModel = models.Business;
const voteModel = models.Vote;
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
    // gets a user input data
    const {
      firstname, lastname, email, password,
    } = req.body;

    const newUser = new userModel({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)), // hashes user password
      image : 'https://www.facsa.uliege.be/upload/docs/image/jpeg/2016-12/user.jpg'
    });
    // creates a new user
    return newUser.save()
      .then((user) => {
        // successfully saved
        if (user) {
          const payload = {
            id: user.id
          };
          // assign token to the user
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
      // catches error
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
    // find a user with email
    userModel.findOne({ where: { email: req.body.email } })
      .then((user) => {
        // user not found
        if (!user) {
          return res.status(401).json({
            message: 'Incorrect Email Address'
          });
        }
        // bcrypt user password
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            id: user.id
          };
          // asign token to the user
          const token = jwt.sign({ payload }, secret, {
            expiresIn: '4h'
          });
          // success
          return res.status(200).json({
            name: `${user.firstname} ${user.lastname}`,
            message: `Hello ${user.firstname}, Welcome to we-connect`,
            token
          });
        }
        // incorrect password
        return res.status(401).json({
          message: 'Incorrect Password'
        });
      })
      // catches error
      .catch(err => res.status(500).json({ err }));
  }

  /**
    * @description Logs in an existing user
    * @returns {Object} signin
    * @param {*} req
   * @param {*} res
   */ 
  static getUser(req, res){
    // find user by ID
    return userModel.findById(req.params.userId)
    .then((user)=> {
      // user not found
      if(!user){
        return res.status(400).json({
          message: 'User Not Found'
        })
      }
     
      const getUser ={
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        image: user.image
      }
      // user found
      return res.status(200).json({
        message: 'User Found',
        getUser
        
      })
    })
  }

  /**
    * @description Get user business(es)
    * @returns {Object} getUserBusinesses
    * @param {*} req
   * @param {*} res
   */ 
  static getUserBusinesses(req, res){
    // find and count business(es) the belongs to a user
    businessModel.findAndCountAll({where: {userId: req.params.userId}}).then((userBusinesses) => {
      // business not found
      if(userBusinesses.count == 0){
        return res.status(404).json({
          message: 'Business Not Found'
        });
      }

      const pageQuery = req.query.page || 1;
      let offset = 0;
      const limit = 6,
      currentPage = parseInt(pageQuery, 10),
      numberOfBusinesses = userBusinesses.count,
      totalPages = Math.ceil(numberOfBusinesses / limit);
      offset = limit * (currentPage - 1);
      // find all bisiness(es) for a user
      return businessModel.findAll({
        where: {userId: req.params.userId},
        limit,
        offset,
        order: [ ["createdAt", "DESC"] ]
      })
      .then((businesses)=> {
        // No business
        if(businesses.length == 0){
          return res.status(400).json({
            message: 'No Available Businesses'
          })
        }
       const payload = {
         numberOfBusinesses,
         limit,
         totalPages,
         currentPage,
         businesses
       }
       // Business found
      return res.status(200).json(Object.assign({
        message: 'Business Found'   
      }, payload));
    })
    // catches error
    .catch(error => res.status(400).json({
      error
    }));

    })
    
    
  }

  /**
    * @description Updates a user profile
    * @returns {Object} updateUser
    * @param {*} req
   * @param {*} res
   */
  static updateUser(req, res){
    // gets the users inputed data
    const { firstname, lastname, email, image } = req.body;
    const authData = req.user.payload.id;
    // find authenticated user
    userModel.findById(authData)
    .then((getUser) => { 
      // user not found     
      if(!getUser){
        res.status(404).json({
          message: 'User not found',
          error: true
        })
      }

      const user = {
        firstname: firstname || getUser.firstname,
        lastname: lastname || getUser.lastname,
        email: email || getUser.email,
        image: image || getUser.image
      }
      // to update a user
      return getUser.update(user)
      .then((updatedUser) => {
        if(updatedUser){
        res.status(200).json({
          message: 'Successfully Updated'
        })
        }
      })
      // catches error
      .catch((error) => {
        res.status(400).json({
          error
        })
      });
    })
    // catches error
    .catch((error) => {
      res.status(400).json({
        error
      })
    })
  }

  /**
    * @description user can like a business
    * @returns {Object} liked business
    * @param {*} req
   * @param {*} res
   */
  static likeBusiness(req, res){
   const { businessId, userId } = req.body;
    // find vote by user Id and business Id
    voteModel.find({ where :{  businessId: businessId, userId: userId }})
    .then((vote) => {
      // vote not found
      if(!vote){
        const newVote = new voteModel({
          businessId: businessId,
          userId: userId
        })
        // creates a new vote
        return newVote.save().then((savedVote) => {
          res.status(200).json({
            message: "business liked successfully",
            savedVote
          })
        })
        // catches error
        .catch((error) => {
          res.status(404).json({
            error
          })
        }) 
      }
      // deletes a vote
      return vote.destroy().then(() => {
        res.status(200).json({
          message: 'Business Unlike'
        })
      })
    
    })
  }


}

export default User;

