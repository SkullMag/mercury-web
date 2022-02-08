import "../styles/SignUpForm.css";
import { useState } from "react";
import React from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import { validateEmail } from "../utils";
import { useNavigate } from "react-router-dom";


function SingUpForm() {
    const navigate = useNavigate();
    const [state, setState] = useState({
        email: "",
        password: "",
        repeatedPassword: "",
        fullname: "",
        passwordScore: "",
        username: "",
        passwordsMatch: "",
        errorText: ""
    });

    function onInputChange(event) {
        const target = event.currentTarget;
        switch (target.name) {
            case "email": 
                setState({...state, email: target.value});
                break;
            case "password": 
                setState({
                    ...state, 
                    password: target.value,
                    passwordsMatch: target.value === state.password || state.repeatedPassword === "" ? "" : "Passwords don't match"
                });
                break;
            case "repeatedPassword": 
                setState({
                    ...state, 
                    repeatedPassword: target.value,
                    passwordsMatch: target.value === state.password ? "" : "Passwords don't match"
                });
                break;
            case "fullname": 
                setState({...state, fullname: target.value});
                break;
            case "username":
                if (target.value.length > 0) {
                    setState({
                        ...state,
                        username: target.value.charAt(0) === "@" ? target.value : "@" + target.value
                    });
                } 
        }
    }

    function scoreChanged(score, _) {
        setState({
            ...state,
            passwordScore: score
        });
    }

    function signUp() {
        if (!validateEmail(state.email)) {
            setState({
                ...state,
                errorText: "Email is invalid"
            });
            return;
        }
        if (state.repeatedPassword !== state.password) {
            return;
        }
        if (state.passwordScore === 0 || state.passwordScore === 1) {
            setState({
                ...state,
                errorText: "Password is too weak"
            });
            return;
        }
        if (state.fullname.length < 2) {
            setState({
                ...state,
                errorText: "Full name is too short"
            });
            return;
        }

        setState({
            ...state,
            errorText: ""
        });
        navigate("/confirmation")

    }

    return (
        <div className="signupForm">
            <h1 className="signupTitle">Create account</h1>
            <p className="errorText">{state.errorText}</p>
            <input type="text" placeholder="Full name" className="card inputForm" onChange={onInputChange} name="fullname" value={state.fullname} />
            <br/>
            <input type="email" placeholder="Email" className="card inputForm emailInput" onChange={onInputChange} name="email" value={state.email}/>
            <br />
            <input type="text" placeholder="Username" className="card inputForm usernameInput" onChange={onInputChange} name="username" value={state.username} />
            <br />
            <input type="password" placeholder="Enter password" className="card inputForm password" onChange={onInputChange} name="password" value={state.password} />
            <PasswordStrengthBar password={state.password} className="passwordStrengthBar" minLength="8" onChangeScore={scoreChanged}/>
            <br/>
            <input type="password" placeholder="Enter password again" className="card inputForm repeatPassword" onChange={onInputChange} name="repeatedPassword" value={state.repeatedPassword} />
            <br/>
            <p className="passwordsMatch">{state.passwordsMatch}</p>
            <button className="card signupButton" onClick={signUp}>Sign Up</button>
        </div>
    );
}

export default SingUpForm;