import { combineReducers } from "redux";

import systemReducer from "./systemReducer";
import searchReducer from "./searchReducer";
import hubReducer from "./hubReducer";

const rootReducer = combineReducers({
  system: systemReducer,
  search: searchReducer,
  hub: hubReducer,
});

export default rootReducer;
