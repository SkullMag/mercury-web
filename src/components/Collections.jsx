import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SERVER_IP } from "../constants";
import Collection from "./Collection"
import { useState } from "react";
import CollectionsHeader from "./CollectionsHeader";
import { CollectionsContext } from "../context/CollectionsContext";
import { Navigate } from "react-router";
import "../styles/Collections.css"
import { useTranslation } from "react-i18next";
import { useGetLocalCollectionsQuery, useGetPublicCollectionsQuery } from "../store/api/collections";


function Collections() {
    const authState = useSelector(state => state.auth)
    const { data: collections } = useGetLocalCollectionsQuery(authState.token)
    const { data: publicCollections } = useGetPublicCollectionsQuery()
    const [isPublic, setPublic] = useState(false)
    const [isEditing, setEditing] = useState(false)
    const { t } = useTranslation("collections")
    const toggleEditing = () => setEditing(edit => !edit)

    if (authState.token === "") {
        return (<Navigate to="/login" />);
    }

    return (
        <div className="collections">
            <section>
                    <CollectionsContext.Provider value={{ isEditing, toggleEditing, setPublic }}>
                        <center>
                            <div className="">
                                <button className={isPublic ? "localCollections" : "localCollections active"} onClick={() => setPublic(false)}>{t("localCollections")}</button>
                                <button className={isPublic ? "publicCollections active" : "publicCollections"} onClick={() => setPublic(true)}>{t("publicCollections")}</button>
                            </div>
                        </center>
                        
                        <CollectionsHeader isPublic={isPublic}/>
                        {(isPublic ? publicCollections : collections) && (isPublic ? publicCollections : collections).map((elem, i) => (
                            <Collection key={i} authorUsername={elem.username} 
                                        wordCount={elem.wordCount} collectionName={elem.name}/>
                        ))}
                    </CollectionsContext.Provider>
               
            </section>
        </div>
    );
}


export default Collections;