import React from "react";
import logo from "../assets/1024.png";
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";


function Header(props) {
    const location = useLocation();
    const { t } = useTranslation("navbar")
    return (
        <nav className="Header">
            <img alt="logo" src={logo} height="32px" id="logo" />
            <p className="titleName">Mercury</p> 
            <Link className={location.pathname === "/dictionary" ? "pageLink active" : "pageLink"} to="/dictionary">{t("dictionary")}</Link>
            <Link className={location.pathname === "/collections" ? "pageLink active" : "pageLink"} to="/collections">{t("collections")}</Link>
            <Link className={location.pathname === "/account" ? "pageLink active" : "pageLink"} to="/account">{t("account")}</Link>
        </nav>
    );
}


export default Header;
