import React, {useState} from "../_snowpack/pkg/react.js";
import QR from "../lib/qr/index.js";
import {sampleJson} from "../lib/convert/data.js";
import Form from "./form.js";
import * as UI from "../_snowpack/pkg/@nexys/uibs4.js";
import Print from "./print.js";
const SwissQr = () => {
  const [data, setData] = useState(sampleJson);
  const [checked, setChecked] = useState(false);
  const refreshQr = (x) => {
    setData({...x});
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6"
  }, /* @__PURE__ */ React.createElement("h3", null, "Generated Swiss QR"), /* @__PURE__ */ React.createElement(QR, {
    qr: data,
    withExtraInfo: checked
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: () => Print(data),
    type: "button",
    className: "btn btn-default"
  }, /* @__PURE__ */ React.createElement(UI.Components.Icon, {
    name: "print"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-md-3"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    checked,
    onClick: () => setChecked(!checked)
  }), " ", "with extra information"), /* @__PURE__ */ React.createElement(Form, {
    initial: sampleJson,
    onRefresh: refreshQr
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-md-3"
  }, /* @__PURE__ */ React.createElement("h3", null, "QR Content ", /* @__PURE__ */ React.createElement("small", null, "as JSON")), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(data, null, 2))));
};
export default SwissQr;
