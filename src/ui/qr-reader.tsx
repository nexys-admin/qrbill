import React, { useState } from "react";
import QrReader from "react-qr-reader";

import * as Validate from "../lib/validate";
import { arrayToJson } from "../lib/convert";
import * as T from "../lib/type";

export default () => {
  //const [show, setShow] = useState<boolean>(true);
  const [result, setResult] = useState<any>("no result");

  const show = true;

  const handleScan = (data: any) => {
    if (data) {
      const arr = data.split("\n");
      const j: T.QR = arrayToJson(arr);

      console.log(j);

      if (Validate.validateBoolean(j)) {
        setResult(j);
      } else {
        setResult("The QR Code read is not a valid Swiss QRBIll");
      }
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  const renderReader = () => {
    if (show) {
      return (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "300px" }}
        />
      );
    }

    return null;
  };

  /*const toggleReader = () => {
    setShow(!show);
  };*/

  return (
    <div>
      {renderReader()}
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};
