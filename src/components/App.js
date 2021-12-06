import WordInputForm from './WordInput.js';
import DefinitionsView from './DefinitionsView.js';
import Header from "./Header.js";
import "../styles/App.css"
import React from "react";


function App() {
    const [state, setState] = React.useState({
        json_data: null 
    });
    return (
        <div className="App">
            <Header />
            <section>
                <WordInputForm setParentState={setState}/>
                <DefinitionsView parentState={state}/>
            </section>
        </div>
    );

}


export default App;
