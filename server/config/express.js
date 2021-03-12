import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import auth from '../middlewares/auth.js';

function setupExpress(app) {
    app.use(bodyParser.json({limit:"30mb",extended:true}));
    app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
    app.use(cors());


    app.use(express.urlencoded({
        extended: true
    }));

    app.use(cookieParser());

    app.use(auth());
}

export default setupExpress;