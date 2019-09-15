import React, { FC } from "react";
import TableHeaderCell from "./TableHeaderCell";

const TableHeader: FC<{ data?: Object[] }> = ({ data = [] }) => (
  <div style={{ display: "flex" }}>
    {Object.keys(data[0] || {}).map((col, i) => (
      <div key={i} style={{ flex: 1 }}>
        <TableHeaderCell data={col} />
      </div>
    ))}
  </div>
);

export default TableHeader;
