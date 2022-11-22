import http  from 'http';
import app from './app.js';


//Starting server, then server instantiating app FUNCTION OBJECT. 
const server = http.createServer(app);

const PORT = 8080;

server.listen(PORT,console.log(`Http Server Listening to port:${PORT}`));


