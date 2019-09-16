import React, { FC } from "react";

import Button from "./Button";
import DatabrowserButton from "./DatabrowserButton";
import FilterIcon from "./FilterIcon";
import DatabrowserModal from "./DatabrowserModal";

const buttons = [
  { title: <FilterIcon />, content: 'Filters\nCode' },
  { title: "User", content: 'Search\nUser' },
  { title: "0 Filters", content: 'Add a filter' },
  { title: "All Fields", content: 'Search\n✔ id\n✔ name\n✔ email' },
  { title: "Sort by id", content: 'Search\nid\nname\nemail' },
  { title: "Showing 2 of ∞", content: '100 and skip 0' },
  { title: "as Table", content: `Tree\nTable` }
];

const DatabrowserHeader: FC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <div style={{ display: "flex" }}>
      {buttons.map(({ title, content }, i) => (
        <DatabrowserButton
          key={i}
          modal={<DatabrowserModal>{ content }</DatabrowserModal>}
        >
          {title}
        </DatabrowserButton>
      ))}
    </div>
    <div style={{ display: "flex" }}>
      <Button>Add record</Button> <Button>Run</Button>
    </div>
  </div>
);

export default DatabrowserHeader;
