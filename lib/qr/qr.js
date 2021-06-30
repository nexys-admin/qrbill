import React from "../../_snowpack/pkg/react.js";
import QRCode from "../../_snowpack/pkg/qrcode.react.js";
const Qr = (props) => {
  const {value, size} = props;
  const config = {
    fgColor: "#000000",
    bgColor: "#ffffff",
    level: "M",
    renderAs: "svg",
    includeMargin: false
  };
  return /* @__PURE__ */ React.createElement(QRCode, {
    value,
    size,
    fgColor: config.fgColor,
    bgColor: config.bgColor,
    level: config.level,
    renderAs: config.renderAs,
    includeMargin: config.includeMargin
  });
};
export default Qr;
