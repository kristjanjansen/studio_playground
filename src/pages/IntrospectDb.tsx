import React, { FC, useState, useEffect } from "react";

import CardContainer from "../components/CardContainer";
import CenterContainer from "../components/CenterContainer";
import DialogHeader from "../components/DialogHeader";
import DialogBody from "../components/DialogBody";
import DialogFooter from "../components/DialogFooter";

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
  }, 10);

  useEffect(() => {
    if (count === 100) {
      onDone();
    }
  }, [count]);

  return (
    <CardContainer>
      <DialogHeader>Connecting to a database</DialogHeader>
      <DialogBody>
        <CenterContainer>
          <div style={{ width: "50%" }}>
            <Progressbar value={count} />
          </div>
        </CenterContainer>
      </DialogBody>
      <DialogFooter
        disabled={count !== 100}
        onPrev={() => onPrev()}
        onNext={() => onNext()}
      />
    </CardContainer>
  );
};

export default ConnectDb;
