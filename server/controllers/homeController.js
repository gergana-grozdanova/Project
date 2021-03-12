import express from 'express';
const router=express.Router();

import {getAllPosts} from '../services/postsService.js'

router.get('/',(req,res)=>{
    try {
        res.status(200).json(getAllPosts())
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

export default router;