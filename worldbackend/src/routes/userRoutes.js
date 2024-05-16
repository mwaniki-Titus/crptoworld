import { Router } from "express";
import express from 'express';
import {
  registerUserController,
  loginUserController,
  updateUserController,
  updatePasswordController,
  getSingleUserController,
  getAllUsersController,
} from '../controllers/userControllers.js';

const userRouter = Router();


userRouter.post('/users/register', registerUserController);
userRouter.post('/user/login', loginUserController);
userRouter.put('/:UserID/update', updateUserController);
userRouter.put('/:UserID/updatePassword', updatePasswordController);
userRouter.get('/:UserID', getSingleUserController);
userRouter.get('/users/all', getAllUsersController);

export default userRouter;
