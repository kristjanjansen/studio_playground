import React, { FC, useState } from "react";

import CardContainer from "../components/CardContainer";
import CenterContainer from "../components/CenterContainer";
import DialogHeader from "../components/DialogHeader";
import DialogBody from "../components/DialogBody";
import DialogFooter from "../components/DialogFooter";

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
      <DialogFooter onPrev={() => onPrev()} onNext={() => onNext()} />
    </CardContainer>
  );
};

export default ConnectDb;
