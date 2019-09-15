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
        height: '100%'
      }}
    >
      <ToolbarIcon />
    </div>
  );
};

export default Toolbar;

