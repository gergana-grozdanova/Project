import User from '../models/User.js';
import bcrypt from 'bcrypt';
//import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export async function register({username,password}) {
    
    let salt =await bcrypt.genSalt(config.SALT_ROUNDS);
    let hash=await bcrypt.hash(password,salt);

    const user=new User({username,password:hash})
    user.save();

    return;
}
 export async function getByUsername(username) {
    const user= await User.findOne({username});
    return user;
}
export async function login({username,password}) {
    console.log(password);
    let user= await User.findOne({username});
    if(!user) throw {message:'User not found'}
    console.log(user.password);
    let isMatch=await bcrypt.compare(password, user.password)
    if(!isMatch) throw {message:'Incorect password'};

    return;
}

