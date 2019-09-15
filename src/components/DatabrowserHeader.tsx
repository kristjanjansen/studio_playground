import React, { FC } from "react";

import Button from "./Button";
import DatabrowserButton from "./DatabrowserButton";
import FilterIcon from "./FilterIcon";

const DatabrowserHeader: FC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <div style={{ display: "flex" }}>
      <DatabrowserButton>
        <FilterIcon />
      </DatabrowserButton>
      {[
        "User",
        "0 Filters",
        "All Fields",
        "Sort by id",
        "Showing 2 of ∞",
        "as Table"
      ].map((b, i) => (
        <DatabrowserButton key={i}>{ b }</DatabrowserButton>
      ))}
    </div>
    <div style={{ display: "flex" }}>
      <Button>Add record</Button> <Button>Run</Button>
    </div>
  </div>
);

export default DatabrowserHeader;
