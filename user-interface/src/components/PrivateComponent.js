import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponent = ()=>{
    const auth = localStorage.getItem('user');
    let cheak;
    if(auth){
          cheak =  <Outlet/>
        }else{
          cheak =  <Navigate to = "/signup " /> 
        }  
    return <div>{cheak}</div>
}

export default PrivateComponent;