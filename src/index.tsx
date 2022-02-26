import React from "react";
import ReactDOM from "react-dom";

import { Router } from "react-router-dom";
import * as History from "history";

import RouterApp from "./router";

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
