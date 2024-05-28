import { Router } from 'express';

import express from 'express';
import { createGrantController, getAllGrantsController,  getGrantByIdController  } from '../controllers/grantsControllers.js';

const grantRouter = Router();


grantRouter.post('/create/grant', createGrantController);
grantRouter.get('/all/grants', getAllGrantsController);
grantRouter.get('/grant/:grantId', getGrantByIdController);

export default grantRouter;
