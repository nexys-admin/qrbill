import React, {useState} from "../_snowpack/pkg/react.js";
import * as UI from "../_snowpack/pkg/@nexys/uibs4.js";
import * as Convert from "../lib/convert.js";
import {sampleArray} from "../lib/convert.data.js";
const sample = sampleArray.join("\n");
function Ui() {
  const [form, handleChange] = useState({text: sample});
  const handleSubmit = (e) => {
    e.preventDefault();
    const convert = Convert.arrayToJson(form.text.split("\n"));
    handleChange({...form, convert});
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "Converts output (break line separated text) into JSON"), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6"
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(UI.Form.Textarea, {
    onChange: (v) => handleChange({...form, text: v.value}),
    name: "text",
    value: form.text
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Convert"))), /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6"
  }, /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(form.convert, null, 2)))));
}
export default Ui;
