import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Collection.css"
import { TINYGRAPH_IP } from "../constants";
import { useSelector } from "react-redux";
import { CollectionsContext } from "../context/CollectionsContext";
import { useTranslation } from "react-i18next";


function Collection({ authorUsername, collectionName, wordCount }) {
    const { t } = useTranslation("collections")
    const navigate = useNavigate();
    const authState = useSelector(state => state.auth)
    const { isEditing } = React.useContext(CollectionsContext)

    function openCollection() {
        navigate("/collections/" + authorUsername + "/" + collectionName)
    }

    return (
        <div style={{display: "flex"}}>
            {isEditing && (
                <div className="editButtons">
                    <button className="deleteCurrentCollection">{t("deleteCollectionButton")}</button>
                    {/* <button className="renameCurrentCollection">Rename</button> */}
                </div>
            )}
            <div className="card collection">
                <div className="card collectionDetails" onClick={openCollection}>
                    <p className="collectionName">
                        {collectionName}
                    </p>
                    <p className="wordCount">
                        {wordCount === 1 ? wordCount + " word" : wordCount + " words"}
                    </p>
                    <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    
                </div>
                <div className="card collectionFeatures">
                    <img src={TINYGRAPH_IP + "/spaceinvaders/" + authState.username + "?theme=bythepool&numcolors=4&size=200&fmt=svg"} alt="account" className="profilePicture" /> 
                    <Link to="/account/">{"@" + authorUsername}</Link>
                </div>
            </div>
        </div>
    );
}


export default Collection;