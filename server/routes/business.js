import express from 'express';
import token from '../middleware/verifyToken';
import { filter } from '../middleware/filter';
import businessController from '../controllers/business';
import validator from '../middleware/validation';

const businessRouter = express.Router();
const {
  getBusinesses, getBusiness, create, deleteBusiness, update
} = businessController;
const { verifyTok } = token;
const { businessValidator } = validator;

businessRouter.route('/').post(verifyTok, businessValidator, create);
businessRouter.route('').get(filter, getBusinesses);
businessRouter.route('/:businessId').get(getBusiness);
businessRouter.route('/:businessId').put(verifyTok, update);
businessRouter.route('/:businessId').delete(verifyTok, deleteBusiness);

export default businessRouter;

