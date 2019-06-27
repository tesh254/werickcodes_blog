import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "../reducers";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(thunk));
  }
  return applyMiddleware(...middleware);
};

const initStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    bindMiddleware(thunk)
  );
};

export default initStore;
