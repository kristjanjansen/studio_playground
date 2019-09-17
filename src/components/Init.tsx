import React, { FC, useState } from "react";

import CardContainer from "./CardContainer";
import InitHeader from "./InitHeader";
import InitMain from "./InitMain";
import InitFooter from "./InitFooter";
import CardButton from "./CardButton";
import Progressbar from "./Progressbar";
import CheckboxIcon from "./CheckboxIcon";
import MysqlIcon from "./MysqlIcon";
import MongoIcon from "./MongoIcon";
import PostgresIcon from "./PostgresIcon";
import SqliteIcon from "./SqliteIcon";

import useInterval from "../hooks/useInterval";

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
  // let [count, setCount] = useState(0);

  // useInterval(() => {
  //   if (count < 100) {
  //     setCount(count + 1);
  //   }
  // }, 500);

  // {/* <Progressbar value={count} /> */}

  return (
    <CardContainer>
      <InitHeader>Hello</InitHeader>
      <InitMain>
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
            <CardButton key={i} title={title} subtitle={subtitle} icon={icon} />
          ))}
        </div>
      </InitMain>
      <InitFooter onPrev={() => console.log("prev")} onNext={() => console.log("next")} />
    </CardContainer>
  );
};

export default Init;
