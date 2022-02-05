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
import React from 'react';
import store from "./store";
import { Provider } from 'react-redux';


function Index() {
    const [tokenState, setTokenState] = useState({
        token: window.localStorage.getItem("token")
    });
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/definitions" element={<Definitions />} />
                    <Route path="/account" element={tokenState.token === null ? <Navigate to="/login" /> : <ProfilePage />} />
                    <Route path="/login" element={<LoginForm setTokenState={setTokenState}/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

const rootElement = document.getElementById("root");
render(<Index />, rootElement);

