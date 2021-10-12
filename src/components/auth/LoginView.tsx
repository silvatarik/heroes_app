import React from 'react'
import {
    useHistory
  } from "react-router-dom";
export const LoginView = () => {
    const history = useHistory();

    const handleLogin = () => {
        history.replace('/');
    }

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-4xl">Login</h1>
            <div className="divider"></div> 
            <button className="btn btn-primary" onClick={handleLogin}>Login</button> 
        </div>
    )
}
