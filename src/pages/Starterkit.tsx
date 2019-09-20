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
import PostgresIcon from "../components/PostgresIcon";
import MysqlIcon from "../components/MysqlIcon";
import SqliteIcon from "../components/SqliteIcon";
import MongoIcon from "../components/MongoIcon";
import TsIcon from "../components/TsIcon";
import JsIcon from "../components/JsIcon";
import GoIcon from "../components/GoIcon";
import PlaceholderIcon from "../components/PlaceholderIcon";
import { useList } from "react-use";
import PlacholderContainer from "../components/PlaceholderCard";
import DialogStatus from "../components/DialogStatus";

const log = [{ message: "Pick a starter kit", delay: 200 }];

const dbTypes = [
  {
    title: "SQLite",
    icon: <SqliteIcon />,
    subtitle: "Easiest to set up",
    disabled: false
  },
  {
    title: "PostgreSQL",
    icon: <PostgresIcon />,
    subtitle: "Requires a running PostgreSQL database",
    disabled: false
  },
  {
    title: "MySQL",
    icon: <MysqlIcon />,
    subtitle: "Requires a running MySQL database",
    disabled: false
  },
  {
    title: "MongoDB",
    icon: <MongoIcon />,
    subtitle: "Coming soon",
    disabled: true
  }
];

const kits = [
  {
    title: "All Prisma tools with NodeJS sample script",
    icon: "",
    subtitle: `The kitchen sink of Prisma
    
◯ Photon  ◯ Lift  |  ◯ JS  ◯ TS | ◯ NodeJS
`,
    disabled: false
  },
  {
    title: "GraphQL API",
    icon: "",
    subtitle: `Basic GraphQL server with graphql-yoga

◯ Photon  |  ◯ JS  ◯ TS |  ◯ GraphQL 🧘Graphql-yoga
`,
    disabled: false
  },
  {
    title: "GraphQL API with authentication",
    icon: "",
    subtitle: `Basic GraphQL server with authentication
    ◯ Photon  |  ◯ JS  ◯ TS |  ◯ GraphQL 🧘Graphql-yoga
`,
    disabled: false
  },
  {
    title: "REST API",
    icon: "",
    subtitle: `Basic REST server with express.js

◯ Photon  |  ◯ JS  ◯ TS |  ◯ GraphQL 🧘Graphql-yoga
`,
    disabled: false
  },
  {
    title: "gRPC API",
    icon: "",
    subtitle: " Basic gRPC server and client",
    disabled: false
  }
];

const languages = [
  {
    title: "Typescript",
    icon: <TsIcon />,
    subtitle: "Typescript",
    disabled: false
  },
  {
    title: "Javascript",
    icon: <JsIcon />,
    subtitle: "Javascript",
    disabled: false
  },
  {
    title: "Golang",
    icon: <GoIcon />,
    subtitle: "Coming soon",
    disabled: true
  }
];

const tools = [
  {
    title: "Photon",
    icon: <PlaceholderIcon />,
    subtitle: "Type-safe database client",
    disabled: false
  },
  {
    title: "Lift",
    icon: <PlaceholderIcon />,
    subtitle: "Declarative data modeling & migrations",
    disabled: false
  },
  {
    title: "?",
    icon: <PlaceholderIcon />,
    subtitle: "Future Prisma tool",
    disabled: true
  }
];

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

  const [language, setLanguage] = useState(0);
  const [tool, { set: setTool, push: pushTool }] = useList([0, 1]);
  const [kit, setKit] = useState(0);
  const [dbtype, setDbtype] = useState(0);
  const [dataset, setDataset] = useState(0);

  useEffect(() => {
    setConnection(
      `mysql://${user}${password && `:${password}`}@${host}:${port}/`
    );
  }, [host, port]);

  return (
    <CardContainer>
      <DialogHeader>Pick a starter kit</DialogHeader>
      <DialogStatus>
        <GridContainer cols="2fr 3fr">
          <div>
            <div style={{ fontSize: "var(--font-size-small)" }}>
              Current directory
            </div>
            <div
              style={{
                marginTop: "4px",
                opacity: 0.5,
                fontFamily: "var(--font-family--code)"
              }}
            >
              Users/kristjanjansen/projects
            </div>
          </div>
          <PlacholderContainer>Other info we can detect from user's working environment / CWD. Perhaps also results on DB availabilty / port scannings?</PlacholderContainer>
        </GridContainer>
      </DialogStatus>
      <DialogBody>
      <h4>Select a language</h4>

        <GridContainer cols="1fr 1fr 1fr">
          {languages.map(({ title, icon, disabled }, i) => (
            <CardButton
              selected={i === language}
              title={title}
              icon={icon}
              disabled={disabled}
              onClick={() => setLanguage(i)}
            />
          ))}
        </GridContainer>

        <GridContainer cols="1fr" gap="16px">
          <div>
            <h4>Select a database</h4>
            <GridContainer cols="1fr 1fr 1fr 1fr">
              {dbTypes.map(({ title, icon, disabled, subtitle }, i) => (
                <CardButton
                  selected={i === dbtype}
                  title={title}
                  subtitle={""}
                  icon={icon}
                  disabled={disabled}
                  onClick={() => setDbtype(i)}
                />
              ))}
            </GridContainer>
          </div>

          {dbtype !== 0 && (
            <div>
              <h4>Connect to a database</h4>
              <div style={{ height: "auto" }}>
                <CardContainer>
                  <div style={{ padding: "12px" }}>
                    <GridContainer cols="1fr">
                      <GridContainer cols="1fr">
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
                      <GridContainer cols="1fr">
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
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <Button secondary>Test connection</Button>
                      </div>
                    </GridContainer>
                  </div>
                </CardContainer>
              </div>
            </div>
          )}

          <div>
            <h4>Select a starter kit</h4>
            <GridContainer cols="1fr">
              {kits.map(({ title, subtitle, icon, disabled }, i) => (
                <CardButton
                  selected={i === kit}
                  title={title}
                  subtitle={subtitle}
                  disabled={disabled}
                  onClick={() => setKit(i)}
                />
              ))}
            </GridContainer>
          </div>

          <div>
            <h4>Seed a sample dataset (future feature)</h4>
            <GridContainer cols="1fr 1fr 1fr">
              {[
                { title: "Random users", subtitle: "Alice, Bob and others" },
                { title: "Star Wars fleet", subtitle: "All the *-Wings" },
                { title: "No sample data", subtitle: "Enter the void" }
              ].map(({ title, subtitle }, i) => (
                <CardButton
                  selected={i === dataset}
                  title={title}
                  subtitle={subtitle}
                  onClick={() => setDataset(i)}
                />
              ))}
            </GridContainer>
          </div>
        </GridContainer>
      </DialogBody>
      <DialogFooter>
        <LightButton onClick={() => onPrev()}>← Back</LightButton>
        <Button onClick={() => onNext()}>Generate</Button>
      </DialogFooter>
    </CardContainer>
  );
};

export default SetupDb;

/* <TextInput
                title="Connection string"
                value={connection}
                onChange={(value: any) => setConnection(value)}
              /> */
/* <CodeContainer copy>{connection}</CodeContainer> */
