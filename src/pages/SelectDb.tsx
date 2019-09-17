import React, { FC, useState } from "react";

import CardContainer from "../components/CardContainer";
import GridContainer from "../components/GridContainer";
import InitHeader from "../components/InitHeader";
import InitMain from "../components/InitMain";
import InitFooter from "../components/InitFooter";
import CardButton from "../components/CardButton";
import MysqlIcon from "../components/MysqlIcon";
import MongoIcon from "../components/MongoIcon";
import PostgresIcon from "../components/PostgresIcon";
import SqliteIcon from "../components/SqliteIcon";

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

const SelectDb: FC<{ onPrev?: Function; onNext?: Function }> = ({
  onPrev = () => null,
  onNext = () => null
}) => {
  let [step, setStep] = useState(0);

  return (
    <CardContainer>
      <InitHeader>Get started by selecting a database</InitHeader>
      <InitMain>
        {/* <CheckboxIcon checked={false} /> */}
        <GridContainer cols="1fr 1fr">
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
      </InitMain>
      <InitFooter onPrev={() => onPrev()} onNext={() => onNext()} />
    </CardContainer>
  );
};

export default SelectDb;