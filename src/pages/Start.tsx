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

  return (
    <CardContainer>
      <DialogHeader>Welcome to Prisma</DialogHeader>
      <DialogBody>
        <div style={{ padding: "64px" }}>
          <GridContainer cols="1fr 1fr" gap="64px">
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
