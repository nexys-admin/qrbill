import React from "../../_snowpack/pkg/react.js";
const ExtraInformation = (props) => {
  const sep = 17;
  const {size, qr} = props;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    style: {position: "absolute"}
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Currency"), /* @__PURE__ */ React.createElement("br", null), qr.CcyAmt.Ccy)), /* @__PURE__ */ React.createElement("div", {
    style: {position: "absolute", left: 100}
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Amount"), /* @__PURE__ */ React.createElement("br", null), qr.CcyAmt.Amt)), /* @__PURE__ */ React.createElement("div", {
    style: {position: "absolute", left: size + sep, top: 0 - 5}
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Account/Payable to"), /* @__PURE__ */ React.createElement("br", null), qr.CdtrInf.IBAN, addressText(qr.CdtrInf.Cdtr)), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Reference"), /* @__PURE__ */ React.createElement("br", null), qr.RmtInf.Ref), debitorText(qr.UltmtDtr)));
};
const debitorText = (d) => {
  if (!d) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Payable By"), addressText(d));
};
const addressText = (d) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("br", null), d.Name, /* @__PURE__ */ React.createElement("br", null), d.StrNameOrAdrLine1, " ", d.StrNameOrAdrLine2, /* @__PURE__ */ React.createElement("br", null), d.TmwNm);
};
export default ExtraInformation;
