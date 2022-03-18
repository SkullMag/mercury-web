import React from "react";
import logo from "../assets/1024.png";
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HamburgerIcon } from "../icons/HamburgerIcon";


function Header() {
    const location = useLocation();
    const { t } = useTranslation("navbar")
    const [isResponsive, setResponsive] = React.useState(false)

    return (
        <nav className={isResponsive ? "Header responsive" : "Header"}>
            <div style={{display: "flex"}} className="logoTitle">
                <img alt="logo" src={logo} height="32px" id="logo" />
                <p className="titleName">Mercury</p> 
            </div>
            <div className="linksToPages">
                <Link className={location.pathname === "/dictionary" ? "pageLink active" : "pageLink"} to="/dictionary">{t("dictionary")}</Link>
                <Link className={location.pathname === "/collections" ? "pageLink active" : "pageLink"} to="/collections">{t("collections")}</Link>
                <Link className={location.pathname === "/account" ? "pageLink active" : "pageLink"} to="/account">{t("account")}</Link>
            </div>
            
            <button className="hamburger" onClick={() => setResponsive(!isResponsive)}>
                <HamburgerIcon width="30px" height="30px" fill="white" />
            </button>
        </nav>
    );
}


export default Header;
