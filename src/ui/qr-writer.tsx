import React, { useState } from "react";

import QR from "../lib/qr";
import { sampleJson } from "../lib/convert/data";
import * as T from "../lib/type";

import Form from "./form";
import * as UI from "@nexys/uibs4";
import Print from "./print";

const SwissQr = () => {
  const [data, setData] = useState<T.QR>(sampleJson);
  const [checked, setChecked] = useState<boolean>(false);

  const refreshQr = (x: T.QR) => {
    setData({ ...x });
  };
  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Generated Swiss QR</h3>
        <QR qr={data} withExtraInfo={checked} />
        <button
          onClick={() => Print(data)}
          type="button"
          className="btn btn-default"
        >
          <UI.Components.Icon name="print" />
        </button>
      </div>
      <div className="col-md-3">
        <p>
          <input
            type="checkbox"
            checked={checked}
            onClick={() => setChecked(!checked)}
          />{" "}
          with extra information
        </p>
        <Form initial={sampleJson} onRefresh={refreshQr} />
      </div>
      <div className="col-md-3">
        <h3>
          QR Content <small>as JSON</small>
        </h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default SwissQr;
