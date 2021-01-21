import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import campaignsReducer from "./ducks/campaigns";
import userReducer from "./ducks/user";

const reducers = combineReducers({
  campaigns: campaignsReducer,
  users: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
