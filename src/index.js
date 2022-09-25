import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {OptionsContainer} from "./components/OptionsContainer"
import {OptionsContainerContextProvider} from "./context/OptionsContainerContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <OptionsContainerContextProvider>
        <App />
        <OptionsContainer/>
    </OptionsContainerContextProvider>

);



