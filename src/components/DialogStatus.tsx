import React, { FC } from "react";

const DialogStatus: FC<{ children?: any }> = ({ children = null }) => (
  <div
    style={{
      background: "var(--gray-100)",
      padding: '16px',
      borderTop: '1px solid var(--gray-400)'
    }}
  >
    {children}
  </div>
);

export default DialogStatus;
