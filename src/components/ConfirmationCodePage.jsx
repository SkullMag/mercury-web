import React from "react";
import { useState } from "react";
import "../styles/ConfirmationCodePage.css";
import ReactInputVerificationCode from 'react-input-verification-code';
import { useEffect } from "react";
import {Link} from "react-router-dom"


function ConfirmationCodePage() {
    const [seconds, setSeconds] = useState(59);
    const [errorText, setErrorText] = useState("");

    useEffect(() => {
        setInterval(() => {
            setSeconds(s => {
                if (s > 0) {
                    return s - 1
                } else {
                    return 0
                }
            });
        }, 1000);
    }, []);

    function resendCode() {
        if (seconds !== 0) {
            setErrorText("Wait for " + seconds + " seconds");
            return;
        }
        setSeconds(59);

    }

    return (
        <div className="confirmationCodeForm">
            <h1>Enter code sent to your email</h1>
            <p className="errorText">{errorText}</p>
            <center> 
                <ReactInputVerificationCode placeholder=""/>
            </center>
            <p className="resendTimer"><Link onClick={resendCode} to="/confirmation">Resend</Link> {seconds !== 0 ? " in " + seconds + " seconds" : null}</p>
            <button className="card checkCode">Check</button>
        </div>
    );
}


export default ConfirmationCodePage;