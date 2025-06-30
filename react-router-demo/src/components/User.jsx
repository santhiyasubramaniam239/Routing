import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
const User = ()=>{
    const userDetail = useLoaderData();
    return(
        <div>
     <h4>{userDetail.name}</h4> 
     <p>{userDetail.email}</p>  
      <p>{userDetail.address.street}</p>   
       <p>{userDetail.address.city}</p>   
        <p>{userDetail.address.zipcode}</p>   
         <p>{userDetail.phone}</p> 
          <p>{userDetail.website}</p>      
        </div>
    );
};

export default User;