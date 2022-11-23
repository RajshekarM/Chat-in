import express from 'express';
import bodyParser from 'body-parser'
import serviceRoute from './routes/serviceRoute.js';
import userRoute from './routes/userRoute.js';


const app = new express();
//https://stackoverflow.com/questions/11321635/nodejs-express-what-is-app-use#:~:text=app.use%20%28%29%20acts%20as%20a%20middleware%20in%20express,every%20time%20no%20matter%20what%20URL%27s%20been%20hit.
//app.use('path',callbacktobeinvoked)
//use():method defines path for which the callback function is invoked;
//all these callbacks are added to the callback Stack.
/*when the request comes handlers/callbacks in below stack is executed one by one
  
stack:[ { route: '', handle: [Function] },
   { route: '', handle: [Function: static] },
   { route: '', handle: [Function: bodyParser] },
   { route: '', handle: [Function: cookieParser] },
   { route: '', handle: [Function: cors] },
   { route: '', handle: [Function: session] },
   { route: '', handle: [Function: methodOverride] },
   { route: '/user', handle: [Function:userRoute] },
   { route: '/service', handle: [Function:serviceRoute] } ]*/


app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


//A route will match any path that follows its path immediately with a “/”.
app.use('',(req,res)=>res.send('Home page'));
app.use('/user',userRoute);
app.use('/service',serviceRoute);

export default app;