import React from "./_snowpack/pkg/react.js";
import {Switch, Route, withRouter} from "./_snowpack/pkg/react-router-dom.js";
import Layout from "./layout.js";
import Convert from "./ui/convert.js";
import Validate from "./ui/validate.js";
import QrReader from "./ui/qr-reader.js";
import QrWriter from "./ui/qr-writer.js";
import Main from "./ui/index.js";
const NotFound = () => /* @__PURE__ */ React.createElement("p", null, "Page Not Found");
function Router(props) {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    component: Main
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/qr/read",
    component: QrReader,
    props
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/qr/write",
    component: () => /* @__PURE__ */ React.createElement(QrWriter, null),
    props
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/convert",
    component: Convert,
    props
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/validate",
    component: Validate,
    props
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    component: NotFound
  })));
}
export default withRouter(Router);
