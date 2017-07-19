import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./index.css";
// import { Provider } from "react-redux";
// import store from "./store";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById("root"));
// registerServiceWorker();
