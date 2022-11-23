import express from 'express';


const serviceRoute = express.Router();

//adding callback to service path
//callbacks will be added to stack/map({key:path,value:callback} for faster access)
serviceRoute.get('/',(req,res)=>{res.send('Choose your service')});

    export default serviceRoute;
