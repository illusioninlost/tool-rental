import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import toolForm from './containers/form'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
    <Router>
    <Switch>
    <Route exact path='/' component={App}/>
    <Route exact path='/tools/new' component={toolForm}/>
    </Switch>
    </Router>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
