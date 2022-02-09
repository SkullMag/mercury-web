import React from "react";
import { useState } from "react";
import "../styles/VerificationCodePage.css";
import ReactInputVerificationCode from 'react-input-verification-code';
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { requestVerificationCode } from "../utils";
import { Navigate } from "react-router";
import { SERVER_IP } from "../constants";


function VerificationCodePage() {
    const [seconds, setSeconds] = useState(59);
    const [errorText, setErrorText] = useState("");
    const { state } = useLocation();
    const [verificationCode, setVerificationCode] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => {
                if (s > 0) {
                    return s - 1
                } else {
                    return 0
                }
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    async function resendCode() {
        if (seconds !== 0) {
            setErrorText("Wait for " + seconds + " seconds");
            return;
        }
        console.log(state.email);
        var json_data, statusCode = await requestVerificationCode(state.email)
        if (statusCode === 200) {
            setSeconds(59);
        } else {
            setErrorText(json_data.error);
        }
    }

    async function signUp() {
        if (verificationCode.length === 4) {
            const payload = {
                email: state.email,
                password: state.password,
                username: state.username.slice(1),
                verificationCode: verificationCode,
                fullname: state.fullname
            };
            const response = await fetch(SERVER_IP + "/api/signup", {method: "POST", body: JSON.stringify(payload)});
            if (response.status === 200) {
                navigate("/login");
            } else {
                console.log(await response.json());
            }
        } else {
            setErrorText("Fullfill the verification code")
        }
    }

    if (state === null) {
        return (<Navigate to="/signup"/>);
    }

    return (
        <div className="confirmationCodeForm">
            <h1>Enter code sent to your email</h1>
            <p className="errorText">{errorText}</p>
            <center> 
                <ReactInputVerificationCode placeholder="" onChange={(value) => setVerificationCode(value)} value={verificationCode}/>
            </center>
            <p className="resendTimer"><Link onClick={resendCode} to="/verification">Resend</Link> {seconds !== 0 ? " in " + seconds + " seconds" : null}</p>
            <button className="card checkCode" onClick={signUp}>Sign Up</button>
        </div>
    );
}


export default VerificationCodePage;