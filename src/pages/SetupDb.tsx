import React, { FC, useEffect, useState } from "react";

import CardContainer from "../components/CardContainer";
import CenterContainer from "../components/CenterContainer";
import DialogHeader from "../components/DialogHeader";
import DialogBody from "../components/DialogBody";
import DialogFooter from "../components/DialogFooter";
import LightButton from "../components/LightButton";
import Button from "../components/Button";
import GridContainer from "../components/GridContainer";
import TextInput from "../components/TextInput";

const log = [{ message: "Enter your database details", delay: 0 }];

const SetupDb: FC<{
  onPrev?: Function;
  onNext?: Function;
  onLog?: Function;
}> = ({ onPrev = () => null, onNext = () => null, onLog = () => null }) => {
  useEffect(() => {
    onLog(log);
  }, []);

  const [connection, setConnection] = useState("mysql://...");
  const [host, setHost] = useState("127.0.0.1");
  const [port, setPort] = useState("3306");
  const [user, setUser] = useState("root");
  const [password, setPassword] = useState("");

  return (
    <CardContainer>
      <DialogHeader>Enter your database details</DialogHeader>
      <DialogBody>
        <CardContainer>
          <div style={{ padding: "12px" }}>
            <GridContainer cols="1fr">
              <TextInput
                title="Connection string"
                value={connection}
                onChange={(value: any) => setConnection(value)}
              />
              <GridContainer cols="6fr 1fr">
                <TextInput
                  title="Host"
                  value={host}
                  onChange={(value: any) => setHost(value)}
                />
                <TextInput
                  title="Port"
                  value={port}
                  onChange={(value: any) => setPort(value)}
                />
              </GridContainer>
              <GridContainer cols="1fr 1fr">
                <TextInput
                  title="User"
                  value={user}
                  onChange={(value: any) => setUser(value)}
                />
                <TextInput
                  title="Password"
                  value={password}
                  onChange={(value: any) => setPassword(value)}
                />
              </GridContainer>
            </GridContainer>
          </div>
        </CardContainer>
      </DialogBody>
      <DialogFooter>
        <LightButton onClick={() => onPrev()}>← Back</LightButton>
        <Button onClick={() => onNext()}>Connect</Button>
      </DialogFooter>{" "}
    </CardContainer>
  );
};

export default SetupDb;
