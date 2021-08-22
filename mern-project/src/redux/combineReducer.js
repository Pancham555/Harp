import { combineReducers } from "redux";
import { reducer, authReducer } from './reducer'


export const combinedReducers = combineReducers({
    reducer, authReducer
})