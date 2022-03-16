import express from 'express';
export const userRouter  = express.Router();
import {  returnDatabase, getActiveProjects } from  '../Controllers/user.mjs';

userRouter.get('/data', returnDatabase);
userRouter.get('/activeProjects', getActiveProjects);

// userRouter.post('/tea', newTea);
// userRouter.delete('/tea', deleteAllTea);

// userRouter.get('/tea/:name', getOneTea);
// userRouter.post('/tea/:name', newComment);
// userRouter.delete('/tea/:name', deleteOneTea);

// export  userRouter;

