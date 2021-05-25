import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import HookApp from "./HookApp";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <HookApp /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
