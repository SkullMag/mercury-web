import "../styles/SignUpForm.css";
import { useState } from "react";
import React from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import { requestVerificationCode, validateEmail } from "../utils";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


function SingUpForm() {
    const navigate = useNavigate();
    const [t, ] = useTranslation("auth")
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
                    passwordsMatch: target.value === state.password || state.repeatedPassword === "" ? "" : t("passwordsDontMatch")
                });
                break;
            case "repeatedPassword": 
                setState({
                    ...state, 
                    repeatedPassword: target.value,
                    passwordsMatch: target.value === state.password ? "" : t("passwordsDontMatch")
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

    async function signUp() {
        if (!validateEmail(state.email)) {
            setState({
                ...state,
                errorText: t("invalidEmail")
            });
            return;
        }
        if (state.repeatedPassword !== state.password) {
            return;
        }
        if (state.passwordScore === 0 || state.passwordScore === 1) {
            setState({
                ...state,
                errorText: t("weakPassword")
            });
            return;
        }
        if (state.fullname.length < 2) {
            setState({
                ...state,
                errorText: t("shortFullname")
            });
            return;
        }
        if (state.username.length < 3) {
            setState({
                ...state,
                errorText: t("shortUsername")
            });
            return;
        }

        setState({
            ...state,
            errorText: ""
        });
        var [json_data, status_code] = await requestVerificationCode(state.username.slice(1), state.email);
        if (status_code !== 200) {
            setState({
                ...state,
                errorText: json_data.error
            });
        } else {
            navigate("/verification", { state: state, setState: setState});
        }

    }

    return (
        <div className="signupForm">
            <h1 className="signupTitle">{t("signUpTitle")}</h1>
            <p className="errorText">{state.errorText}</p>
            <input type="text" placeholder={t("fullnamePlaceholder")} className="card inputForm" onChange={onInputChange} name="fullname" value={state.fullname} />
            <br/>
            <input type="email" placeholder={t("emailPlaceholder")} className="card inputForm emailInput" onChange={onInputChange} name="email" value={state.email}/>
            <br />
            <input type="text" placeholder={t("usernamePlaceholder")} className="card inputForm usernameInput" onChange={onInputChange} name="username" value={state.username} />
            <br />
            <input type="password" placeholder={t("passwordPlaceholder")} className="card inputForm password" onChange={onInputChange} name="password" value={state.password} />
            <PasswordStrengthBar password={state.password} className="passwordStrengthBar" minLength="8" onChangeScore={scoreChanged}/>
            <br/>
            <input type="password" placeholder={t("enterPasswordAgainPlaceholder")} className="card inputForm repeatPassword" onChange={onInputChange} name="repeatedPassword" value={state.repeatedPassword} />
            <br/>
            <p className="passwordsMatch">{state.passwordsMatch}</p>
            <button className="card signupButton" onClick={signUp}>{t("signUpButton")}</button>
        </div>
    );
}

export default SingUpForm;