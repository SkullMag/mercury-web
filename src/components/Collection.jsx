import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Collection.css"
import { TINYGRAPH_IP } from "../constants";
import { useSelector } from "react-redux";
import { CollectionsContext } from "../context/CollectionsContext";
import { useTranslation } from "react-i18next";
import { ChevronIcon } from "../icons/ChevronIcon";


function Collection({ authorUsername, collectionName, wordCount, onDelete }) {
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
                    <button className="deleteCurrentCollection" onClick={() => onDelete(collectionName)}>{t("deleteCollectionButton")}</button>
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
                    <ChevronIcon width="20" height="20" fill="currentColor" />
                    
                </div>
                <div className="card collectionFeatures">
                    <img src={TINYGRAPH_IP + "/spaceinvaders/" + authState.username + "?theme=bythepool&numcolors=4&size=200&fmt=svg"} alt="account" className="profilePicture" /> 
                    <Link to={"/account/" + authorUsername}>{"@" + authorUsername}</Link>
                </div>
            </div>
        </div>
    );
}


export default Collection;