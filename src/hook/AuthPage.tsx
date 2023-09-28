import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../context/Auth.context';
import Login from '../page/Login/Login';

const AuthPage = () => {
    const {Auth} = React.useContext(AuthContext);
    if(Auth){
        return <Outlet/>
    }
    else {
        return <Login/>
    }
    
}

export default AuthPage;