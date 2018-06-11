import express from 'express';
import userController from '../controllers/users';
import validation from '../middleware/validation';

const { signup, login, getUser, getUserBusinesses } = userController;
const { emailExist, signupValidator, loginValidator } = validation;
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

export default userRouter;
