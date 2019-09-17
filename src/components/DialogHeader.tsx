import React, { FC } from "react";
import CardContainer from "./CardContainer";

const DialogHeader: FC<{ children?: any }> = ({ children = null }) => (
  <div
    style={{
      height: "100px",
      background: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div>{children}</div>
  </div>
);

export default DialogHeader;
