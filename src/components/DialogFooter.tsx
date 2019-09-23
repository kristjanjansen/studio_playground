import React, { FC } from "react";

const DialogFooter: FC<{
  children?: any,
  disabled?: boolean;
}> = ({ disabled = false,  children = null }) => (
  <div
    style={{
      background: "var(--main-background)",
      padding: "16px"
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        opacity: disabled ? 0.5 : 1
      }}
    >
      { children }
    </div>
  </div>
);

export default DialogFooter;
