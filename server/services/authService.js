const User=require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SALT_ROUNDS, SECRET } = require('../config/config');

async function register({username,password}) {
    let salt =await bcrypt.genSalt(SALT_ROUNDS);
    let hash=await bcrypt.hash(password,salt);

    const user=new User({username,password:hash})

    return user.save();
}

async function login(username,password) {
    console.log(password);
    let user= await User.findOne({username});
    if(!user) throw {message:'User not found'}
    console.log(user.password);
    let isMatch=await bcrypt.compare(password, user.password)
    if(!isMatch) throw {message:'Incorect password'}

    let token=jwt.sign({_id:user._id,roles:['admin']},SECRET)

    return token;
}

module.exports={
    register,
    login,
}