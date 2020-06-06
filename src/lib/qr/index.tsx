import React from "react";

import * as T from "../type";
import * as Convert from "../convert";
import * as Validate from "../validate";

import ExtraInformation from "./extra";
import Qr from "./qr";
import Cross from "./cross";

// swiss qr code should be 46 x 46 mm and the cross 7 x 7 mmm in the middle

// this is a quick wrapper around the qrcode generator for the generation f qqr code with JSON cntent
const SwissQr = (props: { qr: T.QR; withExtraInfo?: boolean }) => {
  const { qr, withExtraInfo = false } = props;

  const s = Validate.validateBoolean(qr);

  if (!s) {
    return (
      <p>
        <i>Invalid Input</i>
      </p>
    );
  }

  const value = Convert.jsonToBreakSepFormat(qr);

  const size = 300;

  return (
    <div style={{ position: "relative" }}>
      <Qr value={value.join("\n")} size={size} />
      <Cross size={size} />
      {withExtraInfo ? <ExtraInformation qr={qr} size={size} /> : null}
    </div>
  );
};

export default SwissQr;
