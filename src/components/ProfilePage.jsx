import "../styles/ProfilePage.css"
import ProfileInfoCard from "./ProfileInfoCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../store/slices/auth";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProfilePage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { username } = useParams()
    const authState = useSelector((state) => state.auth)
    const { t } = useTranslation("auth")

    if (authState.token === "") {
        return (<Navigate to="/login" />)
    }

    function logout() {
        dispatch(logoutAction())
        navigate("/login")
    }
    
    return (
        <div className="profilePage">
            <section>
                {authState.username !== "" && (<ProfileInfoCard username={username}/>)}
                {authState.username === username && (<button onClick={logout} className="card logoutButton">{t("logoutButton")}</button>)}
            </section>
        </div>
    );
}

export default ProfilePage;