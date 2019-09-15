import React, { FC, useState, useEffect } from "react";
import useKeyboard from "../hooks/useKeyboard";

const Variables: FC = () => {
  const [fontSize, setFontSize] = useState(14);
  const [fontSizeSmall, setFontSizeSmall] = useState(12);
  useEffect(() => {
    document.documentElement.style.setProperty(`--font-size`, fontSize + "px");
    document.documentElement.style.setProperty(`--font-size-small`, fontSizeSmall + "px");
  }, [fontSize, fontSizeSmall]);

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
      <div
        style={{
          fontSize: "12px",
          paddingBottom: "10px",
          fontFamily: "var(--font-family--code)"
        }}
      >
        var(--font-size) = {fontSize}px
      </div>
      <input
        type="range"
        min="8"
        max="24"
        value={fontSize}
        onChange={el => setFontSize(parseFloat(el.target.value))}
      />
      <div
        style={{
          fontSize: "12px",
          paddingBottom: "10px",
          fontFamily: "var(--font-family--code)"
        }}
      >
        var(--font-size-small) = {fontSizeSmall}px
      </div>
      <input
        type="range"
        min="8"
        max="24"
        value={fontSizeSmall}
        onChange={el => setFontSizeSmall(parseFloat(el.target.value))}
      />
    </div>
  );
};

export default Variables;
