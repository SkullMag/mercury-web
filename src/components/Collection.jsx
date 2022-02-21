import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Collection.css"
import { capitalize } from "../utils.js";


function Collection(props) {

    const navigate = useNavigate();

    function openCollection() {
        navigate("/collections/" + props.authorUsername + "/" + props.collectionName)
    }

    return (
        <div className="card collection">
            <div className="card collectionDetails" onClick={openCollection}>
                <p className="collectionName">
                    {capitalize(props.collectionName)}
                </p>
                <p className="wordCount">
                    {props.wordCount === 1 ? props.wordCount + " word" : props.wordCount + " words"}
                </p>
                <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            <div className="card collectionFeatures">
                <p className="authorUsername">Created by <Link to="/account/">{"@" + props.authorUsername}</Link></p>
            </div>
        </div>
    );
}


export default Collection;