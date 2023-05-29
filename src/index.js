import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { searchRobots } from './reducers';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import "tachyons";

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

root.render(
    <Provider store={store} >
        <App />
    </Provider>);

reportWebVitals();
