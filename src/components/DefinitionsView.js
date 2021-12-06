import "../styles/DefinitionsView.css";
import Definition from "./Definition.js"
import { capitalize } from "../utils.js";
import React from "react";


function DefinitionsView(props) {
    var definitions = Array();
    if (props.parentState.json_data != null) {
        props.parentState.json_data.forEach((elem) => {
            definitions.push(( <Definition partOfSpeech={capitalize(elem.partOfSpeech)} definition={elem.definition} example={elem.example} /> ));
        });
    }
    return (
        <div className="DefinitionsView">
            {definitions}
        </div>
    );
}


export default DefinitionsView;
