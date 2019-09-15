import React, { FC } from "react";
import TableRow from "./TableRow";

const Table: FC<{ data?: Object[] }> = ({ data = [] }) => {
  return (
    <div style={{ overflow: "scroll", height: "100%" }}>
      {data.map((row, i) => (
        <TableRow key={i} data={Object.values(row)} />
      ))}
    </div>
  );
};

export default Table;
