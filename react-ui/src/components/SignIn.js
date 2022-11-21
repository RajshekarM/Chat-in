
import{useEffect, useState} from 'react'


const SignIn=({setUserState})=>{

   const authenticate=(event)=>{
        event.preventDefault();
        setUserState(true);
    }

   return (
   <div>
        <form>
           <label>UserName</label> 
           <input type={'text'}/>
           <br></br>
           <label>Passowrd</label>
           <input type={'password'}/>
           <br></br>
           <button onClick={(event)=>authenticate(event)}>Sign In</button>
        </form>
    </div>);
}

export default SignIn;