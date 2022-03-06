import WordInputForm from './WordInput.jsx';
import DefinitionsView from './DefinitionsView.jsx';
import "../styles/Dictionary.css"
import React from "react";


export default function Dictionary() {
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
