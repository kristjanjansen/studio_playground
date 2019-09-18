import React, { FC, useState, useEffect, useRef } from "react";

const Log: FC<{ items?: any[] }> = ({ items = [] }) => {
  let [open, setOpen] = useState(false);
  let log = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (log.current !== null) {
      log.current.scrollIntoView();
    }
  }, [items]);

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        bottom: 0,
        left: 0,
        boxShadow: "inset var(--shadow-color) 0px 2px var(--shadow-blur)",
        overflow: "scroll",
        opacity: 0.9,
        height: open ? "200px" : "40px",
        cursor: "pointer",
        backgroundColor: "var(--blue-900)",
        fontFamily: "var(--font-family--code)",
        color: "var(--blue-100)",
        fontSize: "var(--font-size-small)",
        whiteSpace: "pre-wrap",
        padding: "12px"
      }}
      onClick={() => setOpen(!open)}
    >
      {Array.from({ length: 20 })
        .map(_ => `Some sort of log message`)
        .slice(0, open ? 20 : 1)
        .join("\n")}
      <div ref={log} />
    </div>
  );
};

export default Log;
