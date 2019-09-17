import React, { FC, useState } from "react";

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
        backgroundColor: "var(--blue-900)",
        fontFamily: "var(--font-family--code)",
        color: "var(--blue-100)",
        fontSize: "var(--font-size-small)",
        padding: '12px',
        boxShadow: "inset var(--shadow-color) 0px 2px var(--shadow-blur)",
        overflow: "hidden",
        opacity: 0.9,
        whiteSpace: 'pre-wrap',
        height: open ? '200px' : '40px',
        cursor: 'pointer'
      }}
      onClick={ () => setOpen(!open) }
    >
      {Array.from({ length: 10 }).map(_ => `Test some sort of log message`).slice(0, open ? 10 : 1).join('\n')}
    </div>
  );
};

export default Log;
