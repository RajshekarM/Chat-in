import http  from 'http';
import app from './app.js';


//Create Server and pass Express Application to http server. 
//Any requests comes to PORT 8080,it passes request to this application internally by calling the intended method.
const server = http.createServer(app);

const PORT = 8080;

server.listen(PORT,console.log(`Http Server Listening to port:${PORT}`));


