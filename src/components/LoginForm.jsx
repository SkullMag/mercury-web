import React from "react";
import "../styles/LoginForm.css"
import { useState } from "react"
import { Link } from "react-router-dom"


function LoginForm(props) {

    const [state, setState] = useState({
        username: "",
        password: ""
    });

    function usernameChanged(event) {
        const username = event.target.value;
        setState({
            ...state,
            username: username.toLowerCase()
        });
    }

    function passwordChanged(event) {
        const password = event.target.value;
        setState({
            ...state,
            password: password
        });
    }

    async function login() {
        const url = "http://localhost:8080/api/login"
        let response = await fetch(url, {method: "POST", body: JSON.stringify(state)});
        if (response.status === 200) {
            let json_data = await response.json();
            window.localStorage.setItem("token", json_data.token);
            props.setTokenState({token: json_data.token});
        }
    }

    return (
        <div className="loginForm">
            <h1 className="loginTitle">Sign In</h1>
            <input type="text" placeholder="Username" onChange={usernameChanged} className="inputForm usernameInput" />
            <br/>
            <input type="password" placeholder="Password" onChange={passwordChanged} className="inputForm passwordInput" />
            <br/> 
            <button className="loginButton" onClick={login}>Sign In</button>
        </div>
    );
}

export default LoginForm;