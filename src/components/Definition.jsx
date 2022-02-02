import React from "react";
import "../styles/Definition.css";


function Definition(props) {
    const exampleHead = props.example ? (<span id="exampleHead">Example:&nbsp;</span>) : null;

    var definitions = []
    props.definition.forEach((elem) => {
        definitions.push((
            <div>
                <li>{elem.definition}</li>
                {elem.example !== "" ? <i><q style={{color: "#6c757d"}}>{elem.example}</q></i> : null}
            </div>
        ))
    })
         
    return (
        <div className="Definition">
            <p id="definition"><span id="partOfSpeech">{props.partOfSpeech}:&nbsp;</span>
            <ol className="definitionsList">
                {definitions}
            </ol>
            </p>
        </div>
    );
}

export default Definition;
