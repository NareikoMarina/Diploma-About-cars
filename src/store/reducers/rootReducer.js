import { combineReducers } from "redux";
import brandReducer from "./carBrandReducer";
import modelReducer from "./carModelReducer";
import carSpecReducer from "./carSpecificationsReducer";

const rootReducer = combineReducers({
  brandReducer,
  modelReducer,
  carSpecReducer,
});

export default rootReducer;
