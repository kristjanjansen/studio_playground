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
import CheckboxIcon from "../components/CheckboxIcon";
import CheckboxInput from "../components/CheckboxInput";
import CodeContainer from "../components/CodeContainer";
import CardButton from "../components/CardButton";

const log = [{ message: "Enter your database details", delay: 0 }];

const SetupDb: FC<{
  onPrev?: Function;
  onNext?: Function;
  onLog?: Function;
}> = ({ onPrev = () => null, onNext = () => null, onLog = () => null }) => {
  useEffect(() => {
    onLog(log);
  }, []);

  const [connection, setConnection] = useState("");
  const [host, setHost] = useState("127.0.0.1");
  const [ssl, setSsl] = useState(false);
  const [port, setPort] = useState("3306");
  const [user, setUser] = useState("root");
  const [password, setPassword] = useState("");

  const [dataset, setDataset] = useState(0);

  useEffect(() => {
    setConnection(
      `mysql://${user}${password && `:${password}`}@${host}:${port}/`
    );
  }, [host, port]);

  return (
    <CardContainer>
      <DialogHeader>Enter your database details</DialogHeader>
      <DialogBody>
        <GridContainer>
            <h4>Connect to a database</h4>
            <CardContainer>
            <div style={{ padding: "12px" }}>
              <GridContainer cols="1fr">
                <GridContainer cols="6fr 1fr 2fr">
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
                  <div style={{ alignSelf: "end" }}>
                    <CheckboxInput
                      title="Use SSL"
                      value={ssl}
                      onChange={(value: any) => setSsl(value)}
                    />
                  </div>
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
                {/* <TextInput
                title="Connection string"
                value={connection}
                onChange={(value: any) => setConnection(value)}
              /> */}
                {/* <CodeContainer copy>{connection}</CodeContainer> */}
              </GridContainer>
              </div>
            </CardContainer>
          <div style={{ padding: "12px" }}>
            <h4>Seed a sample dataset</h4>
            <GridContainer cols="1fr 1fr 1fr">
              {[
                { title: "Random users" },
                { title: "Star Wars fleet" },
                { title: "No sample data" }
              ].map(({ title }, i) => (
                <CardButton
                  selected={i === dataset}
                  title={title}
                  onClick={() => setDataset(i)}
                />
              ))}
            </GridContainer>
          </div>
        </GridContainer>
      </DialogBody>
      <DialogFooter>
        <LightButton onClick={() => onPrev()}>← Back</LightButton>
        <Button onClick={() => onNext()}>Connect</Button>
      </DialogFooter>{" "}
    </CardContainer>
  );
};

export default SetupDb;
