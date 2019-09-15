import React, { FC, useState } from "react";
import TableCell from "./TableCell";

const TableRow: FC<{ data?: any }> = ({ data = [] }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ display: "flex" }} onClick={() => setSelected(!selected)}>
      {data.map((cell: any, i: number) => (
        <div
          key={i}
          style={{
            flex: 1,
            background: selected ? "var(--active-item-background-color)" : "",
            color: selected ? "var(--active-item-color)" : ""
          }}
        >
          <TableCell data={cell} />
        </div>
      ))}
    </div>
  );
};

export default TableRow;
