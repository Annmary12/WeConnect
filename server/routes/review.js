import express from 'express';
import reviewController from '../controllers/review';

const { create, fetch } = reviewController;
const reviewRouter = express.Router();


reviewRouter.route('/:businessId/reviews').post(create);
reviewRouter.route('/:businessId/reviews').get(fetch);

export default reviewRouter;
