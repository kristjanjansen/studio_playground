import React, { FC, useState } from "react";
import CodeContainer from "./CodeContainer";

const random = () => Math.random() > 0.5

const Log: FC<{ items?: [] }> = ({ items = [] }) => {
  let [open, setOpen] = useState(false)
  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        bottom: 0,
        left: 0,
        boxShadow: "inset var(--shadow-color) 0px 2px var(--shadow-blur)",
        overflow: "hidden",
        opacity: 0.9,
        height: open ? '200px' : '40px',
        cursor: 'pointer'
      }}
      onClick={ () => setOpen(!open) }
    >
      <CodeContainer embedded>
        {Array.from({ length: 20 }).map(_ => `Some sort of log message`).slice(0, open ? 20 : 1).join('\n')}
      </CodeContainer>
    </div>
  );
};

export default Log;
