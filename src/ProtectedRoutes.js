import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

const ProtectedRoutes =()=>{
    const auth = localStorage.getItem("isAuthenticated");
    console.log('......', typeof auth)
    let authVal = (auth === 'true')
    return(
     authVal ? <Outlet/>: <Navigate to={"/loginAdmin"}/>
    );
}

export default ProtectedRoutes;