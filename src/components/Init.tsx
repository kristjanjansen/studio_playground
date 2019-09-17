import React, { FC, useState } from "react";

import CardContainer from "./CardContainer";
import InitHeader from "./InitHeader";
import InitMain from "./InitMain";
import CardButton from "./CardButton";
import Progressbar from "./Progressbar";
import MysqlIcon from "./MysqlIcon";
import MongoIcon from "./MongoIcon";
import PostgresIcon from "./PostgresIcon";
import SqliteIcon from "./SqliteIcon";

import useInterval from "../hooks/useInterval";
import CheckboxIcon from "./CheckboxIcon";

const options = [
  {
    title: "PostgreSQL",
    icon: <PostgresIcon />,
    subtitle: "Requires a running PostgreSQL database"
  },
  {
    title: "MySQL",
    icon: <MysqlIcon />,
    subtitle: "Requires a running MySQL database"
  },
  {
    title: "SQLite",
    icon: <MysqlIcon />,
    subtitle: "Easiest to set up"
  },
  {
    title: "MongoDB",
    icon: <MongoIcon />,
    subtitle: "Coming soon"
  }
];

const Init: FC = () => {
  let [count, setCount] = useState(0);

  useInterval(() => {
    if (count < 100) {
      setCount(count + 1);
    }
  }, 500);

  return (
    <div
      style={{
        width: "500px",
        height: "400px"
      }}
    >
      <CardContainer>
        <InitHeader>Hello</InitHeader>
        <InitMain>
          {/* <Progressbar value={count} /> */}
          {/* <CheckboxIcon checked={false} /> */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gridGap: "8px",
              height: "100%"
            }}
          >
            {options.map(({ title, subtitle, icon }, i) => (
              <CardButton
                key={i}
                title={title}
                subtitle={subtitle}
                icon={icon}
              />
            ))}
          </div>
        </InitMain>
      </CardContainer>
    </div>
  );
};

export default Init;
