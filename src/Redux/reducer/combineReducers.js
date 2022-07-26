import { combineReducers } from "redux";
import courseReducer from "./courseReducer";

const reducers = combineReducers({courseReducer:courseReducer})

export default reducers;