import express from 'express';
import reviewController from '../controllers/review';
import token from '../middleware/auth';

const { createReview, fetchReviews } = reviewController;
const { setHeader, verifyToken } = token;
const reviewRouter = express.Router();


reviewRouter.route('/:businessId/reviews').post(setHeader, verifyToken, createReview);
reviewRouter.route('/:businessId/reviews').get(fetchReviews);

export default reviewRouter;
