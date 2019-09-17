import React, { FC } from "react";

const Progressbar: FC<{ value?: number }> = ({ value = 50 }) => (
  <div
    style={{
      height: "8px",
      background: "var(--gray-400)",
      display: "relative",
      borderRadius: "4px",
      overflow: "hidden"
    }}
  >
    <div
      style={{
        background: "var(--blue-500)",
        display: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: `${value}%`
      }}
    >
      &nbsp;
    </div>
  </div>
);

export default Progressbar;
