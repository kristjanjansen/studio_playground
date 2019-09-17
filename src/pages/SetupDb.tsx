import React, { FC, useState } from "react";

import CardContainer from "../components/CardContainer";
import CenterContainer from "../components/CenterContainer";
import DialogHeader from "../components/DialogHeader";
import DialogBody from "../components/DialogBody";
import DialogFooter from "../components/DialogFooter";
import LightButton from "../components/LightButton";
import Button from "../components/Button";

const ConnectDb: FC<{ onPrev?: Function; onNext?: Function }> = ({
  onPrev = () => null,
  onNext = () => null
}) => {
  return (
    <CardContainer>
      <DialogHeader>Enter your database details</DialogHeader>
      <DialogBody>
        <CardContainer>
          <CenterContainer>Database connection details</CenterContainer>
        </CardContainer>
      </DialogBody>
      <DialogFooter>
        <LightButton onClick={() => onPrev()}>← Back</LightButton>
        <Button onClick={() => onNext()}>Next →</Button>
      </DialogFooter>{" "}
    </CardContainer>
  );
};

export default ConnectDb;
