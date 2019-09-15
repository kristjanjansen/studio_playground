import React, { FC } from "react";

const CardContainer: FC<{ children?: any }> = ({ children = null }) => (
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "var(--border-radius)",
      boxSizing: "border-box",
      boxShadow: "var(--shadow-color) 0px 2px 4px",
      overflow: "hidden",
      height: '100%'
    }}
  >
    {children}
  </div>
);

export default CardContainer;
