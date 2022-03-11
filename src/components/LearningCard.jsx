import React from "react"
import { useTranslation } from "react-i18next"
import "../styles/LearningCard.css"
import DefinitionsView from "./DefinitionsView"
import PronounceButton from "./PronounceButton"

export default function LearningCard({ word, currentWordIndex, moveCurrentWordIndex, numberOfWords, wordStatusChanged }) {
    const { t } = useTranslation("learning")
    const [definitionShowing, setDefinitionShowing] = React.useState(false)

    function nextWord(e) {
        wordStatusChanged(word, e.target.className === "rememberButton")
        moveCurrentWordIndex()
    }

    return (
        <div className="learningCard card">
            <div className="statsHeader">
                <p>{currentWordIndex}/{numberOfWords}</p>
            </div>
            <div className="learningWord">
                <p>{word.word}</p>
                <PronounceButton width="24" height="24" fill="white" phonetics={word.phonetics} />
            </div>
            <button className="showDefinitionButton" 
                    onClick={() => setDefinitionShowing(!definitionShowing)}>
                    {t(definitionShowing ? "hideDefinition" : "showDefinition")}
            </button>

            <div className="learningDefinition">
                {definitionShowing && <DefinitionsView json_data={word} showWord={false} />}
            </div>
            <div className="buttons">
                <button className="rememberButton" onClick={nextWord}>{t("rememberButton")}</button>
                <br />
                <button className="forgotButton" onClick={nextWord}>{t("forgotButton")}</button>
            </div>
        </div>
    )
}