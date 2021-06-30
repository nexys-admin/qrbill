import React, {useState} from "../_snowpack/pkg/react.js";
import QrReader from "../_snowpack/pkg/react-qr-reader.js";
import * as Validate from "../lib/validate.js";
import {arrayToJson} from "../lib/convert.js";
export default () => {
  const [result, setResult] = useState("no result");
  const show = true;
  const handleScan = (data) => {
    if (data) {
      console.log(data);
      const arr = data.split("\n");
      const j = arrayToJson(arr);
      console.log(j);
      if (Validate.validateBoolean(j)) {
        setResult(j);
      } else {
        setResult("The QRr Code read is not a valid Swiss QRBIll");
      }
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  const renderReader = () => {
    if (show) {
      return /* @__PURE__ */ React.createElement(QrReader, {
        delay: 300,
        onError: handleError,
        onScan: handleScan,
        style: {width: "300px"}
      });
    }
    return null;
  };
  return /* @__PURE__ */ React.createElement("div", null, renderReader(), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(result, null, 2)));
};
