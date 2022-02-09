import React from "react";
import "../styles/ProfileInfoCard.css"
import { useSelector } from "react-redux";


function ProfileInfoCard() {
    const authState = useSelector((state) => state.auth);
    return (
        <div className="card profileInfoCard">
            <img className="userProfilePicture" alt="Profile" src={authState.username !== "" ? "http://localhost:8080/api/getUserProfilePicture/" + authState.username : ""} />
            <h1 className="fullname">{authState.fullname}</h1>
            <p className="username">@{authState.username}</p>
            {authState.profileBio !== "" ? <i><q className="profileBio">{authState.profileBio}</q></i> : null }
        </div>
    );
}

export default ProfileInfoCard