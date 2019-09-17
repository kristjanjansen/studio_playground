import React, { FC, useState, useEffect } from "react";

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
import LightButton from "../components/LightButton";
import Button from "../components/Button";

const log = [
  { message: "Select a starter kit", delay: 200 },
]

const options = [
  {
    title: "Just Prisma client",
    icon: "",
    subtitle: "Just a generated client"
  },
  {
    title: "Prisma client with NodeJS sample script",
    icon: "",
    subtitle: "Generated client with API example scripts"
  },
  {
    title: "GraphQL API",
    icon: "",
    subtitle: "Basic GraphQL server with graphql-yoga"
  },
  {
    title: "GraphQL API with authentication",
    icon: "",
    subtitle: "Basic GraphQL server with authentication"
  },
  {
    title: "GraphQL API with Apollo Server",
    icon: "",
    subtitle: "Basic GraphQL server with apollo-server"
  },
  {
    title: "REST API",
    icon: "",
    subtitle: "Basic REST server with express.js"
  },
  {
    title: "gRPC API",
    icon: "",
    subtitle: " Basic gRPC server and client"
  }
];

const SelectKit: FC<{
  onPrev?: Function;
  onNext?: Function;
  onLog?: Function;
}> = ({ onPrev = () => null, onNext = () => null, onLog = () => null }) => {
  let [step, setStep] = useState(0);

  useEffect(() => {
    onLog(log);
  }, []);
  
  return (
    <CardContainer>
      <DialogHeader>Select a starter kit</DialogHeader>
      <DialogBody>
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
      <DialogFooter>
        <LightButton onClick={() => onPrev()}>← Back</LightButton>
        <Button onClick={() => onNext()}>Next →</Button>
      </DialogFooter>{" "}
    </CardContainer>
  );
};

export default SelectKit;
