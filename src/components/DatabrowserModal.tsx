import React, { FC } from "react";

const DatabrowserModal: FC<{ children?: any }> = ({ children = null }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "var(--filters-dropdown-background)",
      boxShadow: "var(--shadow-bold)",
      borderRadius: "var(--card-radius)",
      padding: "8px",
      color: "var(--filters-dropdown-foreground)",
      fontSize: "calc(var(--font-size) - 1)",
      whiteSpace: 'pre-wrap',
      minWidth: '100px'
    }}
  >
    {children}
  </div>
);

export default DatabrowserModal;
