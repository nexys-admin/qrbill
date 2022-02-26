import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {Router} from "./_snowpack/pkg/react-router-dom.js";
import * as History from "./_snowpack/pkg/history.js";
import RouterApp from "./router.js";
const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL || "";
const history = History.createBrowserHistory({
  basename
});
ReactDOM.render(/* @__PURE__ */ React.createElement(Router, {
  history
}, /* @__PURE__ */ React.createElement(RouterApp, null)), document.getElementById("root"));
