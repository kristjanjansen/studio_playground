import React, { FC, useEffect } from 'react';

import CardContainer from '../components/CardContainer';
import CodeContainer from '../components/CodeContainer';
import DialogBody from '../components/DialogBody';
import DialogFooter from '../components/DialogFooter';
import DialogHeader from '../components/DialogHeader';

const log = [
  { message: " ",delay: 30 },
  {
    message: "1. Navigate into the project directory and start Prisma Studio",
   delay: 30
  },
  { message: " ",delay: 30 },
  { message: "    cd /Users/kristjanjansen/projects",delay: 30 },
  { message: "    prisma2 dev",delay: 30 },
  { message: " ",delay: 30 },
  {
    message: "2. Start the GraphQL server in a new terminal window / tab",
   delay: 30
  },
  { message: " ",delay: 30 },
  { message: "    cd /Users/kristjanjansen/projects",delay: 30 },
  { message: "    prisma2 dev",delay: 30 },
  { message: " ",delay: 30 },
  { message: "🍺 Your project is ready", delay: 200 }
];

const ConnectDb: FC<{
  onPrev?: Function;
  onNext?: Function;
  onLog?: Function;
}> = ({ onPrev = () => null, onNext = () => null, onLog = () => null }) => {
  useEffect(() => {
    onLog(log);
  }, []);

  return (
    <CardContainer>
      <DialogHeader>Your project is ready</DialogHeader>
      <DialogBody>
        <ol style={{ margin: 0, padding: "0 24px" }}>
          <li>
            <p>
              Navigate into the project directory and start Prisma Studio to
              watch schema.prisma for changes
            </p>
            <CodeContainer copy>
              {"cd /Users/kristjanjansen/projects\nprisma2 dev"}
            </CodeContainer>
          </li>
          <li>
            <p>
              Start the GraphQL server <b>in a new terminal window/tab</b>:
            </p>
            <CodeContainer copy>
              {"cd /Users/kristjanjansen/projects\nyarn start"}
            </CodeContainer>
          </li>
        </ol>
        <p style={{ marginLeft: "20px", opacity: 0.5 }}>
          Explore sample operations and evolve the project:
          <br />
          <a href="https://github.com/prisma/prisma2" target="_blank">
            https://github.com/prisma/prisma2
          </a>
        </p>
      </DialogBody>
      <DialogFooter></DialogFooter>
    </CardContainer>
  );
};

export default ConnectDb;
