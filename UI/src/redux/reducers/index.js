// Configures the store to combine multiple state reducers. In this case the store only consists of state for directories

import { combineReducers } from "redux";
import directories from "./directories";

export default combineReducers({ directories });
