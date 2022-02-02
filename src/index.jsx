import './index.css';
import { render } from "react-dom";
import { 
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';
import ProfilePage from './components/ProfilePage';
import Definitions from './components/Definitions';
import LoginForm from './components/LoginForm';


function Index() {
    const [tokenState, setTokenState] = useState({
        token: window.localStorage.getItem("token")
    });
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/definitions" element={<Definitions />} />
                <Route path="/account" element={tokenState.token === null ? <Navigate to="/login" /> : <ProfilePage />} />
                <Route path="/login" element={<LoginForm setTokenState={setTokenState}/>} />
            </Routes>
        </BrowserRouter>
    );
}

const rootElement = document.getElementById("root");
render(<Index />, rootElement);

