import React from "react";

import * as T from "../type";

const ExtraInformation = (props: { size: number; qr: T.QR }) => {
  const sep = 17;
  const { size, qr } = props;
  return (
    <>
      <div style={{ position: "absolute" }}>
        <p>
          <b>Currency</b>
          <br />
          {qr.CcyAmt.Ccy}
        </p>
      </div>

      <div style={{ position: "absolute", left: 100 }}>
        <p>
          <b>Amount</b>
          <br />
          {qr.CcyAmt.Amt}
        </p>
      </div>

      <div style={{ position: "absolute", left: size + sep, top: 0 - 5 }}>
        <p>
          <b>Account/Payable to</b>
          <br />
          {qr.CdtrInf.IBAN}
          {addressText(qr.CdtrInf.Cdtr)}
        </p>

        <p>
          <b>Reference</b>
          <br />
          {qr.RmtInf.Ref}
        </p>

        {/*<p>
          <b>Additional Information</b>
          <br />
          00 0000
        </p>*/}

        {debitorText(qr.UltmtDtr)}
      </div>
    </>
  );
};

const debitorText = (d?: T.Address) => {
  if (!d) {
    return null;
  }

  return (
    <p>
      <b>Payable By</b>
      {addressText(d)}
    </p>
  );
};

const addressText = (d: T.Address) => {
  return (
    <>
      <br />
      {d.Name}
      <br />
      {d.StrNameOrAdrLine1} {d.StrNameOrAdrLine2}
      <br />
      {d.TmwNm}
    </>
  );
};

export default ExtraInformation;
