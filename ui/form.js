import React, {useState} from "../_snowpack/pkg/react.js";
import * as UI from "../_snowpack/pkg/@nexys/uibs4.js";
import * as Utils from "../_snowpack/pkg/@nexys/utils.js";
const {Form} = UI;
const InputWrapper = (props) => {
  const {name, onChange, form, errors = {}} = props;
  const value = Utils.ds.get(name, form);
  return /* @__PURE__ */ React.createElement(Form.Wrapper, {
    name,
    errors,
    label: name
  }, /* @__PURE__ */ React.createElement(Form.Input, {
    name,
    onChange,
    placeholder: name,
    value
  }));
};
function QRBillForm(props) {
  const [form, changeForm] = useState(props.initial || {});
  const handleChange = (v) => {
    const f = Utils.ds.set(v.name, v.value, form);
    changeForm(f);
    props.onRefresh(form);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRefresh(form);
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("h5", null, "CdtrInf"), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "CdtrInf.IBAN",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "CdtrInf.Cdtr.AdrTp",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "CdtrInf.Cdtr.Name",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "CdtrInf.Cdtr.StrNameOrAdrLine1",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "CdtrInf.Cdtr.StrNameOrAdrLine2",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "CdtrInf.Cdtr.PstCd",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "CdtrInf.Cdtr.TmwNm",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "CdtrInf.Cdtr.Ctry",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement("h5", null, "CcyAmt"), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "CcyAmt.Amt",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "CcyAmt.Ccy",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement("h5", null, "UltmtCdtr"), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtCdtr.AdrTp",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtCdtr.Name",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtCdtr.StrNameOrAdrLine1",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtCdtr.StrNameOrAdrLine2",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtCdtr.PstCd",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtCdtr.TmwNm",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtCdtr.Ctry",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement("h5", null, "UltmtDbtr"), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtDtr.AdrTp",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtDtr.Name",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtDtr.StrNameOrAdrLine1",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtDtr.StrNameOrAdrLine2",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtDtr.PstCd",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtDtr.TmwNm",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "UltmtDtr.Ctry",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement("h5", null, "RmtInf"), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "RmtInf.Tp",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "RmtInf.Ref",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "RmtInf.AddInf.Ustrd",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "RmtInf.AddInf.Trailer",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "RmtInf.AddInf.StrdBkgInf",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement("h5", null, "AltPmtInf"), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "AltPmtInf.AltPmt1",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement(InputWrapper, {
    name: "AltPmtInf.AltPmt2",
    form,
    onChange: handleChange
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Generate"));
}
export default QRBillForm;
