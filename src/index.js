import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';


const store = createStore(rootReducer)

ReactDOM.render(
    <Provider>
    <App />
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
