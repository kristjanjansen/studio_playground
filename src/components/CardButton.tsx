import React, { FC } from "react";

const CardButton: FC<{ icon?: any; children?: any; subtitle?: any }> = ({
  icon = null,
  children = null,
  subtitle = null
}) => (
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "6px",
      boxShadow: "var(--shadow-color) 0px 2px var(--shadow-blur)",
      height: "100%",
      display: "flex",
      padding: '16px'
    }}
  >
    {icon && <div style={{ marginRight: '16px'}}>{icon}</div>}
    <div>
      <div>{children}</div>
      <div>{subtitle}</div>
    </div>
  </div>
);

export default CardButton;
