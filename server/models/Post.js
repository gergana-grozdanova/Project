import mongoose from 'mongoose';

const postSchema=mongoose.Schema({
       id: mongoose.Types.ObjectId,
       title:{
           type:String,
           required:true,
       },
       description: {
        type: String,
        minlength:4,
        required: true,
       },
       imageSelected:{
           type:String
       },
       likes:{
           type:Number,
           default:0
       },
       creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

export default mongoose.model('Post',postSchema);