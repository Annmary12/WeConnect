import express from 'express';
import userController from '../controllers/users';
import validator from '../middleware/validation';

const router = express.Router();


router.post('signup', validator.emailExist, validator.signupValidator, userController.signup);
router.post('login', userController.login);

export default router;
