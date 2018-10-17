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
import {composeWithDevTools} from 'redux-devtools-extension';
import editForm from './containers/editForm';
import deleteTool from './containers/deleteTool';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )

ReactDOM.render(
    <Provider store={store}>
    <Router>
    <Switch>
    <Route exact path='/' component={App}/>
    <Route exact path='/tools/new' component={toolForm}/>
    <Route exact path='/tools/:id' component={editForm}/>
    <Route exact path='/tools/:id/delete' component={deleteTool}/>
    </Switch>
    </Router>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
