import "../styles/DefinitionsView.css";
import Definition from "./Definition.jsx"
import { capitalize } from "../utils.js";
import React from "react";


function DefinitionsView(props) {
    var definitions = [];
    if (props.parentState.json_data != null) {
        props.parentState.json_data.forEach((elem) => {
            definitions.push(( <Definition partOfSpeech={capitalize(elem.partOfSpeech)} definition={elem.definition} example={elem.example} /> ));
        });
    }
    return (
        <div className="DefinitionsView">
            {definitions.length > 0 ? definitions : <p id="definition"><span id="partOfSpeech">Try to search for another word</span></p>}
        </div>
    );
}


export default DefinitionsView;
