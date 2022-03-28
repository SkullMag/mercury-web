import React from "react";
import "../styles/ProfileInfoCard.css"
import { useSelector } from "react-redux";
import { SERVER_IP, TINYGRAPH_IP } from "../constants";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


function ProfileInfoCard() {
    const authState = useSelector((state) => state.auth)
    const { username } = useParams()
    const [userData, setUserData] = React.useState({
        username: "",
        isSubscribed: "",
        fullname: "",
        profileBio: "",
        image: ""
    })
    useEffect(() => {
        async function fetchData() {
            const response = await fetch([SERVER_IP, "api", "getUserData", authState.token, username].join("/"))
            if (response.ok) {
                let data = await response.json()
                setUserData({
                    username: data.username,
                    fullname: data.fullname,
                    profileBio: data.profileBio,
                    isSubscribed: data.isSubscribed,
                    image: TINYGRAPH_IP + "/spaceinvaders/" + (data.username) + "?theme=bythepool&numcolors=4&size=200&fmt=svg"
                })
            }
        }
        if (authState.username !== "") {
            fetchData()
        }
    }, [authState.username])

    return (
        <div className="card profileInfoCard">
            <img className="userProfilePicture" alt="Profile" src={userData.image} />
            <h1 className="fullname">{userData.fullname}</h1>
            <p className="username">@{userData.username}</p>
            {userData.profileBio !== "" ? <i><q className="profileBio">{userData.profileBio}</q></i> : null }
        </div>
    );
}

export default ProfileInfoCard