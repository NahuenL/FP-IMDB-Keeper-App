import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose } from "redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";

import "core-js/stable";
import "regenerator-runtime/runtime";

import App from "./routes/App";

const initialState = {
  watchedMovies: [],
  sectionActive: "Movies",
};

const middlewars = [];
if (process.env.NODE_ENV === "development") {
  middlewars.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewars))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
