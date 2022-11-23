import express from 'express';


const serviceRoute = express.Router();


serviceRoute.get('/',(req,res)=>{res.send('Choose your service')});

export default serviceRoute;


