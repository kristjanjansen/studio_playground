import React, { FC, useState, useEffect } from "react";
import useKeyboard from "../hooks/useKeyboard";

const Variables: FC = () => {
  const [variables, setVariables] = useState({
    "--font-size": 14,
    "--font-size-small": 12,
    "--border-radius": 12
  });
  useEffect(() => {
    Object.entries(variables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value + "px");
    });
  }, [variables]);

  const pressed = useKeyboard("v");

  return (
    <div
      style={{
        display: pressed ? "block" : "none",
        position: "fixed",
        bottom: "10px",
        right: "10px",
        width: "250px",
        background: "var(--gray-900)",
        opacity: 0.75,
        color: "var(--gray-200)",
        padding: "10px",
        borderRadius: "4px"
      }}
    >
      {Object.entries(variables).map(([key, value]) => (
        <div>
          <div
            style={{
              fontSize: "12px",
              paddingBottom: "10px",
              fontFamily: "var(--font-family--code)"
            }}
          >
            {key} = {value}px
          </div>
          <input
            type="range"
            min="8"
            max="24"
            value={value}
            onChange={e => {
              const val = e.target.value;
              setVariables(prevState => {
                return { ...prevState, [key]: val };
              });
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Variables;
