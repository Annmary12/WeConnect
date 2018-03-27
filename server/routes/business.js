import express from 'express';
import token from '../middleware/auth';
import { filter } from '../middleware/filter';
import businessController from '../controllers/business';
import validator from '../middleware/validation';

const businessRouter = express.Router();
const {
  getBusinesses, getBusiness, createBusiness, deleteBusiness, updateBusiness
} = businessController;
const { setHeader, verifyToken } = token;
const { businessValidator } = validator;

businessRouter.route('/').post(setHeader, verifyToken, businessValidator, createBusiness);
businessRouter.route('').get(filter, getBusinesses);
businessRouter.route('/:businessId').get(getBusiness);
businessRouter.route('/:businessId').put(setHeader, verifyToken, updateBusiness);
businessRouter.route('/:businessId').delete(setHeader, verifyToken, deleteBusiness);

export default businessRouter;

