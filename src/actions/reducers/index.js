import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import phoneReducer from "./phoneReducer";

const rootReducer = combineReducers({
  phone: phoneReducer,
  filter: filterReducer,
});

export default rootReducer;