import React, { FC, useState } from "react";

import CardContainer from "../components/CardContainer";
import CenterContainer from "../components/CenterContainer";
import InitHeader from "../components/InitHeader";
import InitMain from "../components/InitMain";
import InitFooter from "../components/InitFooter";

import useInterval from "../hooks/useInterval";
import Progressbar from "../components/Progressbar";

const ConnectDb: FC<{ onPrev?: Function; onNext?: Function }> = ({
  onPrev = () => null,
  onNext = () => null
}) => {

    let [count, setCount] = useState(0);

    useInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      }
    }, 500);

  return (
    <CardContainer>
      <InitHeader>Enter your database details</InitHeader>
      <InitMain>
        <CardContainer>
          <CenterContainer><Progressbar value={count} /></CenterContainer>
        </CardContainer>
      </InitMain>
      <InitFooter onPrev={() => onPrev()} onNext={() => onNext()} />
    </CardContainer>
  );
};

export default ConnectDb;
