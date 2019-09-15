import React, { FC, useState, useEffect } from "react";
import useKeyboard from "../hooks/useKeyboard";

const Variables: FC<{ variables?: Object }> = ({ variables = {} }) => {
  const [cssVariables, setCssVariables] = useState(variables);
  useEffect(() => {
    Object.entries(cssVariables).forEach(([key, settings]) => {
      document.documentElement.style.setProperty(key, settings.value + "px");
    });
  }, [cssVariables]);

  const pressed = useKeyboard("v");

  return (
    <div
      style={{
        display: pressed ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "250px",
        background: "var(--gray-900)",
        opacity: 0.75,
        color: "var(--gray-200)",
        padding: "10px",
        borderRadius: "4px"
      }}
    >
      {Object.entries(cssVariables).map(([key, settings],i) => (
        <div key={ i}>
          <div
            style={{
              fontSize: "12px",
              paddingBottom: "10px",
              fontFamily: "var(--font-family--code)"
            }}
          >
            {key} = {settings.value}px
          </div>
          <input
            type="range"
            min={settings.min}
            max={settings.max}
            value={settings.value}
            onChange={e => {
              const val = e.target.value;
              setCssVariables(prevState => {
                return {
                  ...prevState,
                  [key]: { ...(prevState as any)[key], value: val }
                };
              });
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Variables;
