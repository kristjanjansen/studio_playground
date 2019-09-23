import React, { FC } from "react";

const Button: FC<{ children?: any; onClick?: Function, secondary?: boolean }> = ({
  children = null,
  onClick = () => null,
  secondary = false
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      outline: "none",
      color: "var(--button-blue-foreground)",
      backgroundColor: secondary ? 'var(--gray-500)' : 'var(--button-blue-background)',
      transition: "var(--transition-normal)",
      borderRadius: "3px",
      fontSize: "var(--font-size-small)",
      lineHeight: "1",
      fontWeight: "bold",
      padding: "4px 6px",
      cursor: "pointer"
    }}
    onClick={() => onClick()}
  >
    {children}
  </div>
);

export default Button;
