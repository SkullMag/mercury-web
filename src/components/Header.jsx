import React from "react";
import logo from "../assets/1024.png";
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HamburgerButton from "./HamburgerButton";
import { useSelector } from "react-redux";


function Header() {
    const location = useLocation();
    const { t } = useTranslation("navbar")
    const [isResponsive, setResponsive] = React.useState(false)
    const [isExpanded, setExpanded] = React.useState(false)
    const authState = useSelector(state => state.auth)

    function toggleResponsive() {
        setExpanded(!isExpanded)
        if (isResponsive) {
            setTimeout(() => setResponsive(!isResponsive), 400)
        } else {
            setResponsive(!isResponsive)
        }
    }

    return (
        <nav className={isResponsive ? (isExpanded ? "Header responsive expanded" : "Header responsive") : "Header"}>
            <div style={{display: "flex"}} className="logoTitle">
                <img alt="logo" src={logo} height="32px" id="logo" />
                <p className="titleName">Mercury</p> 
            </div>
            <div className="linksToPages">
                <Link className={location.pathname === "/dictionary" ? "pageLink active" : "pageLink"} to="/dictionary">{t("dictionary")}</Link>
                <Link className={location.pathname === "/collections" ? "pageLink active" : "pageLink"} to="/collections">{t("collections")}</Link>
                <Link className={location.pathname === "/account/" + authState.username ? "pageLink active" : "pageLink"} to="/account">{t("account")}</Link>
            </div>
            
            <HamburgerButton toggleResponsive={toggleResponsive}/>
            {/* <button className="hamburger" onClick={() => setResponsive(!isResponsive)}>
                <HamburgerIcon width="30px" height="30px" fill="white" />
            </button> */}
        </nav>
    );
}


export default Header;
