import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { createStore } from "redux";
import { rootReducer } from "./reducers/CombineReducers";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
