import React, { FC, useState } from "react";
import { useElementPosition } from "use-element-position";

const DatabrowserButton: FC<{ modal?: any; children?: any }> = ({
  modal = null,
  children = null
}) => {
  const [ref, { left, top }] = useElementPosition({ left: 0, top: 0 });
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div
        ref={ref}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "var(--font-size-small)",
          lineHeight: "1",
          fontWeight: "bold",
          padding: "4px 6px",
          borderRadius: "3px",
          transition: "var(--transition-normal)",
          background: visible ? "white" : "",
          marginRight: "10px"
        }}
        onClick={() => setVisible(!visible)}
      >
        {children}
      </div>
      <div
        style={{
          display: visible ? "block" : "none",
          position: "absolute",
          top: top + 25,
          left: left,
        }}
      >
        { modal }
      </div>
    </>
  );
};

export default DatabrowserButton;
