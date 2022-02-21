import './index.css';
import { render } from "react-dom";
import { 
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import React from 'react';
import store from "./store";
import { Provider } from 'react-redux';
import { fetchUser } from "./store/slices/auth";

import Header from './components/Header';
import ProfilePage from './components/ProfilePage';
import Definitions from './components/Definitions';
import LoginForm from './components/LoginForm';
import SignUpForm from "./components/SignUpForm";
import VerificationCodePage from "./components/VerificationCodePage";
import Collections from "./components/Collections";
import CollectionWords from './components/CollectionWords';

store.dispatch(fetchUser);

function Index() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/definitions" element={<Definitions />} />
                    <Route path="/account" element={<ProfilePage />} />
                    <Route path="/login" element={<LoginForm/>} />
                    <Route path="/signup" element={<SignUpForm />} />
                    <Route path="/verification" element={<VerificationCodePage />} />
                    <Route path="/collections/:username/:collectionName" element={<CollectionWords />} />
                    <Route path="/collections" element={<Collections />} />
               </Routes>
            </BrowserRouter>
        </Provider>
    );
}

const rootElement = document.getElementById("root");
render(<Index />, rootElement);

