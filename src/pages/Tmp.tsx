import React, { FC, useState } from "react";

import CardContainer from "../components/CardContainer";
import GridContainer from "../components/GridContainer";
import DialogHeader from "../components/DialogHeader";
import DialogBody from "../components/DialogBody";
import DialogFooter from "../components/DialogFooter";
import CardButton from "../components/CardButton";
import Progressbar from "../components/Progressbar";
import CheckboxIcon from "../components/CheckboxIcon";
import MysqlIcon from "../components/MysqlIcon";
import MongoIcon from "../components/MongoIcon";
import PostgresIcon from "../components/PostgresIcon";
import SqliteIcon from "../components/SqliteIcon";

import useInterval from "../hooks/useInterval";

const options = [
  {
    title: "PostgreSQL",
    icon: <PostgresIcon />,
    subtitle: "Requires a running PostgreSQL database"
  },
  {
    title: "MySQL",
    icon: <MysqlIcon />,
    subtitle: "Requires a running MySQL database"
  },
  {
    title: "SQLite",
    icon: <SqliteIcon />,
    subtitle: "Easiest to set up"
  },
  {
    title: "MongoDB",
    icon: <MongoIcon />,
    subtitle: "Coming soon"
  }
];

const Init: FC<{ onPrev?: Function; onNext?: Function }> = ({
  onPrev = () => null,
  onNext = () => null
}) => {
  // let [count, setCount] = useState(0);

  // useInterval(() => {
  //   if (count < 100) {
  //     setCount(count + 1);
  //   }
  // }, 500);

  // {/* <Progressbar value={count} /> */}

  let [step, setStep] = useState(0);

  return (
    <CardContainer>
      <DialogHeader>Get started by selecting a database</DialogHeader>
      <DialogBody>
        {/* <CheckboxIcon checked={false} /> */}
        <GridContainer>
          {options.map(({ title, subtitle, icon }, i) => (
            <CardButton
              key={i}
              title={title}
              subtitle={subtitle}
              icon={icon}
              selected={i == step}
              onClick={() => setStep(i)}
            />
          ))}
        </GridContainer>
      </DialogBody>
      <DialogFooter onPrev={() => onPrev()} onNext={() => onNext()} />
    </CardContainer>
  );
};

export default Init;
