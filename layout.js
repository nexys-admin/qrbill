import React from "./_snowpack/pkg/react.js";
import {Link} from "./_snowpack/pkg/react-router-dom.js";
const style = {
  borderTop: "1px solid #e5e5e5",
  borderBottom: "1px solid #e5e5e5",
  boxShadow: "0 .25rem .75rem rgba(0, 0, 0, .05)"
};
const title = "Swiss QR Bill";
const prefix = "";
const menus = [
  {name: "QR Reader", link: "/qr/read"},
  {name: "QR Writer", link: "/qr/write"},
  {name: "Convert", link: "/convert"},
  {name: "Validate", link: "/validate"}
];
function Layout(props) {
  const header = /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    style,
    className: "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "my-0 mr-md-auto font-weight-normal"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: prefix + "/"
  }, title)), /* @__PURE__ */ React.createElement("nav", {
    className: "my-2 my-md-0 mr-md-3"
  }, menus.map((menu, i) => /* @__PURE__ */ React.createElement(Link, {
    className: "p-2 text-dark",
    key: i,
    to: menu.link
  }, menu.name)))));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, header, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, props.children));
}
export default Layout;
