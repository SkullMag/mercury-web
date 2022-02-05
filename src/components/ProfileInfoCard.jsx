import { useState, useEffect } from "react";
import React from "react";
import "../styles/ProfileInfoCard.css"
import { useSelector } from "react-redux";


function ProfileInfoCard() {
    const authState = useSelector((state) => state.auth);
    return (
        <div className="profileInfoCard">
            <img className="userProfilePicture" src={authState.username !== "" ? "http://localhost:8080/api/getUserProfilePicture/" + authState.username : ""} />
            <h1 className="fullname">{authState.fullname}</h1>
            <p className="username">@{authState.username}</p>
            <i><q className="profileBio">{authState.profileBio}</q></i>
        </div>
    );
}

export default ProfileInfoCard