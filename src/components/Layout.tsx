import React, { FC, useState, useEffect } from "react";
import Table from "./Table";
import CardContainer from "./CardContainer";
import TableHeader from "./TableHeader";
import DatabrowserContainer from "./DatabrowserContainer";
import Details from "./Details";
import Header from "./Header";
import Toolbar from "./Toolbar";
import Variables from "./Variables";

import { randomid } from "../utils";
import DatabrowserHeader from "./DatabrowserHeader";

const processData = (data: any) => {
  return data.map((item: any) => {
    return {
      id: randomid(),
      name: item.name,
      email: item.email
    };
  });
};

const Loader: FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data/data.json")
      .then(res => res.json())
      .then(data => setData(processData(data)));
  }, []);

  return (
    <div style={{ width: '100%'}}>
      <div style={{ height: "40px" }}>
        <Header />
      </div>
      <div
        style={{ display: "flex", height: "calc(100vh - 40px)", zIndex: -100 }}
      >
        <div
          style={{
            width: "40px",
            height: "calc(100vh - 40px)"
          }}
        >
          <Toolbar />
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <DatabrowserContainer>
            <div style={{ marginBottom: "10px" }}>
              <DatabrowserHeader />
            </div>
            <CardContainer>
              <TableHeader data={data} />
              <Table data={data} />
            </CardContainer>
          </DatabrowserContainer>
        </div>
        <div style={{ width: "300px", padding: "10px 10px 10px 0" }}>
          <CardContainer>
            <Details />
          </CardContainer>
        </div>
      </div>
      <Variables />
    </div>
  );
};

export default Loader;
