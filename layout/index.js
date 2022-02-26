import React from "../_snowpack/pkg/react.js";
import {version, githubUrlVersion} from "../config.js";
import Header from "./header.js";
const Layout = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("div", {
  className: "container"
}, props.children), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement("a", {
  href: githubUrlVersion
}, version))));
export default Layout;
