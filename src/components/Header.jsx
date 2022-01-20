import React from "react";
import logo from "../assets/1024.png";
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";


function Header(props) {
    const location = useLocation();
    return (
        <div className="Header">
            <img alt="logo" src={logo} height="32px" id="logo" />
            <span className="titleName">Mercury</span> 
            <Link className={location.pathname === "/definitions" ? "pageLink active" : "pageLink"} to="/definitions">Definitions</Link>
            <Link className={location.pathname === "/collections" ? "pageLink active" : "pageLink"} to="/collections">Collections</Link>
            <Link className={location.pathname === "/account" ? "pageLink active" : "pageLink"} to="/account">Account</Link>
        </div>
    );
}


export default Header;
