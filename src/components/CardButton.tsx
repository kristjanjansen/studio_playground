import React, { FC } from "react";

const CardButton: FC<{
  title?: any;
  subtitle?: any;
  icon?: any;
  children?: any;
}> = ({ title = null, subtitle = null, icon = null, children = null,  }) => (
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "6px",
      boxShadow: "var(--shadow-color) 0px 2px var(--shadow-blur)",
      height: "100%",
      display: "flex",
      padding: "16px"
    }}
  >
    {icon && <div style={{ marginRight: "16px" }}>{icon}</div>}
    <div>
      <div style={{}}>{title}</div>
      <div
        style={{
          fontSize: "var(--font-size-medium)",
          opacity: 0.5
        }}
      >
        {subtitle}
      </div>
    </div>
  </div>
);

export default CardButton;
