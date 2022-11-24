import { useEffect, useState } from 'react';
import './Conversation.css';

const ConversationWindow = ({friend})=>{

    const onchange=(e)=>{
        setmyText(e.target.value);
    }
    
    const updateMe=(e)=>{
        e.preventDefault();
        setmyChat(myText);
        setmyText('');
    }

    const [myText, setmyText] = useState('');
    const [myChat, setmyChat] = useState('');

    useEffect(()=>console.log('input change'),[myText]);
    useEffect(()=>console.log('submitted'),[myChat]);

   console.log('State changed rendering')

    return(
        <div>
            <div className="conversation">
            <h2>Conversation Tab</h2>
                <div className="conversation-history">
                    <h3> Chat History:</h3>
                    <h4>{friend.name}</h4>
                    <p style={{marginLeft:'20px'}}>{friend.chatHistory}</p>
                    <h4>Me</h4>
                    <p></p>
                    <p style={{marginLeft:'20px'}}>{myChat}</p>
                </div >  
                <div className="conversation-input">
                    <form>
                        <label>Message</label>
                        <input value={myText} type="text" onChange={(e)=>onchange(e)} ></input>
                        <button onClick={(e)=>updateMe(e)}>Send</button>
                    </form>
                </div>   
            </div>
        </div>
    );
}

export default ConversationWindow;