
console.log(global.process.platform) //tell OS in your machine
const environment = global.process.env;

//Events : Event loop : Non blocking Operations runs on Main Thread and long asnchronous process is given to seperate thread. 

const {EventEmitter} = require('events')
const eventEmitter =  new EventEmitter();
eventEmitter.on('sleeptime',()=>console.log('Time to go to bed'));

var timeInterval = 100;
setInterval(()=>{
    const hour = new Date().getHours();
    if(hour>=23)
    eventEmitter.emit('sleeptime');
    console.log(timeInterval);
                },
                timeInterval
);
timeInterval = 5000;




/**************************File System****************************/
/*const {readFile,readFileSync} = require('fs');
let reader = 'hello';
readFile('./hello.txt','utf-8',(err,txt)=>{
    reader = txt;
    console.log('file read: loading into data struture');
   
});
setTimeout(()=>console.log(reader),5000);*/

//With the help of promises
const {readFile} = require('fs').promises;

async function read(){
        const file = await readFile('./hello.txt','utf8');
        console.log(file);
}
read()

