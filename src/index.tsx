import React from "react";
import ReactDOM from "react-dom";

import { Router } from "react-router-dom";
import * as History from "history";

import RouterApp from "./router";
import * as serviceWorker from "./serviceWorker";

const basename: string = import.meta.env.SNOWPACK_PUBLIC_URL || "";

const history = History.createBrowserHistory({
  basename,
});

ReactDOM.render(
  <Router history={history}>
    <RouterApp />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
