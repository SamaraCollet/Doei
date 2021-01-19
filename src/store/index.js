import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import campaignsReducer from "./ducks/campaigns";

const reducers = combineReducers({
  campaigns: campaignsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
