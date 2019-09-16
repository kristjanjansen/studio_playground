import React, { FC } from "react";
import CardContainer from "./CardContainer";

const InitHeader: FC<{ children?: any }> = ({ children = null }) => (
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

export default InitHeader;
