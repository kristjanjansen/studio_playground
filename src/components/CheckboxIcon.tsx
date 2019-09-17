import React, { FC } from "react";

const CheckboxIcon: FC<{ checked?: boolean }> = ({ checked = false }) => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <rect
      width="16"
      height="16"
      rx="4"
      fill={
        checked ? "var(--input-background-color--focus)" : "var(--gray-400)"
      }
    />
    {checked && (
      <path
        d="M12 5L6.5 11L4 8.27273"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    )}
  </svg>
);

export default CheckboxIcon;
