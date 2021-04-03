import express from 'express';
const router=express.Router();

import {createPost,getAllPosts,getMyPosts,deletePost} from '../services/postsService.js'

router.get('/',async (req,res)=>{
    try {
        let posts=await getAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(409).json({message:error.message})
    }
})

router.get('/:username',async (req,res)=>{
    try {
        
        let posts=await getMyPosts(req.params.username);
        res.status(200).json(posts);
    } catch (error) {
        res.status(409).json({message:error.message})
    }
})

router.delete('/delete/:postId',async (req,res)=>{
    try {
        console.log(req.params.postId)
        await deletePost(req.params.postId)
        res.status(200).send('Deleted!')
    } catch (error) {
        res.status(409).json({message:error.message})
    }
})

router.post('/add',async (req,res)=>{
    try {
        await createPost(req.body);
         res.status(201).json('created');
    } catch (error) {
        res.status(409).json({message:error.message})
    }
})

export default router;