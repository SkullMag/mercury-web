import React from "react";
import "../styles/Definition.css";


function Definition(props) {
    
    const exampleHead = props.example ? (<span id="exampleHead">Example:&nbsp;</span>) : null;
            
    return (
        <div className="Definition">
            <p id="definition"><span id="partOfSpeech">{props.partOfSpeech}:&nbsp;</span>
{props.definition}</p>
            
            <p id="example">{exampleHead}{props.example}</p>
        </div>
    );
}

export default Definition;
