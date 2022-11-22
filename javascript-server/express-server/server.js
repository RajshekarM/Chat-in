import express  from 'express';


const PORT = 8080;
const server = new express();

server.use(express.json());
server.get('/',(req,res)=>{
    res.status(200).send({name:'chatapp',place:'nagaram'});
});

server.get('/asteriods',(req,res)=>{
        const paramters = req.query;
        console.log(paramters);
        console.log(paramters.id);
        res.send(paramters.id);
});

server.get('/asteriods/{id}',(req,res)=>{
    
    res.send('working with id');
});




server.listen(PORT,console.log(`Listening to Port:${PORT}`)); 
        //async function listen(PORT,callback)

console.log('hello'); 
