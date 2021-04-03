import mongoose from 'mongoose';

const postSchema=mongoose.Schema({
       id: mongoose.Types.ObjectId,
       destination:{
           type:String,
           required:true,
       },
       description: {
        type: String,
        minlength:4,
        required: true,
       },
       selectedFile:{
           type:String
       },
       likes:{
           type:Number,
           default:0
       },
       dateCreated: {
           type: Date, 
           default: Date.now
        },
       creator: {
        type: String,
        ref: 'User'
    }
});

export default mongoose.model('Post',postSchema);