import express from 'express';
import { Router } from 'express';
import {
  createReferralController,
  updateReferralController,
  getReferralByCodeController,
  getAllReferralsController,
  getReferralByUserController
} from '../controllers/referalController.js';

const referralRouter= Router();

referralRouter.post('/create/referrals', createReferralController);
referralRouter.put('/update/referrals', updateReferralController);
referralRouter.get('/referrals/:referralCode', getReferralByCodeController);
referralRouter.get('/all/referrals', getAllReferralsController);
referralRouter.get('/referrals/user/:userID', getReferralByUserController);


export default referralRouter;
