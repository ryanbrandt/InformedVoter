import { combineReducers } from "redux";

import systemReducer from "./systemReducer";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";
import hubReducer from "./hubReducer";

const rootReducer = combineReducers({
  system: systemReducer,
  auth: authReducer,
  search: searchReducer,
  hub: hubReducer,
});

export default rootReducer;
