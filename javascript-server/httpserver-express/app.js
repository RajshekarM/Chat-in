import express from 'express';
import serviceRoute from './routes/serviceRoute.js';
import userRoute from './routes/userRoute.js';


const app = new express();

const router = new express.Router();
//For understanding: creating a new object for Router object 
//which is a member of express function object.



//using the Router object created in userRoute. Pass the Express's Router object to use function
app.use('/user',userRoute);
app.use('/service',serviceRoute);

export default app;
