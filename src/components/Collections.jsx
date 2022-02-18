import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SERVER_IP } from "../constants";
import Collection from "./Collection"
import { useState } from "react";
import Toggler from "./Toggler";


function Collections() {
    const authState = useSelector(state => state.auth);
    const [state, setState] = useState({
        collections: []
    });

    useEffect(() => {
        if (authState.username !== "") {
            fetch(SERVER_IP + "/api/getCollections/" + authState.token + "/" + authState.username)
            .then(async (response) => setState({
                collections: await response.json()
            }));
        }
    }, [authState.username]);

    let collections = [];
    state.collections.forEach(elem => {
        collections.push((<Collection authorUsername={elem.username} wordCount={elem.wordCount} collectionName={elem.name} />))
    });
    return (
        <div className="collections">
            <center>
            <Toggler />
            </center>
            <section>

                {collections}
            </section>
        </div>
    );
}


export default Collections;