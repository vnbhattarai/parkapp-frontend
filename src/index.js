import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
);
// registerServiceWorker();
