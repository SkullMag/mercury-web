import "../styles/ProfilePage.css"
import ProfileInfoCard from "./ProfileInfoCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../store/slices/auth";
import { Navigate, useNavigate } from "react-router-dom";

function ProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth);

    if (authState.token === "") {
        return (<Navigate to="/login" />);
    }

    function logout() {
        dispatch(logoutAction());
        navigate("/login");
    }
    
    return (
        <div className="profilePage">
            <section>
                <ProfileInfoCard/>
                <button onClick={logout} className="card logoutButton">Log Out</button>
            </section>
        </div>
    );
}

export default ProfilePage;