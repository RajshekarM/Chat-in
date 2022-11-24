import{useEffect, useState} from 'react'
import ConversationWindow from './Conversation-window';
import  './Chat.css';


const Chat=({setUserState})=>{

  const signout=(event)=>{
      event.preventDefault();
      setUserState(false);
   }

   const [selectedFriend,updateSelectedFriend] = useState({});


   useEffect(()=>{console.log(`selected New friend:${selectedFriend.name}`)},
         [selectedFriend]
   )

   const updatefriend =(friend)=>{
      updateSelectedFriend(friend);
   }

   const friends = [{id:1,name:'Suresh',chatHistory:'This is Suresh'},{id:2,name:'Ramesh',chatHistory:'This is Ramesh'},
                     {id:3,name:'Naresh',chatHistory:'This is Naresh'}];
   

   return (
   <div clasName>
      
         <nav className='chat-nav'>
            <h2>Chatsapp</h2>
         <button onClick={(event)=>signout(event)}>Sign Out</button>
         </nav>  
     
      <div className='chat-body'>
         <div className='chat-body-friends'>
            <h2>Firends list</h2>
            <ul>
               {friends.map((friend)=> <li key={friend.id} onClick={()=>updatefriend(friend)}>{friend.name}</li>)}
            </ul>
         </div>
         <div className='chat-body-conversation'>
            <ConversationWindow friend={selectedFriend}/>
         </div>
      </div>
   </div>);
}

export default Chat;