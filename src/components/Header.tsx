import React, { FC } from "react";

const CardContainer: FC<{ children?: any }> = ({ children = null }) => (
  <div
    style={{
      padding: "0 15px",
      height: "40px",
      zIndex: 1000,
      boxShadow: "var(--shadow-color) 0px 2px var(--shadow-blur)",
      background: "white"
    }}
  >
    {children}
  </div>
);

export default CardContainer;
