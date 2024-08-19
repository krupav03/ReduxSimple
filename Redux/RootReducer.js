import counterReducer from "./Reducers";
import { combineReducers } from "redux";
{console.log('root reducers')}
const rootReducer = combineReducers ({
    counter : counterReducer
});

export default rootReducer;