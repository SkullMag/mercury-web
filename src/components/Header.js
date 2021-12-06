import React from "react";
import logo from "../assets/1024.png";
import "../styles/Header.css";


function Header() {
    return (
        <div className="Header">
            <img alt="logo" src={logo} height="32px" id="logo" />
            <span className="titleName">Mercury</span> 
        </div>
    );
}


export default Header;
