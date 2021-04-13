import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import DataStore from "./dataStore";
import App from './App';
import './index.css';

window.onload = () => {
    hydrate(
        <Provider store={DataStore}>
            <Router>
                <App />
            </Router>
        </Provider>,
        document.getElementById('root')
    );
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
