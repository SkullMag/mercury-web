import React from "react";
import "../styles/LoginForm.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useStore } from "react-redux";
import { loginAction } from "../store/slices/auth"
import { Link } from "react-router-dom";
import { SERVER_IP } from "../constants";


function LoginForm(props) {

    const store = useStore();
    const navigate = useNavigate();
    const [errorText, setErrorText] = useState("");

    const [state, setState] = useState({
        username: "",
        password: "",
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
        const url = SERVER_IP + "/api/login";
        let response = await fetch(url, {method: "POST", body: JSON.stringify(state)});
        let json_data = await response.json();
        if (response.status === 200) {
            localStorage.setItem("token", json_data.token);
            store.dispatch(loginAction(json_data));
            navigate("/account");
        } else {
            setErrorText(json_data.error)
        }
    }

    return (
        <div className="loginForm">
            <h1 className="loginTitle">Sign In</h1>
            <p className="errorText">{errorText}</p>
            <input type="text" placeholder="Username" onChange={usernameChanged} className="card inputForm usernameInput" />
            <br/>
            <input type="password" placeholder="Password" onChange={passwordChanged} className="card inputForm passwordInput" />
            <br/>
            <button className="card loginButton" onClick={login}>Sign In</button>
            <br/>
            <p className="signupLink">New to Mercury? <Link to="/signup">Sign up</Link></p>
        </div>
    );
}

export default LoginForm;