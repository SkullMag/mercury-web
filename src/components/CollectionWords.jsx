import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SERVER_IP } from "../constants";
import CollectionWord from "./CollectionWord";
import "../styles/CollectionWords.css"
import { useTranslation } from "react-i18next";


function CollectionWords() {
    const { username, collectionName } = useParams();
    const authState = useSelector(state => state.auth);
    const [collectionWords, setCollectionWords] = useState([]);
    const [t, ] = useTranslation("collectionWords")

    useEffect(() => {
        if (authState.username !== "") {
            fetch([SERVER_IP, 'api', 'getCollectionWords', authState.token, username, collectionName].join("/"))
                .then(async response => setCollectionWords(await response.json()));
        }
    }, [authState.username]);

    return (
        <div className="collectionWords">
            <section>
                <div className="card collectionHeader">
                    <p className="collectionTitle">{collectionName}</p>
                    <button className="learnWordsButton">{t("learnButton")}</button>
                </div>
                <div className="card colWords">
                    {collectionWords && collectionWords.sort((a, b) => a.word > b.word).map((elem, i) => (
                        <CollectionWord key={i} jsonData={elem} style={{
                            borderBottom: i === collectionWords.length - 1 ? "none" : "1px solid lightgray"
                        }} />))}
                </div>
            </section>
        </div>
    );
}


export default React.memo(CollectionWords);