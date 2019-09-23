import React, { FC, useEffect } from 'react';

import Button from '../components/Button';
import CardContainer from '../components/CardContainer';
import DialogBody from '../components/DialogBody';
import DialogHeader from '../components/DialogHeader';
import DialogStatus from '../components/DialogStatus';
import GridContainer from '../components/GridContainer';
import PlaceholderIcon from '../components/icons/PlaceholderIcon';
import PlacholderContainer from '../components/PlaceholderCard';

const log = [{ message: "Welcome", delay: 200 }];

const options = [
  {
    title: "Add Prisma\nto a existing project",
    icon: <PlaceholderIcon size="64px" />,
    subtitle: `Generate Prisma code libraries for accessing the data 
            `,
    disabled: false
  },
  {
    title: "Create a new Prisma\nsample project",
    icon: <PlaceholderIcon size="64px" />,
    subtitle: `Choose this when you create a new project to try out Prisma
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

  useEffect(() => {
    onLog(log);
  }, [onLog]);

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
          <PlacholderContainer>Other info we can detect from user's working environment / CWD</PlacholderContainer>
        </GridContainer>
      </DialogStatus>
      <DialogBody>
        <div style={{ padding: "40px" }}>
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
                      <Button>Start →</Button>
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
