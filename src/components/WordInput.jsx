import "../styles/WordInput.css"
import React from "react";
import { requestWord, capitalize } from "../utils.js";


function WordInputForm(props) {
    const [state, setState] = React.useState({
        word: ""
    });

    function inputChanged(event) {
        var word = event.target.value;
        setState({
            ...state,
            word: capitalize(word) 
        });
    }

    async function search() {
        let result = await requestWord(state.word.toLowerCase());
        props.setParentState({
            json_data: result
        });
    }

    return (
        <div className="WordInputForm">
            <input className="WordInput" value={state.word} onChange={inputChanged} placeholder="Type the word" type="text"/>
            <button className="SearchButton" onClick={search}>Search</button>
        </div>
    );
}

export default WordInputForm;
