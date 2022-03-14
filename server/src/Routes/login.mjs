import express from 'express';
export const loginRouter  = express.Router();
import { redirectToOauth } from '../Controllers/login.mjs';

loginRouter.get('/login', redirectToOauth);
