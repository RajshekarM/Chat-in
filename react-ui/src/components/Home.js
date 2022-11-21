import { useEffect, useState } from "react";
import Chat from "./Chat";
import SignIn from "./SignIn";


const Home = () =>{

    const [userState,setUserState] = useState(false);
    useEffect(()=>console.log("user state changed to" + userState),[userState])
    
   return (
   <div>
    {userState?<Chat setUserState={setUserState}/>:<SignIn setUserState={setUserState}/>}
    </div>); 
}



export default Home;