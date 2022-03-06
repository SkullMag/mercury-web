import "../styles/DefinitionsView.css";
import Definition from "./Definition.jsx"
import { pronounceWord } from "../utils.js";
import React from "react";
import AddToCollectionButton from "./AddToCollectionButton"
import { useTranslation } from "react-i18next";


function DefinitionsView(props) {
    const [t, ] = useTranslation("dictionary")

    let definitions = [];
    let isFound = !("error" in props.json_data);
    if (props.json_data != null && isFound) {
        let def = props.json_data.definitions
        let i = 0;
        for (var partOfSpeech in def) {
            definitions.push((<Definition key={i} partOfSpeech={partOfSpeech} definition={def[partOfSpeech]} example={def[partOfSpeech][0].example} />))
            i += 1;
        }
    }
    if (isFound) {
        return (
            <>
            <div className={props.className + " DefinitionsView"} style={props.style}>
                <div className="wordView">
                    <p className="word">{props.json_data.word}</p>
                    { props.json_data.phonetics !== "" ?
                    <button title="Pronounce" className="pronounceButton" onClick={() => pronounceWord(props.json_data.phonetics)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-volume-up-fill" viewBox="0 0 16 16">
                        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                        <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
                    </svg>
                    </button>
                    : null}
                    { props.addToCollectionButton ? <AddToCollectionButton word={props.json_data.word} /> : null}
                </div>
                {definitions}
            </div>
            </>
        );
    } else {
        return (
            <div className={props.className + " DefinitionsView"} style={props.style}>
                <p id="definition"><span id="partOfSpeech">{t("tryAnotherWord")}</span></p>
            </div>
        );
    }
}


export default React.memo(DefinitionsView);
