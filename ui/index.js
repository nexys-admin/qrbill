import React from "../_snowpack/pkg/react.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import * as UI from "../_snowpack/pkg/@nexys/uibs4.js";
import {githubUrl} from "../config.js";
export default () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here you can play with different tools to understand the Swiss QR Bill"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, /* @__PURE__ */ React.createElement(Link, {
  to: "/qr/read"
}, "Click here"), " if you would like to read a Swiss QR Code")), /* @__PURE__ */ React.createElement("p", null, "Browse the menu for more options"), /* @__PURE__ */ React.createElement("p", null, "Do you need help with the transition to the new ", /* @__PURE__ */ React.createElement("a", {
  href: "https://www.six-group.com/interbank-clearing/en/home/standardization/payment-slips.html"
}, "QR Bill"), " and in general ", /* @__PURE__ */ React.createElement("a", {
  href: "https://www.six-group.com/interbank-clearing/en/home/standardization/iso-payments.html"
}, "ISO20022"), "? Please get in touch at ", /* @__PURE__ */ React.createElement("a", {
  href: "info@nexys.ch"
}, "info [@] nexys.ch")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
  href: githubUrl
}, /* @__PURE__ */ React.createElement(UI.Components.Icon, {
  name: "code"
}), " Source"), " available. Contributions are welcome.", /* @__PURE__ */ React.createElement("small", null, "Make sure you read and understand the ", /* @__PURE__ */ React.createElement("a", {
  href: "https://github.com/nexys-admin/qrbill/blob/master/LICENSE"
}, "license terms"), ".")));
