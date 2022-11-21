
import{useEffect, useState} from 'react'


const Chat=({setUserState})=>{

  const signout=(event)=>{
   
      event.preventDefault();

      setUserState(false);
  
   }
   return (
   <div>
      <div>Navigation Menu
         <button onClick={(event)=>signout(event)}>Sign Out</button>
      </div>
      <h1>Chat Page</h1>
   </div>);
}

export default Chat;