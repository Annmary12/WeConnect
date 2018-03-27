import express from 'express';
import token from '../middleware/auth';
import { filter } from '../middleware/filter';
import businessController from '../controllers/business';
import validator from '../middleware/validation';

const businessRouter = express.Router();
const {
  getBusinesses, getBusiness, create, deleteBusiness, update
} = businessController;
const { setHeader, verify } = token;
const { businessValidator } = validator;

businessRouter.route('/').post(setHeader, verify, businessValidator, create);
businessRouter.route('').get(filter, getBusinesses);
businessRouter.route('/:businessId').get(getBusiness);
businessRouter.route('/:businessId').put(setHeader, verify, update);
businessRouter.route('/:businessId').delete(setHeader, verify, deleteBusiness);

export default businessRouter;

