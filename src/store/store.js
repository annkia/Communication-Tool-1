import { createStore, applyMiddleware } from "redux";
import { postReducer } from "../reducers/postReducers";
import { profileReducer } from "../reducers/profileReducers";

import thunk from "redux-thunk";

export const store = createStore(postReducer, applyMiddleware(thunk));

//export const store = createStore(profileReducer, applyMiddleware(thunk));

