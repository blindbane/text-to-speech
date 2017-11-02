import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import getVoices from "./getVoices";

getVoices().then(voices => {
  ReactDOM.render(
    React.createElement(App, {voices}),
    document.getElementById("root"),
  );
  registerServiceWorker();
});
