import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SERVER_IP } from "../constants";
import Collection from "./Collection"
import { useState } from "react";
import CollectionsHeader from "./CollectionsHeader";
import { CollectionsContext } from "../context/CollectionsContext";


function Collections() {
    const authState = useSelector(state => state.auth);
    const [collections, setCollections] = useState({
        collections: []
    })
    const [isEditing, setEditing] = useState(false)

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
            const response = await fetch([SERVER_IP, "api", "getCollections", 
                                          authState.token, authState.username].join("/"))
            if (response.status === 200) {
                setCollections({
                    collections: await response.json()
                })
            }
        }
        if (authState.username !== "") {
            fetchCollections()
        }
    }, [authState.username]);

    return (
        <div className="collections">
            <section>
                    <CollectionsContext.Provider value={{ isEditing, toggleEditing }}>
                        <CollectionsHeader setCollections={setCollections}/>
                        {collections.collections.map((elem, i) => (
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