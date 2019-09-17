import React, { FC, useState, useEffect } from "react";

import CardContainer from "../components/CardContainer";
import CenterContainer from "../components/CenterContainer";
import InitHeader from "../components/InitHeader";
import InitMain from "../components/InitMain";
import InitFooter from "../components/InitFooter";

import useInterval from "../hooks/useInterval";
import Progressbar from "../components/Progressbar";

const ConnectDb: FC<{
  onPrev?: Function;
  onNext?: Function;
  onDone?: Function;
}> = ({ onPrev = () => null, onNext = () => null, onDone = () => null }) => {
  let [count, setCount] = useState(0);

  useInterval(() => {
    if (count < 100) {
      setCount(count + 1);
    }
  }, 50);

  useEffect(() => {
    if (count === 100) {
      onDone();
    }
  }, [count]);

  return (
    <CardContainer>
      <InitHeader>Introspecting a database</InitHeader>
      <InitMain>
        <CenterContainer>
          <div style={{ width: "50%" }}>
            <Progressbar value={count} />
          </div>
        </CenterContainer>
      </InitMain>
      <InitFooter
        disabled={count !== 100}
        onPrev={() => onPrev()}
        onNext={() => onNext()}
      />
    </CardContainer>
  );
};

export default ConnectDb;
