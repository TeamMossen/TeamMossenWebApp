import express from 'express';
export const router  = express.Router();
import { getActiveProjects, newTea, deleteAllTea, getOneTea, newComment, deleteOneTea, returnDatabase } from  '../Controllers/user.mjs';


router.get('/data', returnDatabase);
router.get('/activeProjects', getActiveProjects);

router.post('/tea', newTea);
router.delete('/tea', deleteAllTea);

router.get('/tea/:name', getOneTea);
router.post('/tea/:name', newComment);
router.delete('/tea/:name', deleteOneTea);

// export  router;

