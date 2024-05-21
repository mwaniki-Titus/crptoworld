import { Router } from 'express';

import express from 'express';
import { createGrantController, getAllGrantsController } from '../controllers/grantsControllers.js';

const grantRouter = Router();


grantRouter.post('/create/grant', createGrantController);
grantRouter.get('/all/grants', getAllGrantsController);

export default grantRouter;