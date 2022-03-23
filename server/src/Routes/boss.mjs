import express from 'express';
export const bossRouter  = express.Router();
import {  getWorkedHours } from  '../Controllers/boss.mjs';
import { AuthenticateToken } from '../Controllers/login.mjs';

//bossRouter.get('/data', returnDatabase);
bossRouter.get('/boss/getWorkedHours', getWorkedHours);