import express from 'express';
const router=express.Router();
//import authController from './controllers/authController.js';
import postController from './controllers/postController.js';
import homeController from './controllers/homeController.js';

//router.use('/auth',authController);
router.use('/post',postController);
router.use('/home',homeController);

export default router;