import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
//import cookieParser from 'cookie-parser';

function setupExpress(app) {
    app.use(bodyParser.json({limit:"30mb",extended:true}));
    app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
    app.use(cors());


    app.use(express.urlencoded({
        extended: true
    }));

 //   app.use(cookieParser());

}

export default setupExpress;