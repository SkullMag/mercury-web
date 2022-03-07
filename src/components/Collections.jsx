import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SERVER_IP } from "../constants";
import Collection from "./Collection"
import { useState } from "react";
import Toggler from "./Toggler";
import CollectionsHeader from "./CollectionsHeader";


function Collections() {
    const authState = useSelector(state => state.auth);
    // const [state, setState] = useState({
    //     collections: []
    // });
    const [collections, setCollections] = useState({
        collections: []
    })

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
                <CollectionsHeader setCollections={setCollections} collections={collections.collections}/>
                {collections.collections.map((elem, i) => (
                    <Collection key={i} authorUsername={elem.username} wordCount={elem.wordCount} collectionName={elem.name} />
                ))}
            </section>
        </div>
    );
}


export default Collections;