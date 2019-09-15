import React, { FC, useState, useEffect } from "react";

const Counter: FC = () => {
  const [slider, setSlider] = useState(14);
  useEffect(() => {
    document.documentElement.style.setProperty(
      `--font-size`,
      slider + "px"
    );
  }, [slider]);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: "250px",
        background: "var(--gray-900)",
        opacity: 0.75,
        color: "var(--gray-200)",
        padding: "10px"
      }}
    >
      <div
        style={{
          fontSize: "12px",
          paddingBottom: "10px",
          fontFamily: "var(--font-family--code)"
        }}
      >
        var(--font-size) = {slider}
      </div>
      <input
        type="range"
        min="10"
        max="20"
        value={slider}
        onChange={el => setSlider(parseFloat(el.target.value))}
      />
    </div>
  );
};

export default Counter;
