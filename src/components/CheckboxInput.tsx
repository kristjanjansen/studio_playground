import React, { FC } from "react";

const CheckboxInput: FC<{ title?: string; value?: boolean; onChange?: Function }> = ({
  title = "",
  value = false,
  onChange = () => null
}) => {
  return (
    <div style={{ display: "flex", alignItems: 'flex-start' }}>
      <input
        type="checkbox"
        checked={value}
        style={{
          marginRight: "8px"
        }}
        onChange={e => onChange(e.target.checked)}
      />
        <div
          style={{
            fontSize: "var(--font-size-small)",
            color: "var(--primary-color)",
            marginBottom: "4px",
            flex: 1
          }}
        >
          {title}
        </div>
    </div>
  );
};

export default CheckboxInput;
