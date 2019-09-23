import React, { FC, useEffect, useState } from 'react';
import { useList } from 'react-use';

import Button from '../components/Button';
import CardButton from '../components/CardButton';
import CardContainer from '../components/CardContainer';
import CheckboxInput from '../components/CheckboxInput';
import DialogBody from '../components/DialogBody';
import DialogFooter from '../components/DialogFooter';
import DialogHeader from '../components/DialogHeader';
import DialogStatus from '../components/DialogStatus';
import GridContainer from '../components/GridContainer';
import CheckboxIcon from '../components/icons/CheckboxIcon';
import GoIcon from '../components/icons/GoIcon';
import JsIcon from '../components/icons/JsIcon';
import MongoIcon from '../components/icons/MongoIcon';
import MysqlIcon from '../components/icons/MysqlIcon';
import PlaceholderIcon from '../components/icons/PlaceholderIcon';
import PostgresIcon from '../components/icons/PostgresIcon';
import SqliteIcon from '../components/icons/SqliteIcon';
import TsIcon from '../components/icons/TsIcon';
import LightButton from '../components/LightButton';
import Pagebreak from '../components/Pagebreak';
import PlacholderContainer from '../components/PlaceholderCard';
import TextInput from '../components/TextInput';

const log = [{ message: "Enter your database details", delay: 0 }];

const dbTypes = [
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
    title: "SQLite",
    icon: <SqliteIcon />,
    subtitle: "Just a file on a disk",
    disabled: false
  },
  {
    title: "MongoDB",
    icon: <MongoIcon />,
    subtitle: "Coming soon",
    disabled: true
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

const seeds = [
  {
    title: "starwars",
    subtitle: "12 tables, 13k rows in total",
    disabled: false
  },
  { title: "mytable", subtitle: "1 table, 10 rows", disabled: false }
];

const SetupDb: FC<{
  onPrev?: Function;
  onNext?: Function;
  onLog?: Function;
}> = ({ onPrev = () => null, onNext = () => null, onLog = () => null }) => {
  useEffect(() => {
    onLog(log);
  }, [onLog]);

  // eslint-disable-next-line
  const [connection, setConnection] = useState("");
  const [host, setHost] = useState("127.0.0.1");
  const [ssl, setSsl] = useState(false);
  const [port, setPort] = useState("3306");
  const [user, setUser] = useState("root");
  const [password, setPassword] = useState("");

  const [language, setLanguage] = useState(0);
  const [tool, { set: setTool, push: pushTool }] = useList([0, 1]);
  const [dbtype, setDbtype] = useState(0);
  const [dbfile, setDbfile] = useState("./database.db");
  const [dataset, setDataset] = useState(0);
  const [script, setScript] = useState(true);

  useEffect(() => {
    setConnection(
      `mysql://${user}${password && `:${password}`}@${host}:${port}/`
    );
  }, [user,password,host, port]);

  return (
    <CardContainer>
      <DialogHeader>Add Prisma to an existing project</DialogHeader>
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
          <PlacholderContainer>Other info we can detect from user's working environment / CWD</PlacholderContainer>
        </GridContainer>
      </DialogStatus>
      <DialogBody>
        <GridContainer cols="1fr" gap="16px">
          <div>
            <h2>Set up a datasource</h2>
            <h4>Select a database</h4>
            <GridContainer cols="1fr 1fr 1fr 1fr">
              {dbTypes.map(({ title, icon, disabled, subtitle }, i) => (
                <CardButton
                  selected={i === dbtype}
                  title={title}
                  subtitle={subtitle}
                  icon={icon}
                  disabled={disabled}
                  onClick={() => setDbtype(i)}
                />
              ))}
            </GridContainer>
          </div>

          <div>
            <h4>Connect to a database</h4>
            <div style={{ height: "auto" }}>
              {dbtype === 2 && (
                <CardContainer>
                  <div style={{ padding: "12px" }}>
                    <TextInput
                      title="Host"
                      value={dbfile}
                      onChange={(value: any) => setDbfile(value)}
                    />
                  </div>
                </CardContainer>
              )}
              {dbtype !== 2 && (
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
              )}
            </div>
          </div>

          <div>
            <h4>Select existing schema</h4>
            <GridContainer cols="1fr">
              {seeds.map(({ title, subtitle, disabled }, i) => (
                <CardButton
                  selected={i === dataset}
                  title={title}
                  subtitle={subtitle}
                  disabled={disabled}
                  onClick={() => setDataset(i)}
                />
              ))}
            </GridContainer>
          </div>

          <Pagebreak />
          <div>
            <h2>Generate code</h2>
            <h4>Select Prisma tools</h4>
            <GridContainer cols="1fr 1fr 1fr">
              {tools.map(({ title, subtitle, icon, disabled }, i) => (
                <CardButton
                  title={title}
                  subtitle={subtitle}
                  disabled={disabled}
                  icon={<CheckboxIcon checked={tool.includes(i)} />}
                  selected={tool.includes(i)}
                  onClick={() =>
                    tool.includes(i)
                      ? setTool(tool.filter((_, j) => j !== i))
                      : pushTool(i)
                  }
                />
              ))}
            </GridContainer>
          </div>

          {tool.includes(0) && (
            <div style={{ height: "50%", marginLeft: "32px" }}>
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
              <h4>Photon sample script</h4>
              <GridContainer cols="1fr">
                <CardButton
                  selected={script}
                  title="Install sample script"
                  subtitle="Minimalistic CLI example script"
                  icon={<CheckboxIcon checked={script} />}
                  onClick={() => setScript(!script)}
                />
              </GridContainer>
            </div>
          )}
        </GridContainer>
      </DialogBody>
      <DialogFooter>
        <LightButton onClick={() => onPrev()}>← Back</LightButton>
        <Button onClick={() => onNext()}>Generate</Button>
      </DialogFooter>{" "}
    </CardContainer>
  );
};

export default SetupDb;
