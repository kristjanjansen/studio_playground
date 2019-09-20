import React, { FC } from "react";

const TextInput: FC<{ title?: string; value?: any; onChange?: Function }> = ({
  title = "",
  value = "",
  onChange = () => null
}) => {
  return (
    <div>
      {title && (
        <div
          style={{
            fontSize: "var(--font-size-small)",
            color: "var(--primary-color)",
            marginBottom: '4px'
          }}
        >
          {title}
        </div>
      )}
      <input
        type="text"
        value={value}
        style={{
          border: "none",
          background: "white",
          height: "30px",
          borderRadius: "4px",
          backgroundColor: "var(--input-background-color)",
          color: "var(--input-text-color)",
          padding: "0 12px",
          fontFamily: "var(--font-family)",
          fontSize: "var(--font-size)",
          outline: "none",
          width: '100%'
        }}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
