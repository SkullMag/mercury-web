import "../styles/DefinitionsView.css";
import Definition from "./Definition.jsx"
import { capitalize } from "../utils.js";
import React from "react";


function DefinitionsView(props) {
    var definitions = [];
    if (props.parentState.json_data != null) {
        var def = props.parentState.json_data.definitions
        for (var partOfSpeech in def) {
            definitions.push((<Definition partOfSpeech={capitalize(partOfSpeech)} definition={def[partOfSpeech]} example={def[partOfSpeech][0].example} />))
            // def[partOfSpeech].forEach((definition) => {
            //     definitions.push((<Definition partOfSpeech={capitalize(partOfSpeech)} definition={definition.definition} example={definition.example} />))
            // })
        }
        // props.parentState.json_data.definitions.forEach((elem) => {
        //     definitions.push(( <Definition partOfSpeech={capitalize(elem.partOfSpeech)} definition={elem.definition} example={elem.example} /> ));
        // });
    }
    return (
        <div className="DefinitionsView">
            {definitions.length > 0 ? definitions : <p id="definition"><span id="partOfSpeech">Try to search for another word</span></p>}
        </div>
        
    );
}


export default DefinitionsView;
