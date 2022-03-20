import express from 'express';
export const userRouter  = express.Router();
import {  returnDatabase, getActiveProjects } from  '../Controllers/user.mjs';
import { AuthenticateToken } from '../Controllers/login.mjs';

userRouter.get('/data', returnDatabase);
userRouter.post('/activeProjects', AuthenticateToken, getActiveProjects);

// userRouter.post('/tea', newTea);
// userRouter.delete('/tea', deleteAllTea);

// userRouter.get('/tea/:name', getOneTea);
// userRouter.post('/tea/:name', newComment);
// userRouter.delete('/tea/:name', deleteOneTea);

// export  userRouter;

