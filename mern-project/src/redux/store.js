import { createStore } from "redux";
import { combinedReducers } from "./combineReducer";

export const store = createStore(combinedReducers)