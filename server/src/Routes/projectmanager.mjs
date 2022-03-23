import express from 'express';
export const projectmanagerRouter  = express.Router();
import {   } from  '../Controllers/boss.mjs';
import { AuthenticateToken } from '../Controllers/login.mjs';

projectmanagerRouter.post('/projectmanager/editproject', editProjects);