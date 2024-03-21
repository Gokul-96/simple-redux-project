import { combineReducers } from "redux";
import addUserReducer from "./addUserReducer";

// If we want edit ,delete,update then import and make as one variable I mean combined one pass it to store
const reducers =combineReducers({
    addUserReducer, addUserReducer,
});

export default reducers;