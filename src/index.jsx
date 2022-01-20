import './index.css';
import Definitions from './components/Definitions';
import LoginForm from './components/LoginForm';
import { render } from "react-dom";
import { 
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Header from './components/Header';
import { useState } from 'react';


const rootElement = document.getElementById("root");

function Index() {
    const [state, setState] = useState({
        activeLink: 0
    });

    return (
        <BrowserRouter>
            <Header activeLink={state.activeLink}/>
            <Routes>
                <Route path="/definitions" element={<Definitions />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    );
}
render(<Index />, 
       rootElement);

