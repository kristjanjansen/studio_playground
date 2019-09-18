import React, { FC } from "react";

const CardContainer: FC<{ children?: any }> = ({ children = null }) => (

    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </div>
);

export default CardContainer;
