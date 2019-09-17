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

const SelectKit: FC<{ onPrev?: Function; onNext?: Function }> = ({
  onPrev = () => null,
  onNext = () => null
}) => {
  let [step, setStep] = useState(0);

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
      <DialogFooter onPrev={() => onPrev()} onNext={() => onNext()} />
    </CardContainer>
  );
};

export default SelectKit;
