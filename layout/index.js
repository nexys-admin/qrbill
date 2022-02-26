import React from "../_snowpack/pkg/react.js";
import Header from "./header.js";
import Footer from "./footer.js";
const Layout = ({children}) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("div", {
  className: "container"
}, children), /* @__PURE__ */ React.createElement(Footer, null));
export default Layout;
