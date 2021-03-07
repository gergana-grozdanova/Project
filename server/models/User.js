import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    id: mongoose.Types.ObjectId,
       username:{
           type:String,
           required:true,
       },
       password: {
        type: String,
        minlength:4,
        required: true,
    },
});

export default mongoose.model('User',userSchema);