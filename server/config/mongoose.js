import mongoose from 'mongoose';
import config from '../config/config.js';

export default (app) => {

mongoose.connect(config.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true})
         .then(()=>app.listen(config.PORT,()=>console.log(`Server running on port ${config.PORT}`)))
         .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false)

    const db = mongoose.connection;

}