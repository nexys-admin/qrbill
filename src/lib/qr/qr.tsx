import React from "react";

import QRCode from "qrcode.react";
import { Config } from "./type";

const Qr = (props: { value: string; size: number }) => {
  const { value, size } = props;

  const config: Config = {
    fgColor: "#000000",
    bgColor: "#ffffff",
    level: "M",
    renderAs: "svg",
    includeMargin: false,
  };

  return (
    <QRCode
      value={value}
      size={size}
      fgColor={config.fgColor}
      bgColor={config.bgColor}
      level={config.level}
      renderAs={config.renderAs}
      includeMargin={config.includeMargin}
    />
  );
};

export default Qr;
