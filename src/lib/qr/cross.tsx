import React from "react";

export default (props: { size: number }) => {
  const { size } = props;
  const radius = (size / 46) * 7;
  const ratioCross = 1.1 / 5;

  return (
    <>
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
    </>
  );
};
