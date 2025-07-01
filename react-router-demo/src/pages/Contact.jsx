import React from 'react'
import { useNavigate } from 'react-router-dom';
const Contact = ()=>{
  const navigate=useNavigate();
    return(
      <center>
        
        <div className="container3" style={{display:'inline-flex',marginTop:'50px',gap:'10px',alignContent:'center'}}>
          <h1>Contact</h1> <br></br>
          <div style={{padding:'15px'}}>
          <button style={{}} onClick={() => navigate("info")}>Information</button></div>
          <div style={{padding:'15px'}}><button onClick={() => navigate("form")}>Form</button>
           </div>
          
          
         
        </div></center>
    );
};

export default Contact;