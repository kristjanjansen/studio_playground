import React, { FC } from "react";

const LightButton: FC<{ children?: any; onClick?: Function }> = ({
  children = null,
  onClick = () => null
}) => (  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      outline: "none",
      color: "var(--secondary-text-color)",
      transition: "var(--transition-normal)",
      borderRadius: "3px",
      fontSize: 'var(--font-size-small)',
      lineHeight: "1",
      fontWeight: "bold",
      padding: "4px 6px",
      margin: "0 4px",
      cursor: "pointer"
    }}
    onClick={() => onClick()}
  >
    {children}
  </div>
);

export default LightButton;
