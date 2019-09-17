import React, { FC, useState } from "react";

import CardContainer from "./CardContainer";
import InitHeader from "./InitHeader";
import InitMain from "./InitMain";
import InitFooter from "./InitFooter";
import CardButton from "./CardButton";
import Progressbar from "./Progressbar";
import CheckboxIcon from "./CheckboxIcon";
import MysqlIcon from "./MysqlIcon";
import MongoIcon from "./MongoIcon";
import PostgresIcon from "./PostgresIcon";
import SqliteIcon from "./SqliteIcon";

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
    icon: <MysqlIcon />,
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

  //let [step, setStep] = useState(0);

  return (
    <CardContainer>
      <InitHeader>Enter your database details</InitHeader>
      <InitMain>
        <CardContainer><div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>Database connection details</div></CardContainer>
      </InitMain>
      <InitFooter onPrev={() => onPrev()} onNext={() => onNext()} />
    </CardContainer>
  );
};

export default Init;
