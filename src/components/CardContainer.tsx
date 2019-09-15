import React, { FC } from "react";

const CardContainer: FC<{ children?: any }> = ({ children = null }) => (
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "var(--card-radius)",
      boxSizing: "border-box",
      boxShadow: "var(--shadow-color) 0px 2px var(--shadow-blur)",
      overflow: "hidden",
      height: '100%'
    }}
  >
    {children}
  </div>
);

export default CardContainer;
