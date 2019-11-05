import { combineReducers } from "redux";

import searchReducer from "./searchReducer";
import hubReducer from "./hubReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  hub: hubReducer,
});

export default rootReducer;
