import { combineReducers } from "redux";
import accountReducer from "./reducer/accountReducer";
import userReducer from "./reducer/userReducer";

const reducers = combineReducers({
    account: accountReducer,
    user: userReducer,
});

export default reducers;