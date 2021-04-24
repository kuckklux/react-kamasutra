import reportWebVitals from "./reportWebVitals";
import store from "./Redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import s from "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "./StoreContext";

let _callSubscriber = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

_callSubscriber(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

store.subscribe(() => {
  let state = store.getState();
  _callSubscriber(state);
});
