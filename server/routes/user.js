import express from 'express';
import userController from '../controllers/users';
import validation from '../middleware/validation';
import token from '../middleware/auth';

const { signup, login, getUser, getUserBusinesses, updateUser, likeBusiness } = userController;
const { emailExist, signupValidator, loginValidator } = validation;
const { setHeader, verifyToken } = token;
const userRouter = express.Router();


userRouter.route('/signup').post(
  emailExist,
  signupValidator,
  signup
);
userRouter.route('/login').post(
  loginValidator,
  login
);
userRouter.route('/user/:userId').get(getUser);
userRouter.route('/user/:userId/business').get(getUserBusinesses);
userRouter.route('/user').put(setHeader, verifyToken, updateUser);
userRouter.route('/user/like').post(setHeader, verifyToken, likeBusiness);

export default userRouter;
