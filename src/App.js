import logo from './logo.svg';
import WordInputForm from './components/WordInput.js';
import DefinitionsView from './components/DefinitionsView.js';
import Header from "./components/Header.js";
import "./styles/App.css"
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
