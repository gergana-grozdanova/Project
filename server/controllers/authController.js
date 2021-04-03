import express from 'express';
const router=express.Router();

import {login,register,getByUsername} from'../services/authService.js';

//import config from '../config/config.js';


router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        await login({ username, password });

        res.json({username});
    } catch (error) {
        console.log(error);
       res.status(400).send({error})
    }
});



router.post('/register', async (req, res) => {
    const { username, password,rePassword } = req.body;
    if (password!==rePassword) {
        res.status(400).json({error:{message:'Password must be the same in both fields!'}})
    }
    else{
        try {
        let other=await getByUsername(username);
        console.log(other)
        if (other) {
            res.json({error:{message:"This username already exist, try with new one!"}})
        }else{
            await register({username,password});
             res.json(username);
        }
       
        } catch (error) {

        console.log(error)
        res.status(400).send(error)
    }
    }

    
});

export default router;
