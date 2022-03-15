import express from 'express';
export const loginRouter  = express.Router();
import { redirectToOauth, OauthCallback } from '../Controllers/login.mjs';

loginRouter.get('/login', redirectToOauth);
loginRouter.post('/login', OauthCallback);