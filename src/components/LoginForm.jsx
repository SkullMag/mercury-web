import React from "react";
import "../styles/LoginForm.css"


function LoginForm() {
    return (
        <div className="loginForm">
            <h1>Login</h1>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password" />
            <button className="loginButton">Login</button>
        </div>
    );
}

export default LoginForm;