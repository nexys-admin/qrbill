import React, {useState} from "../_snowpack/pkg/react.js";
import * as UI from "../_snowpack/pkg/@nexys/uibs4.js";
import * as Validate from "../lib/validate.js";
import {sampleJson} from "../lib/convert/data.js";
function Ui() {
  const [form, handleChange] = useState({
    text: JSON.stringify(sampleJson, null, 2)
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = Validate.validate(JSON.parse(form.text));
    handleChange({...form, validate});
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "Validate JSON with JOI"), /* @__PURE__ */ React.createElement("p", null, "see source", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/Nexysweb/qrbill/blob/master/src/lib/validate.js"
  }, "here")), /* @__PURE__ */ React.createElement("div", {
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
  }, "Validate"))), /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6"
  }, /* @__PURE__ */ React.createElement("h4", null, "Output of JOI after validating"), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(form.validate, null, 2)))));
}
export default Ui;
