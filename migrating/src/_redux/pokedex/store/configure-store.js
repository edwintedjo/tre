import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  return store;
}
