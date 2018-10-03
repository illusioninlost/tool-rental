import {combineReducers} from 'redux';
import toolsReducer from './tools_reducer';
import cartsReducer from './carts_reducer';

const rootReducer = combineReducers({
    tools: toolsReducer,
    carts: cartsReducer
})

export default rootReducer;