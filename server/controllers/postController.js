import express from 'express';
const router=express.Router();

import {createPost} from '../services/postsService.js'

router.get('/add',async (req,res)=>{
    try {
        await createPost(req.body);
         res.status(201);
    } catch (error) {
        res.status(409).json({message:error.message})
    }
})

export default router;