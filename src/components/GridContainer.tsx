import React, { FC } from "react";

const CardContainer: FC<{ cols?: string; rows?: string; gap?: string; children?: any }> = ({
  cols = "1fr",
  rows = "auto",
  gap = "8px",
  children = null
}) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: cols,
      gridTemplateRows: rows,
      gridGap: gap,
    }}
  >
    {children}
  </div>
);

export default CardContainer;
