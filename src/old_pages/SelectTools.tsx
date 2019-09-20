import React, { FC, useEffect } from "react";

import CardContainer from "../components/CardContainer";
import GridContainer from "../components/GridContainer";
import DialogHeader from "../components/DialogHeader";
import DialogBody from "../components/DialogBody";
import DialogFooter from "../components/DialogFooter";
import CardButton from "../components/CardButton";
import CheckboxIcon from "../components/CheckboxIcon";

import { useList } from "react-use";
import LightButton from "../components/LightButton";
import Button from "../components/Button";

const log = [{ message: 'Select Prisma tools', delay: 0}]

const Init: FC<{
  onPrev?: Function;
  onNext?: Function;
  onLog?: Function;
}> = ({ onPrev = () => null, onNext = () => null, onLog = () => null }) => {
  const [selected, { set, push }] = useList([0, 1]);

  useEffect(() => {
    onLog(log);
  }, []);
  
  const options = [
    {
      title: "Photon",
      icon: "",
      subtitle: "Type-safe database client",
      children: "a"
    },
    {
      title: "Lift",
      icon: "",
      subtitle: "Declarative data modeling & migrations"
    }
  ];

  return (
    <CardContainer>
      <DialogHeader>Select Prisma tools</DialogHeader>
      <DialogBody>
        <GridContainer>
          {options.map(({ title, subtitle, icon, children }, i) => (
            <CardButton
              key={i}
              title={title}
              subtitle={subtitle}
              icon={<CheckboxIcon checked={selected.includes(i)} />}
              selected={selected.includes(i)}
              children={children}
              onClick={() =>
                selected.includes(i)
                  ? set(selected.filter((_, j) => j !== i))
                  : push(i)
              }
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

export default Init;
