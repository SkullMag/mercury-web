import './index.css';
import { render } from "react-dom";
import { 
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import React from 'react';
import { store } from "./store";
import { Provider } from 'react-redux';
import { fetchUser } from "./store/slices/auth";

import Header from './components/Header';
import ProfilePage from './components/ProfilePage';
import Dictionary from './components/Dictionary';
import LoginForm from './components/LoginForm';
import SignUpForm from "./components/SignUpForm";
import VerificationCodePage from "./components/VerificationCodePage";
import Collections from "./components/Collections";
import CollectionWords from './components/CollectionWords';
import { Suspense } from 'react';
import './i18n'
import Learning from './components/Learning';

store.dispatch(fetchUser);

function Index() {
    return (
        <Suspense fallback="loading">
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Navigate to="/dictionary" />} />
                        <Route path="/dictionary" element={<Dictionary />} />
                        <Route path="/account/:username" element={<ProfilePage />} />
                        <Route path="/login" element={<LoginForm/>} />
                        <Route path="/signup" element={<SignUpForm />} />
                        <Route path="/verification" element={<VerificationCodePage />} />
                        <Route path="/collections/:username/:collectionName" element={<CollectionWords />} />
                        <Route path="/collections" element={<Collections />} />
                        <Route path="/learn/:authorUsername/:collectionName" element={<Learning />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        </Suspense>
    );
}

const rootElement = document.getElementById("root");
render(<Index />, rootElement);

