import React, { FC, useState, useEffect } from "react";

import CardContainer from "../components/CardContainer";
import CenterContainer from "../components/CenterContainer";
import DialogHeader from "../components/DialogHeader";
import DialogBody from "../components/DialogBody";
import DialogFooter from "../components/DialogFooter";
import LightButton from "../components/LightButton";
import Button from "../components/Button";

const log = [{ message: "Enter your database details", delay: 0 }];

const SetupDb: FC<{
  onPrev?: Function;
  onNext?: Function;
  onLog?: Function;
}> = ({ onPrev = () => null, onNext = () => null, onLog = () => null }) => {
  useEffect(() => {
    onLog(log);
  }, []);

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

export default SetupDb;
