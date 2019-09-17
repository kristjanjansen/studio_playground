import React, { FC } from "react";

//const InitFooter: FC<{ onNext?: Function }> = ({ onNext = null }) => (

const Button: FC<{ children?: any; onClick?: Function }> = ({
  children = null,
  onClick = () => null
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      outline: "none",
      color: "var(--button-blue-foreground)",
      backgroundColor: "var(--button-blue-background)",
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
