import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "ui-neumorphism/dist/index.css";
import Contexts from "./contexts/Contexts";

ReactDOM.render(
  <React.StrictMode>
    <Contexts>
      <App />
    </Contexts>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
