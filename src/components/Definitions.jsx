import WordInputForm from './WordInput.jsx';
import DefinitionsView from './DefinitionsView.jsx';
import "../styles/Definitions.css"
import React from "react";


function Definitions() {
    const [state, setState] = React.useState({
        json_data: null 
    });
    return (
        <div className="App">
            <section>
                <WordInputForm setParentState={setState}/>
                <DefinitionsView parentState={state}/>
            </section>
        </div>
    );

}


export default Definitions;
