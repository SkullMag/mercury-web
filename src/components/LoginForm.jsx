import React from "react";
import "../styles/LoginForm.css"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useStore } from "react-redux";
import { loginAction } from "../store/reducers/auth"


function LoginForm(props) {

    const store = useStore();

    const [state, setState] = useState({
        username: "",
        password: "",
        redirect: ""
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
        const url = "http://localhost:8080/api/login";
        let response = await fetch(url, {method: "POST", body: JSON.stringify(state)});
        if (response.status === 200) {
            let json_data = await response.json();
            localStorage.setItem("token", json_data.token);
            store.dispatch(loginAction(json_data));
            setState({
                ...state,
                redirect: "/account"
            });
        }
    }

    if (state.redirect !== "") {
        return (<Navigate to={state.redirect} />)
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