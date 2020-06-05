import React from "react";

import QRCode from "qrcode.react";

// swiss qr code should be 46 x 46 mm and the cross 7 x 7 mmm in the middle

interface Config {
  fgColor: string;
  bgColor: string;
  level?: "M" | "L" | "Q" | "H";
  renderAs?: "svg" | "canvas";
  includeMargin: boolean;
}

// this is a quick wrapper around the qrcode generator for the generation f qqr code with JSON cntent
function SwissQr(props: { value: string[] }) {
  const { value } = props;

  if (!Array.isArray(value) || value.length !== 34) {
    console.error("an array is expected as input");
    return null;
  }

  const size = 300;

  const config: Config = {
    fgColor: "#000000",
    bgColor: "#ffffff",
    level: "M",
    renderAs: "svg",
    includeMargin: false,
  };

  const radius = (size / 46) * 7;
  const ratioCross = 1.1 / 5;

  return (
    <div className="svgHolder" style={{ position: "relative" }}>
      <QRCode
        value={value.join("\n")}
        size={size}
        fgColor={config.fgColor}
        bgColor={config.bgColor}
        level={config.level}
        renderAs={config.renderAs}
        includeMargin={config.includeMargin}
      />
      <svg
        style={{
          margin: "0 auto",
          position: "absolute",
          top: 150 - radius + "px",
          left: 150 - radius + "px",
        }}
      >
        <rect
          x={radius / 2 - (1 / 10) * radius}
          y={radius / 2 - (1 / 10) * radius}
          width={radius * 1.2}
          height={radius * 1.2}
          r={radius}
          fill="white"
        />
        <rect
          x={radius / 2}
          y={radius / 2}
          width={radius}
          height={radius}
          r={radius}
          fill="black"
        />
        <rect
          x={radius / 2 + radius / 2 - (ratioCross / 2) * radius}
          y={radius / 2 + (ratioCross / 2) * radius}
          width={ratioCross * radius}
          height={(1 - ratioCross) * radius}
          fill="white"
        />
        <rect
          x={radius / 2 + (ratioCross / 2) * radius}
          y={radius / 2 + radius / 2 - (ratioCross / 2) * radius}
          width={(1 - ratioCross) * radius}
          height={ratioCross * radius}
          fill="white"
        />
      </svg>
    </div>
  );
}

export default SwissQr;
