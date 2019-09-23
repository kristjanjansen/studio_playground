import React, { FC } from 'react';

const DialogHeader: FC<{ children?: any }> = ({ children = null }) => (
  <div
    style={{
      height: "64px",
      background: "white",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "0 16px"
    }}
  >
    <div>{children}</div>
  </div>
);

export default DialogHeader;
