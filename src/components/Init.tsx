import React, { FC, useState } from "react";

import CardContainer from "./CardContainer";
import InitHeader from "./InitHeader";
import InitFooter from "./InitFooter";
import CardButton from "./CardButton";
import Progressbar from "./Progressbar";
import MysqlIcon from "./MysqlIcon";
import MongoIcon from "./MongoIcon";
import PostgresIcon from "./PostgresIcon";
import SqliteIcon from "./SqliteIcon";

import useInterval from "../hooks/useInterval";
import CheckboxIcon from "./CheckboxIcon";

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
        <InitFooter>
          {/* <Progressbar value={count} /> */}
          <CheckboxIcon checked={false} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gridGap: "8px",
              height: "100%"
            }}
          >
            <CardButton icon={<MysqlIcon />} subtitle="Requires a running PostgreSQL database">
              a
            </CardButton>
            <CardButton icon={<PostgresIcon />} subtitle="Requires a running PostgreSQL database">a</CardButton>
            <CardButton icon={<SqliteIcon />} subtitle="Requires a running PostgreSQL database">a</CardButton>
            <CardButton icon={<MongoIcon />} subtitle="Requires a running PostgreSQL database">a</CardButton>
          </div>
        </InitFooter>
      </CardContainer>
    </div>
  );
};

export default Init;
