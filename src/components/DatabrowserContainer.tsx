import React, { FC } from "react";

const DatabrowserContainer: FC<{ children?: any }> = ({ children = null }) => (
  <div
    style={{
      backgroundColor: "var(--databrowser-background)",
      borderRadius: "8px",
      boxSizing: "border-box",
      boxShadow: "var(--shadow-color) 0px 2px 4px",
      overflow: "hidden",
      height: "100%",
      padding: "10px"
    }}
  >
    {children}
  </div>
);

export default DatabrowserContainer;
