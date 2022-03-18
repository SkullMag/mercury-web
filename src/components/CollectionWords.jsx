import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SERVER_IP } from "../constants";
import CollectionWord from "./CollectionWord";
import "../styles/CollectionWords.css"
import CollectionWordsHeader from "./CollectionWordsHeader";
import { CollectionWordsContext } from "../context/CollectionWordsContext";


function CollectionWords() {
    const { username, collectionName } = useParams()
    const authState = useSelector(state => state.auth)
    const [collectionWords, setCollectionWords] = useState([])
    const [isEditing, setEditing] = useState(false)

    const toggleEditing = () => {
        setEditing(edit => !edit)
    }

    const collectionWordDeleted = async ( word ) => {
        const response = await fetch([SERVER_IP, "api", "deleteCollectionWord", 
                                authState.token, collectionName, word].join("/"),
                                { method: "POST" })

        if (response.ok) {
            setCollectionWords(state => state.filter((w) => w.word !== word))
        } else {
            // handler error while deleting collection word
        }
    }

    useEffect(() => {
        if (authState.username !== "") {
            fetch([SERVER_IP, 'api', 'getCollectionWords', authState.token, username, collectionName].join("/"))
                .then(async response => setCollectionWords(await response.json()));
        }
    }, [authState.username]);

    return (
        <div className="collectionWords">
            <section>
                <CollectionWordsContext.Provider value={{ isEditing, toggleEditing, collectionWords }}>
                    <CollectionWordsHeader authorUsername={username} collectionName={collectionName} isEditing={false} />
                    <div className="card colWords">
                        {collectionWords && collectionWords.sort((a, b) => a.word > b.word).map((elem, i) => (
                            <CollectionWord key={i} jsonData={elem} style={{
                                borderBottom: i === collectionWords.length - 1 ? "none" : "1px solid lightgray",
                                cursor: isEditing ? "auto" : "pointer",
                                paddingLeft: isEditing ? "10px" : "20px"
                            }} onDelete={collectionWordDeleted} />))}
                    </div>
                </CollectionWordsContext.Provider>
            </section>
        </div>
    );
}


export default React.memo(CollectionWords);