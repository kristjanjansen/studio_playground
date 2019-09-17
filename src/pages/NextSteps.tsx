import React, { FC, useState } from "react";

import CardContainer from "../components/CardContainer";
import CenterContainer from "../components/CenterContainer";
import DialogHeader from "../components/DialogHeader";
import DialogBody from "../components/DialogBody";
import DialogFooter from "../components/DialogFooter";
import CodeContainer from "../components/CodeContainer";
import LightButton from "../components/LightButton";
import Button from "../components/Button";

const ConnectDb: FC<{ onPrev?: Function; onNext?: Function }> = ({
  onPrev = () => null,
  onNext = () => null
}) => {
  return (
    <CardContainer>
      <DialogHeader>Your project is ready</DialogHeader>
      <DialogBody>
        <ol style={{ margin: 0, padding: "0 24px" }}>
          <li>
            <p>
              Navigate into the project directory and start Prisma Studio to
              watch schema.prisma for changes
            </p>
            <CodeContainer copy>
              {"cd /Users/kristjanjansen/projects\nprisma2 dev"}
            </CodeContainer>
          </li>
          <li>
            <p>
              Start the GraphQL server <b>in a new terminal window/tab</b>:
            </p>
            <CodeContainer copy>{"cd /Users/kristjanjansen/projects\nyarn start"}</CodeContainer>
          </li>
        </ol>
        <p style={{ marginLeft: "20px", opacity: 0.5 }}>
          Explore sample operations and evolve the project:<br />
          <a href="https://github.com/prisma/prisma2" target="_blank">https://github.com/prisma/prisma2</a>
        </p>
      </DialogBody>
      <DialogFooter>
        <LightButton onClick={() => onPrev()}>← Back</LightButton>
        <Button onClick={() => onNext()}>Next →</Button>
      </DialogFooter>    </CardContainer>
  );
};

export default ConnectDb;
