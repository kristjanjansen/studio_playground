import React, { FC, useState, useEffect } from "react";

import CardContainer from "../components/CardContainer";
import CenterContainer from "../components/CenterContainer";
import DialogHeader from "../components/DialogHeader";
import DialogBody from "../components/DialogBody";
import DialogFooter from "../components/DialogFooter";

import useInterval from "../hooks/useInterval";
import Progressbar from "../components/Progressbar";
import LightButton from "../components/LightButton";
import Button from "../components/Button";

const log = [
  { message: "Introspecting...", delay: 0 },
  { message: "Introspecting some more...", delay: 1000 },
  { message: "Introspecting even more here...", delay: 1000 }
];

const ConnectDb: FC<{
  onPrev?: Function;
  onNext?: Function;
  onDone?: Function;
  onLog?: Function;
}> = ({
  onPrev = () => null,
  onNext = () => null,
  onDone = () => null,
  onLog = () => []
}) => {
  let [count, setCount] = useState(0);

  useInterval(() => {
    if (count < 100) {
      setCount(count + 1);
    }
  }, 30);

  useEffect(() => {
    if (count === 100) {
      onDone();
    }
  }, [count]);

  useEffect(() => {
    onLog(log);
  }, []);

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
      <DialogFooter disabled={count !== 100}>
        <LightButton onClick={() => onPrev()}>← Back</LightButton>
        <Button onClick={() => onNext()}>Next →</Button>
      </DialogFooter>
    </CardContainer>
  );
};

export default ConnectDb;
