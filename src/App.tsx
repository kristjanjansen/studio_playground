import React, { FC, useState, useEffect } from "react";
import CardContainer from "./components/CardContainer";
import DatabrowserContainer from "./components/DatabrowserContainer";
import DatabrowserHeader from "./components/DatabrowserHeader";
import Details from "./components/Details";
import Header from "./components/Header";
import Table from "./components/Table";
import TableHeader from "./components/TableHeader";
import Toolbar from "./components/Toolbar";
import Variables from "./components/Variables";

import './App.css';

import { randomid } from "./utils";

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
    <div style={{ width: "100%", position: 'relative' }}>
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
      <Variables
        variables={{
          "--font-size": { value: 14, min: 8, max: 24 },
          "--font-size-small": { value: 12, min: 8, max: 24 },
          "--card-radius": { value: 8, min: 0, max: 24 },
          "--shadow-blur": { value: 4, min: 0, max: 8 }
        }}
      />
    </div>
  );
};

export default Loader;
