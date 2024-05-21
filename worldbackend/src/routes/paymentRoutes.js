import express from 'express';
import { createPaymentController, getAllPaymentsController } from '../controllers/paymentController.js';

const paymentRouter = express.Router();

paymentRouter.post('/create/payment', createPaymentController);
paymentRouter.get('/all/payments', getAllPaymentsController);

export default paymentRouter;
