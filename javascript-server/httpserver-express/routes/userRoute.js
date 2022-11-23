import express from 'express';


const userRoute = express.Router();


userRoute.get('/',(req,res)=>res.send('Welcome to User Routing'));

userRoute.get('/login',(req,res)=>res.send('You are Logged in'));

export default userRoute;