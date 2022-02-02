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
                {/* {state.isLoading ? <LoadingIndicator /> : null} */}
                {state.json_data !== null ? <DefinitionsView parentState={state}/> : null}
            </section>
        </div>
    );

}


export default Definitions;
