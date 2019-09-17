import React, { FC, useState, useEffect } from "react";

import CardContainer from "../components/CardContainer";
import CenterContainer from "../components/CenterContainer";
import DialogHeader from "../components/DialogHeader";
import DialogBody from "../components/DialogBody";
import DialogFooter from "../components/DialogFooter";
import Progressbar from "../components/Progressbar";
import LightButton from "../components/LightButton";
import Button from "../components/Button";

import useInterval from "../hooks/useInterval";

const log = [
  { message: "Downloading the starter kit from GitHub...", delay: 0 },
  { message: "Extracting the content to prisma_preset1...", delay: 500 },
  { message: "Installing dependencies with: 'npm install'...", delay: 500 },
  { message: "Preparing your database...", delay: 500 },
  { message: "Seeding your database width: 'npm run seed'", delay: 500 }
];

const totalDelay =
  log.map(({ delay }) => delay).reduce((acc, delay) => acc + delay) + 500;

const ConnectDb: FC<{
  onPrev?: Function;
  onNext?: Function;
  onDone?: Function;
  onLog?: Function;
}> = ({
  onPrev = () => null,
  onNext = () => null,
  onDone = () => null,
  onLog = () => null
}) => {
  let [count, setCount] = useState(0);

  useInterval(() => {
    if (count < 100) {
      setCount(count + 1);
    }
  }, totalDelay / 100);

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
      <DialogHeader>Generating tools</DialogHeader>
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
