import express from 'express';
export const router  = express.Router();
import { getActiveProjects, newTea, deleteAllTea, getOneTea, newComment, deleteOneTea } from  '../Controllers/user.mjs';

router.get('/user', getActiveProjects);

router.post('/tea', newTea);
router.delete('/tea', deleteAllTea);

router.get('/tea/:name', getOneTea);
router.post('/tea/:name', newComment);
router.delete('/tea/:name', deleteOneTea);

// export  router;

