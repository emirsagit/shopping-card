import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./js/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "./js/data/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router basename="/shopping-card">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
