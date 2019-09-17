import React, { FC, useState } from "react";

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

const options = [
  {
    title: "Photon",
    icon: "",
    subtitle: "Type-safe database client"
  },
  {
    title: "Lift",
    icon: "",
    subtitle: "Declarative data modeling & migrations"
  }
];

const Init: FC<{ onPrev?: Function; onNext?: Function }> = ({
  onPrev = () => null,
  onNext = () => null
}) => {
  const [selected, { set, push }] = useList([0, 1]);

  return (
    <CardContainer>
      <DialogHeader>Select Prisma tools</DialogHeader>
      <DialogBody>
        <GridContainer>
          {options.map(({ title, subtitle, icon }, i) => (
            <CardButton
              key={i}
              title={title}
              subtitle={subtitle}
              icon={<CheckboxIcon checked={selected.includes(i)} />}
              selected={selected.includes(i)}
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
