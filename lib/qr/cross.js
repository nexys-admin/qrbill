import React from "../../_snowpack/pkg/react.js";
export default (props) => {
  const {size} = props;
  const radius = size / 46 * 7;
  const ratioCross = 1.1 / 5;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("svg", {
    style: {
      margin: "0 auto",
      position: "absolute",
      top: 150 - radius + "px",
      left: 150 - radius + "px"
    }
  }, /* @__PURE__ */ React.createElement("rect", {
    x: radius / 2 - 1 / 10 * radius,
    y: radius / 2 - 1 / 10 * radius,
    width: radius * 1.2,
    height: radius * 1.2,
    r: radius,
    fill: "white"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: radius / 2,
    y: radius / 2,
    width: radius,
    height: radius,
    r: radius,
    fill: "black"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: radius / 2 + radius / 2 - ratioCross / 2 * radius,
    y: radius / 2 + ratioCross / 2 * radius,
    width: ratioCross * radius,
    height: (1 - ratioCross) * radius,
    fill: "white"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: radius / 2 + ratioCross / 2 * radius,
    y: radius / 2 + radius / 2 - ratioCross / 2 * radius,
    width: (1 - ratioCross) * radius,
    height: ratioCross * radius,
    fill: "white"
  })));
};
