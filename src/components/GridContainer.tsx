import React, { FC } from "react";

const CardContainer: FC<{ cols?: string; children?: any }> = ({
  cols = "1fr",
  children = null
}) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: cols,
      gridTemplateRows: "auto",
      gridGap: "8px",
      height: "100%"
    }}
  >
    {children}
  </div>
);

export default CardContainer;
