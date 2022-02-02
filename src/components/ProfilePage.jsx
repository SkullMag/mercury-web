import "../styles/ProfilePage.css"
import ProfileInfoCard from "./ProfileInfoCard";
import React from "react";

function ProfilePage() {
    
    return (
        <div className="profilePage">
            <section>
                <ProfileInfoCard/>
            </section>
        </div>
    );
}

export default ProfilePage;