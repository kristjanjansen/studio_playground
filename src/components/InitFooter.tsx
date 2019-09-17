import React, { FC } from "react";
import Button from "./Button";
import LightButton from "./LightButton";

const InitFooter: FC<{ onPrev?: Function, onNext?: Function }> = ({ onPrev= () => null, onNext = () => null }) => (
  <div
    style={{
      background: "white",
      padding: "16px"
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <LightButton onClick={() => onPrev()}>← Back</LightButton>
      <Button onClick={() => onNext()}>Confirm</Button>
    </div>
  </div>
);

export default InitFooter;
