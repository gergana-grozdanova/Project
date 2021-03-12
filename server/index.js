import express from 'express';
import routes from './routes.js';

const app=express();

import expressSetup from'./config/express.js';
expressSetup(app);
import dbSetup from'./config/mongoose.js';
dbSetup(app);


app.use(routes)



