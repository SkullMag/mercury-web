import WordInputForm from './WordInput.jsx';
import DefinitionsView from './DefinitionsView.jsx';
import "../styles/Definitions.css"
import React from "react";


function Definitions() {
    const [state, setState] = React.useState({
        json_data: null,
        isLoading: false
    });

    return (
        <div className="Definitions">
            <section>
                <WordInputForm setParentState={setState} parentState={state}/>
                {state.json_data !== null ? <DefinitionsView json_data={state.json_data} addToCollectionButton={true} className="card" style={{marginBottom: "200px"}} /> : null}
            </section>
        </div>
    );

}


export default Definitions;
