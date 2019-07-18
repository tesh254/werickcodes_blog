import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reducer from "../reducers";

const bindMiddleware = middleware => {
  return applyMiddleware(...middleware);
};

const initStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  );
};

export default initStore;
