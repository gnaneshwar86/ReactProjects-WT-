import React from 'react'
import { useState } from 'react';
function BasicForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleLog=(e)=>{
        console.log(name+"\n"+email+"\n"+message);
    }
  return (
    <div>
        <form>
            <label>Name : </label><br/>
            <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>

            <label>Email : </label><br/>
            <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>

            <label>Message : </label><br/>
            <input type="text" name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}/><br/>
            
            <button type='submit'onClick={handleLog}>Submit</button>
        </form>    
    </div>
  )
}

export default BasicForm