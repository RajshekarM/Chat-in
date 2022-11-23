
function UserController(){
    
    this.login = (req,res)=>{
        res.send('Logging in welcome')
    };
    this.contacts = (req,res)=>{
        res.send('<h1>List of Contacts</h1>');
    };


   }
 
export default UserController;
     
     