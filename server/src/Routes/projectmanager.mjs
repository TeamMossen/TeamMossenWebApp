import express from 'express';
export const projectmanagerRouter  = express.Router();
import { EditProject } from  '../Controllers/projectManager.mjs';
import { AuthenticateToken } from '../Controllers/login.mjs';

projectmanagerRouter.post('/projectmanager/editproject', EditProject);