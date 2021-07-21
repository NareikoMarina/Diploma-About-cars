import { combineReducers } from "redux";
import brandReducer from "./carBrandReduser";

const rootReducer = combineReducers({
    brandReducer,
});

export default rootReducer;
