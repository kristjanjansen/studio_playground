import React, { FC } from "react";

const DatabrowserButton: FC<{ children?: any }> = ({ children = null }) => (
  <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 'var(--font-size-small)',
      lineHeight: "1",
      fontWeight: "bold",
      padding: "4px 6px",
      borderRadius: "3px",
      backgroundColor: "transparent",
      transition: "var(--transition-normal)"
    }}
  >
    {children}
  </div>
);

export default DatabrowserButton;
