import { combineReducers } from "redux";
import accountReducer from "./reducer/accountReducer";

const reducers = combineReducers({
    account: accountReducer,
});

export default reducers;