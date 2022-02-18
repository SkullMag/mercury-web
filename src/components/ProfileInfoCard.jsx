import React from "react";
import "../styles/ProfileInfoCard.css"
import { useSelector } from "react-redux";
import { TINYGRAPH_IP } from "../constants";


function ProfileInfoCard() {
    const authState = useSelector((state) => state.auth);
    let image = "";

    if (authState.username !== "") {
        image = TINYGRAPH_IP + "/spaceinvaders/" + authState.username + "?theme=bythepool&numcolors=4&size=200&fmt=svg";
    }

    return (
        <div className="card profileInfoCard">
            <img className="userProfilePicture" alt="Profile" src={image} />
            <h1 className="fullname">{authState.fullname}</h1>
            <p className="username">@{authState.username}</p>
            {authState.profileBio !== "" ? <i><q className="profileBio">{authState.profileBio}</q></i> : null }
        </div>
    );
}

export default ProfileInfoCard