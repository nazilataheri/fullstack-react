import React from "react";
import ReactDOM from "react-dom";
const StateApi = require("state-api");

import App from "components/App";

const store = new StateApi(window.initialData);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
