import express from 'express';
import token from '../middleware/auth';
import { filter } from '../middleware/filter';
import businessController from '../controllers/business';
import validator from '../middleware/validation';

const businessRouter = express.Router();
const {
  getBusinesses, getBusiness, create, deleteBusiness, update
} = businessController;
const { verifyTok, verify } = token;
const { businessValidator } = validator;

businessRouter.route('/').post(verifyTok, verify, businessValidator, create);
businessRouter.route('').get(filter, getBusinesses);
businessRouter.route('/:businessId').get(getBusiness);
businessRouter.route('/:businessId').put(verifyTok, verify, update);
businessRouter.route('/:businessId').delete(verifyTok, verify, deleteBusiness);

export default businessRouter;

