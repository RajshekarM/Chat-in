import express from 'express';
import UserController from '../controllers/userController.js';


const userRoute = express.Router();
const userController = new UserController();


userRoute.get('/',(req,res)=>res.send('Welcome to User Routing'));
userRoute.get('/login',userController.login);
userRoute.get('/contacts',userController.contacts);

export default userRoute;