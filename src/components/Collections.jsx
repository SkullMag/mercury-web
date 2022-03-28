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


function Collections() {
    const authState = useSelector(state => state.auth);
    const [collections, setCollections] = useState({
        collections: []
    })
    const [isPublic, setPublic] = useState(false)
    const [publicCollections, setPublicCollections] = useState({
        collections: []
    })
    const [isEditing, setEditing] = useState(false)
    const { t } = useTranslation("collections")

    const toggleEditing = () => {
        setEditing(edit => !edit)
    }

    const onCollectionDelete = async ( name ) => {
        const response = await fetch([SERVER_IP, "api", "deleteCollection", 
                                authState.token, name].join("/"),
                                { method: "POST" })
        if (response.ok) {
            setCollections({
                collections: collections.collections.filter(col => col.name !== name)
            })
        } else {
            // handle error while deleting collection
        }
    }

    useEffect(() => {
        async function fetchCollections() {
            const localResponse = await fetch([SERVER_IP, "api", "getCollections", 
                                          authState.token, authState.username].join("/"))
            if (localResponse.status === 200) {
                setCollections({
                    collections: await localResponse.json()
                })
            }
            const publicResponse = await fetch([SERVER_IP, "api", "getCollections"].join("/"))
            if (publicResponse.ok) {
                setPublicCollections({
                    collections: await publicResponse.json()
                })
            }
        }
        if (authState.username !== "") {
            fetchCollections()
        }
    }, [authState.username]);

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
                        
                        <CollectionsHeader setCollections={setCollections} isPublic={isPublic}/>
                        {(isPublic ? publicCollections : collections).collections.map((elem, i) => (
                            <Collection key={i} authorUsername={elem.username} 
                                        wordCount={elem.wordCount} collectionName={elem.name}
                                        onDelete={onCollectionDelete} />
                        ))}
                    </CollectionsContext.Provider>
               
            </section>
        </div>
    );
}


export default Collections;