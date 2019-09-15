import React, { FC } from "react";

const TableHeaderCell: FC<{ data?: any }> = ({ data = null }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "8px 12px",
        borderBottom: "1px solid var(--separator-color)"
      }}
    >
      <div
        style={{
          background: "var(--databrowser-background)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "16px",
          height: "16px",
          flex: "0 0 16px",
          borderRadius: "4px",
          marginRight: "5px",
          fontWeight: 'bold',
          fontSize: '11px',
          color: 'var(--icon-color)'
        }}
      >
        A
      </div>
      <div
        style={{
          fontSize: "12px",
          fontFamily: "var(--font-family--code)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }}
      >
        {data}
      </div>
    </div>
  );
};

export default TableHeaderCell;
