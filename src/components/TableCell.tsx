import React, { FC } from "react";

const TableCell: FC<{ data?: any }> = ({ data = null }) => {
  return (
    <div
      style={{
        fontFamily: "var(--font-family--code)",
        padding: "4px 12px",
        borderBottom: "1px solid var(--separator-color)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {typeof data == "object" ? "Object" : String(data).slice(0,30)}
    </div>
  );
};

export default TableCell;
