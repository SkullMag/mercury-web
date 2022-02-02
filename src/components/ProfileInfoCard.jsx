import { useState, useEffect } from "react";
import React from "react";
import "../styles/ProfileInfoCard.css"

function ProfileInfoCard() {
    const [state, setState] = useState({
        username: "",
        name: "",
        surname: ""
    });
    useEffect(() => {
        fetch("http://localhost:8080/api/getUserData/" + window.localStorage.token)
        .then(response => response.json())
        .then(function(response) {
            setState({
                username: response.username,
                name: response.name,
                surname: response.surname,
                isVerified: response.isVerified
            });
        });
    }, []);
    return (
        <div className="profileInfoCard">
            <img className="userProfilePicture" src={"http://localhost:8080/api/getUserProfilePicture/" + state.username} />
            <h1 className="fullname">{state.name + " " + state.surname}</h1>
            <p className="username">@{state.username}</p>
            <i><q className="profileBio">CEO of Mercury</q></i>
        </div>
    );
}

export default ProfileInfoCard