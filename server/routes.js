import express from 'express';
const router=express.Router();
import authController from './controllers/authController.js';
import postController from './controllers/postController.js';


router.use('/auth',authController);
router.use('/post',postController);


export default router;