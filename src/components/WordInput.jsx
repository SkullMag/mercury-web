import "../styles/WordInput.css"
import React from "react";
import { requestWord, capitalize } from "../utils.js";
import { useTranslation } from "react-i18next";


function WordInputForm(props) {
    const [state, setState] = React.useState({
        word: ""
    });

    const [t, _] = useTranslation("dictionary")

    function inputChanged(event) {
        var word = event.target.value;
        setState({
            ...state,
            word: capitalize(word)
        });
    }

    async function search() {
        props.setParentState({
            ...props.parentState,
            isLoading: true
        });
        let result = await requestWord(state.word.toLowerCase());
        props.setParentState({
            ...props.parentState,
            json_data: result
        });
    }

    function keyPressed(event) {
        if (event.key === "Enter") {
            search()
        }
    }

    return (
        <div className="WordInputForm">
            <input className="card WordInput" value={state.word} onChange={inputChanged} onKeyPress={keyPressed} placeholder={t("wordInputPlaceholder")} type="text"/>
            <button className="card SearchButton" onClick={search}>{t("searchButton")}</button>
        </div>
    );
}

export default WordInputForm;
