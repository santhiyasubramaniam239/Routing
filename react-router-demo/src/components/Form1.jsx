import React, { useState } from 'react';
const  Form1 = ()=>{
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [mobile, setMobile]= useState();
   const [message, setMessage] = useState('');
   const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    alert('Form submitted successfully');
    console.log('Name:', name);
    console.log('Email:', email);  
    console.log('Mobile Number:', mobile); 
    console.log('Message:', message); 
    console.log('Form submitted successfully')
    setMobile('');
    setName('');
    setEmail('');
    setMessage('');
  };
    return(
      <div>
        <form onSubmit={handleSubmit}>
        <div style={{textAlign:'center',marginTop:'50px'}}>
        Name:   <input type= "text" placeholder="Enter Name"  value={name}
        onChange={(e)=> setName(e.target.value)} required/><br></br><br></br>
        Email:  <input type= "email" placeholder="Enter Email" value={email}
        onChange={(f)=> setEmail(f.target.value)}required/><br></br><br></br>
        Mobile: <input type= "tel" placeholder="Enter Mobile"  maxLength={'10'} value={mobile}
        onChange={(g)=> setMobile(g.target.value)}required/><br></br><br></br> 
        Message:<textarea maxLength={'100'} value={message}
        onChange={(h)=> setMessage(h.target.value)}required> </textarea><br></br><br></br>
          <button type='submit' >Submit</button>
        </div>
      
        <div style={{textAlign:'center',marginTop:'20px'}}>
        <p>Hello , {name}!</p><br></br>
        <p>Your Email: {email}</p>
        <p>Your Mobile: {mobile}</p>
        <p>Your Message: {message}</p>
        </div>
        </form>
        </div>
        
    );
};

export default Form1;