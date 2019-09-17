import React, { FC, useState } from "react";

import CardContainer from "../components/CardContainer";
import CenterContainer from "../components/CenterContainer";
import InitHeader from "../components/InitHeader";
import InitMain from "../components/InitMain";
import InitFooter from "../components/InitFooter";
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
        <CardContainer>
          <CenterContainer>Database connection details</CenterContainer>
        </CardContainer>
      </InitMain>
      <InitFooter onPrev={() => onPrev()} onNext={() => onNext()} />
    </CardContainer>
  );
};

export default Init;
