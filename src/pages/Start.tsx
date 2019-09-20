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
import PlaceholderCard from "../components/PlaceholderCard";
import DialogStatus from "../components/DialogStatus";
import PlacholderContainer from "../components/PlaceholderCard";

const log = [{ message: "Welcome", delay: 200 }];

const options = [
  {
    title: "Add Prisma\nto a existing project",
    icon: <PlaceholderIcon size="64px" />,
    subtitle: `Generate Prisma code libraries for accessing the data 
      
[ Results on initial DB availabilty / port scannings ]
      `,
    disabled: false
  },
  {
    title: "Create a new Prisma\nsample project",
    icon: <PlaceholderIcon size="64px" />,
    subtitle: `Choose this when you create a new project to try out Prisma

[ Info about available starter kits?]
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

  useEffect(() => {
    onLog(log);
  }, []);

  const [language, setLanguage] = useState(0);

  return (
    <CardContainer>
      <DialogHeader>Welcome to Prisma</DialogHeader>
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
        <GridContainer cols="1fr">
          <div>
            <div>Current directory</div>
            <div
              style={{
                marginTop: "4px",
                opacity: 0.5,
                fontFamily: "var(--font-family--code)"
              }}
            >
              Users/kristjanjansen/projects
            </div>
            <p/>
            <PlaceholderCard>a</PlaceholderCard>
          </div>
          {/* {languages.map(({ title, icon, disabled }, i) => (
            <CardButton
              selected={i === language}
              title={title}
              icon={icon}
              disabled={disabled}
              onClick={() => setLanguage(i)}
            />
          ))} */}
        </GridContainer>
        <div style={{ padding: "16px 0" }}>
          <GridContainer cols="1fr 1fr" rows="1fr" gap="16px">
            {options.map((o, i) => (
              <CardContainer>
                <div onClick={() => onStep(i + 1)} style={{ padding: "16px", display: "flex" }}>
                  <div>
                    <PlaceholderIcon size="64px" />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      height: "200px",
                      marginLeft: "16px",
                      display: "flex",
                      flexDirection: "column",
                      whiteSpace: "pre-wrap"
                    }}
                  >
                    <div style={{ fontSize: "16px", marginBottom: "16px" }}>
                      {o.title}
                    </div>
                    <div style={{ flex: 1 }}>{o.subtitle}</div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end"
                      }}
                    >
                      <Button>Next →</Button>
                    </div>
                  </div>
                </div>
              </CardContainer>
            ))}
          </GridContainer>
        </div>
      </DialogBody>
    </CardContainer>
  );
};

export default Start;
