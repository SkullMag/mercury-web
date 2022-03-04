import React from "react";
import logo from "../assets/1024.png";
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";


function Header(props) {
    const location = useLocation();
    return (
        <nav className="Header">
            <img alt="logo" src={logo} height="32px" id="logo" />
            <p className="titleName">Mercury</p> 
            <Link className={location.pathname === "/definitions" ? "pageLink active" : "pageLink"} to="/definitions">Definitions</Link>
            <Link className={location.pathname === "/collections" ? "pageLink active" : "pageLink"} to="/collections">Collections</Link>
            <Link className={location.pathname === "/account" ? "pageLink active" : "pageLink"} to="/account">Account</Link>
        </nav>
    );
}


export default Header;
