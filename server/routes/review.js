import express from 'express';
import reviewController from '../controllers/review';

const { createReview, fetchReviews } = reviewController;
const reviewRouter = express.Router();


reviewRouter.route('/:businessId/reviews').post(createReview);
reviewRouter.route('/:businessId/reviews').get(fetchReviews);

export default reviewRouter;
