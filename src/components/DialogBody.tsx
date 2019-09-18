import React, { FC } from "react";
import Button from "./Button";
import LightButton from "./LightButton";
import LeftIcon from "./LeftIcon";

const DialogBody: FC<{ children?: any }> = ({ children = null }) => (
  <div
    style={{
      background: "var(--main-background)",
      display: "flex",
      flexDirection: "column",
      height: "400px",
      boxShadow: "inset var(--shadow-color) 0px 2px var(--shadow-blur)",
      padding: "16px",
      overflow: 'auto'
    }}
  >
    { children }
  </div>
);

export default DialogBody;
