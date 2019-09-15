import React, { FC, useState, useEffect } from "react";
import useKeyboard from "../hooks/useKeyboard";

const Variables: FC = () => {
  const [variables, setVariables] = useState({
    "--font-size": { value: 14, min: 8, max: 24 },
    "--font-size-small": { value: 12, min: 8, max: 24 },
    "--border-radius": { value: 14, min: 0, max: 24 }
  });
  useEffect(() => {
    Object.entries(variables).forEach(([key, settings]) => {
      document.documentElement.style.setProperty(key, settings.value + "px");
    });
  }, [variables]);

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
      {Object.entries(variables).map(([key, settings]) => (
        <div>
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
              setVariables(prevState => {
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
