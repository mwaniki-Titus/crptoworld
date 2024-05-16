import express from 'express';
import { Router } from 'express';
import { createTransactionController, getAllTransactionsController } from '../controllers/transactionControllers.js';

const transactionRouter = Router();


transactionRouter.post('/create', createTransactionController);
transactionRouter.get('/all/transactions', getAllTransactionsController);

export default transactionRouter;
