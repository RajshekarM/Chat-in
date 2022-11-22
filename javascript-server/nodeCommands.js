
console.log(global.process.platform) //tell OS in your machine
const environment = global.process.env;

//Events : Event loop : Non blocking Operations on Main Thread and long asnchronous process is given to seperate thread. 

const {EventEmitter} = require('events')
const eventEmitter =  new EventEmitter();
eventEmitter.on('sleeptime',()=>console.log('Time to go to bed'));

setInterval(()=>{
    const hour = new Date().getHours();
    if(hour>=9)
    eventEmitter.emit('sleeptime');
                },
1000
);


