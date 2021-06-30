import React, {useState} from "../_snowpack/pkg/react.js";
import * as UI from "../_snowpack/pkg/@nexys/uibs4.js";
import * as Convert from "../lib/convert/index.js";
import {sampleArray} from "../lib/convert/data.js";
const sample = sampleArray.join("\n");
const Ui = () => {
  const [text, setText] = useState(sample);
  const [converted, setConverted] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const c = Convert.stringToJson(text);
    setConverted(c);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "Converts output (break line separated text) into JSON"), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6"
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(UI.Form.Textarea, {
    onChange: (v) => setText(v.value),
    name: "text",
    value: text
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Convert"))), converted && /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6"
  }, /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(converted, null, 2)), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setConverted(void 0),
    className: "btn btn-primary"
  }, "Reset"))));
};
export default Ui;
