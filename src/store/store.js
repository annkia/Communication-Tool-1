import { createStore, applyMiddleware, combineReducers } from "redux";
import { postReducer } from "../reducers/postReducers";
import { profileReducer } from "../reducers/deleteProfileReducer";

import thunk from "redux-thunk";

const appReducer = combineReducers({postReducer, profileReducer})

export const store = createStore(appReducer, applyMiddleware(thunk));


  


//thunk to middleware, który umożliwia wywoływanie twórców akcji, które zwracają funkcję zamiast obiektu akcji.
//export const store1 = createStore(profileReducer, applyMiddleware(thunk));

// const store = createStore(
//     todoApp,
//     applyMiddleware(
//       rafScheduler,
//       timeoutScheduler,
//       thunk,
//       vanillaPromise,
//       readyStatePromise,
//       logger,
//       crashReporter
//     )
//   )