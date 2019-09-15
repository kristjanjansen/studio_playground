import React, { FC } from "react";
import ToolbarIcon from "./ToolbarIcon";

const Toolbar: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        background: 'white',
        justifyContent: 'center',
        paddingTop: '10px',
        height: '100%',
        boxShadow: "inset var(--shadow-color) 0px 2px var(--shadow-blur)",
      }}
    >
      <ToolbarIcon />
    </div>
  );
};

export default Toolbar;

