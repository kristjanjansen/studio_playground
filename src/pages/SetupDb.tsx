import React, { FC, useState } from "react";

import CardContainer from "../components/CardContainer";
import CenterContainer from "../components/CenterContainer";
import InitHeader from "../components/InitHeader";
import InitMain from "../components/InitMain";
import InitFooter from "../components/InitFooter";

const ConnectDb: FC<{ onPrev?: Function; onNext?: Function }> = ({
  onPrev = () => null,
  onNext = () => null
}) => {

  return (
    <CardContainer>
      <InitHeader>Enter your database details</InitHeader>
      <InitMain>
        <CardContainer>
          <CenterContainer>Database connection details</CenterContainer>
        </CardContainer>
      </InitMain>
      <InitFooter onPrev={() => onPrev()} onNext={() => onNext()} />
    </CardContainer>
  );
};

export default ConnectDb;
