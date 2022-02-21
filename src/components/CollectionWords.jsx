import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SERVER_IP } from "../constants";
import CollectionWord from "./CollectionWord";
import "../styles/CollectionWords.css"
import DefinitionsView from "./DefinitionsView";


function CollectionWords() {
    const {username, collectionName} = useParams();
    const authState = useSelector(state => state.auth);
    const [collectionWords, setCollectionWords] = useState([]);
    const [words, setWords] = useState({});
    const [wordsToShow, setWordsToShow] = useState([]);

    useEffect(() => {
        if (authState.username !== "") {
            fetch(SERVER_IP + "/api/getCollectionWords/" + authState.token + "/" + username + "/" + collectionName)
            .then(async response => setCollectionWords(await response.json()));
        }
    }, [authState.username]);

    useEffect(() => {
        function showDefinition(event) {
            setWords({
                ...words,
                [event.target.textContent]: !words[event.target.textContent]
            });
        }
        let wordsToShow = [];
        let n = 1;
        collectionWords.forEach(elem => {
            console.log(n, collectionWords.length);
            wordsToShow.push((
                <div onClick={showDefinition}>
                    <CollectionWord word={elem.word} style={{
                        borderBottom: n === collectionWords.length ? "none" : "1px solid lightgray"
                    }} />
                    <DefinitionsView json_data={elem} style={{
                        display: words[elem.word] ? "" : "none",
                        backgroundColor: "rgba(0, 0, 0, 0.03)",
                        paddingTop: "10px",
                        margin: "0",
                        borderBottom: n === collectionWords.length ? "none" : "1px solid lightgray"
                    }}/>
                </div>
            ));
            n += 1;
        });
        setWordsToShow(wordsToShow);
   
    }, [collectionWords, words]);
    
    return (
        <div className="collectionWords">
            <section>
            <div className="card collectionHeader">
                <p className="collectionTitle">{collectionName}</p>
                <button className="learnWordsButton">Learn</button>
            </div>
            <div className="card colWords">
                {wordsToShow}
            </div>
            </section>
        </div>
    );
}


export default CollectionWords;