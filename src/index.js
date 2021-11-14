import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
