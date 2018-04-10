import express from 'express';
import reviewController from '../controllers/review';
import token from '../middleware/auth';
import validator from '../middleware/validation';

const { createReview, fetchReviews } = reviewController;
const { setHeader, verifyToken } = token;
const reviewRouter = express.Router();
const { idChecker } = validator;


reviewRouter.route('/:businessId/reviews').post(idChecker, setHeader, verifyToken, createReview);
reviewRouter.route('/:businessId/reviews').get(idChecker, fetchReviews);

export default reviewRouter;
