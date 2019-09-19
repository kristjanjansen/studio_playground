import React, { FC, useState, useEffect } from "react";

import CardContainer from "../components/CardContainer";
import GridContainer from "../components/GridContainer";
import DialogHeader from "../components/DialogHeader";
import DialogBody from "../components/DialogBody";
import DialogFooter from "../components/DialogFooter";
import CardButton from "../components/CardButton";

import TsIcon from "../components/TsIcon";
import JsIcon from "../components/JsIcon";
import GoIcon from "../components/GoIcon";
import LightButton from "../components/LightButton";
import Button from "../components/Button";
import PlaceholderIcon from "../components/PlaceholderIcon";
import CodeContainer from "../components/CodeContainer";

const log = [{ message: "Welcome", delay: 200 }];

const options = [
  {
    title: "Generate Prisma tools",
    icon: <PlaceholderIcon size="64px" />,
    subtitle: `

Choose this when you have an existing database and want to generate Prisma code libraries for accessing the data 
      
      
[ Results on initial DB availabilty / port scannings ]
      
      
      `,
    disabled: false
  },
  {
    title: "Pick a starter kit",
    icon: <PlaceholderIcon size="64px" />,
    subtitle: `

Choose this when you do not have existing data and want to just explore Prisma quickly
      

      
[ List of starter kits? ]
      
      
      `,
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

const Start: FC<{
  onPrev?: Function;
  onNext?: Function;
  onStep?: Function;
  onLog?: Function;
}> = ({
  onPrev = () => null,
  onNext = () => null,
  onLog = () => null,
  onStep = () => null
}) => {
  let [path, setPath] = useState(0);

  useEffect(() => {
    onLog(log);
  }, []);

  const [language, setLanguage] = useState(0);

  return (
    <CardContainer>
      <DialogHeader>Welcome to Prisma</DialogHeader>
      <DialogBody>
        <GridContainer cols="5fr 1fr 1fr 1fr">
          <div>
            <div>Current directory</div>
            <div style={{ marginTop: '4px', opacity: 0.5, fontFamily: "var(--font-family--code)" }}>
              Users/kristjanjansen/projects
            </div>
          </div>
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
        
        <div style={{ padding: "16px 0" }}>
          <GridContainer cols="1fr 1fr" gap="16px">
            {options.map(({ title, subtitle, icon, disabled }, i) => (
              <CardButton
                key={i}
                title={title}
                subtitle={subtitle}
                icon={icon}
                selected={i == path}
                disabled={disabled}
                onClick={() => setPath(i)}
              />
            ))}
          </GridContainer>
        </div>
      </DialogBody>
      <DialogFooter>
        &nbsp;
        <Button onClick={() => onStep(path + 1)}>Next →</Button>
      </DialogFooter>
    </CardContainer>
  );
};

export default Start;
