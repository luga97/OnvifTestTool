import { combineReducers } from 'redux';
import networkInterface from './networkInterface';
import loginBlock from './loginBlock';

const rootReducer = combineReducers({
  networkInterface, loginBlock
});

export default rootReducer;