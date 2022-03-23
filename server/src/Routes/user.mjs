import express from 'express';
export const userRouter  = express.Router();
import {  returnDatabase, getProjects, postTimeReport } from  '../Controllers/user.mjs';
import { AuthenticateToken } from '../Controllers/login.mjs';

userRouter.get('/data', returnDatabase);
userRouter.get('/user/getProjects', AuthenticateToken, getProjects);
userRouter.post('/user/postTimeReport',postTimeReport);
// userRouter.post('/tea', newTea);
// userRouter.delete('/tea', deleteAllTea);

// userRouter.get('/tea/:name', getOneTea);
// userRouter.post('/tea/:name', newComment);
// userRouter.delete('/tea/:name', deleteOneTea);

// export  userRouter;

