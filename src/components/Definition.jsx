import React from "react";
import { capitalize } from "../utils";
import "../styles/Definition.css";


function Definition(props) {
    var definitions = []
    props.definition.forEach((elem) => {
        definitions.push((
            <div>
                <li>{elem.definition}</li>
                {elem.example !== "" ? <i className="example"><q>{elem.example}</q></i> : null}
            </div>
        ))
    })
         
    return (
        <div className="Definition">
            <p id="definition"><span id="partOfSpeech">{capitalize(props.partOfSpeech)}:&nbsp;</span>
            <ol className="definitionsList">
                {definitions}
            </ol>
            </p>
        </div>
    );
}

export default Definition;
