
const authentication ={

valiadtion : (req,res,next)=>{
        next();
},
 verifyUser : (req,res,next)=>{
    if(new Date().getHours()<12)
       next();
    else res.send('<h2>Login Tomorow</h2>');
}
}

export default authentication;

