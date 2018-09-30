import {combineReducers} from 'redux';
import toolsReducer from './tools_reducer';

const rootReducer = combineReducers({
    tools: toolsReducer,
})

export default rootReducer;