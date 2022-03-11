import "../styles/DefinitionsView.css";
import Definition from "./Definition.jsx"
import { pronounceWord } from "../utils.js";
import React from "react";
import AddToCollectionButton from "./AddToCollectionButton"
import { useTranslation } from "react-i18next";
import PronounceButton from "./PronounceButton";


function DefinitionsView({ json_data, definitionsViewClassName, showWord=true, addToCollectionButton, style }) {
    const { t } = useTranslation("dictionary")

    let definitions = [];
    let isFound = !("error" in json_data);
    if (json_data != null && isFound) {
        let def = json_data.definitions
        let i = 0;
        for (var partOfSpeech in def) {
            definitions.push((<Definition key={i} partOfSpeech={partOfSpeech} definition={def[partOfSpeech]} example={def[partOfSpeech][0].example} />))
            i += 1;
        }
    }
    if (isFound) {
        return (
            <>
            <div className={definitionsViewClassName + " DefinitionsView"} style={style}>
                {showWord && <div className="wordView">
                    <p className="word">{json_data.word}</p>
                    { json_data.phonetics !== "" ?
                        <PronounceButton width="24" height="24" fill="white" />
                    : null}
                    { addToCollectionButton ? <AddToCollectionButton word={json_data.word} /> : null}
                </div>}
                {definitions}
            </div>
            </>
        );
    } else {
        return (
            <div className={definitionsViewClassName + " DefinitionsView"} style={style}>
                <p id="definition"><span id="partOfSpeech">{t("tryAnotherWord")}</span></p>
            </div>
        );
    }
}


export default React.memo(DefinitionsView);
