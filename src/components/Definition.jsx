import React from "react";
import { capitalize } from "../utils";
import "../styles/Definition.css";


function Definition(props) {
    return (
        <div className="Definition">
            <p id="definition"><span id="partOfSpeech">{capitalize(props.partOfSpeech)}:&nbsp;</span>
            <ol className="definitionsList">
                {props.definition.map((elem, i) => (
                    <div key={i}>
                        <li>{elem.definition}</li>
                        {elem.example !== "" ? <i className="example"><q>{elem.example}</q></i> : null}
                    </div>
                ))}
            </ol>
            </p>
        </div>
    );
}

export default Definition;
