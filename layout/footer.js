import React from "../_snowpack/pkg/react.js";
import {version, githubUrlVersion} from "../config.js";
const Footer = () => /* @__PURE__ */ React.createElement("footer", {
  className: "footer"
}, /* @__PURE__ */ React.createElement("div", {
  className: "container"
}, /* @__PURE__ */ React.createElement("span", {
  className: "text-muted"
}, /* @__PURE__ */ React.createElement("a", {
  href: githubUrlVersion
}, version))));
export default Footer;
