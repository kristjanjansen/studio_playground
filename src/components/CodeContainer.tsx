import React, { FC, useState, useEffect } from "react";
import { useCopyToClipboard } from "react-use";
import useInterval from "../hooks/useInterval";

const CodeContainer: FC<{
  children?: any;
  embedded?: boolean;
  copy?: boolean;
}> = ({ children = null, embedded = false, copy = false }) => {
  const statuses = ["Copy", "Copied", "Error"];

  const [status, setStatus] = useState(0);

  const [
    { value, error, noUserInteraction },
    copyToClipboard
  ] = useCopyToClipboard();

  useInterval(
    () => {
      setStatus(0);
    },
    status > 0 ? 1000 : null
  );

  return (
    <div
      style={{
        backgroundColor: "var(--blue-900)",
        fontFamily: "var(--font-family--code)",
        color: "var(--blue-100)",
        fontSize: "var(--font-size-small)",
        whiteSpace: "pre-wrap",
        padding: "10px",
        borderRadius: embedded ? "" : "var(--card-radius-small)",
        position: "relative"
      }}
    >
      {children}
      {copy && (
        <div
          style={{
            position: "absolute",
            top: "6px",
            right: "8px",
            bottom: "4px",
            fontSize: "9px",
            color: "white",
            textTransform: "uppercase",
            opacity: 0.5,
            cursor: "pointer"
          }}
          onClick={() => {
            copyToClipboard(`${children}\n\n`);
            setStatus(1);
          }}
        >
          {statuses[status]}
        </div>
      )}
    </div>
  );
};

export default CodeContainer;
