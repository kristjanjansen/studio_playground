import React, { FC } from "react";

const PlaceholderIcon: FC<{ size?: string }> = ({ size = "40px" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    style={{ width: size, height: size }}
  >
    <circle
      cx="10"
      cy="10"
      r="9"
      strokeWidth="1"
      stroke="var(--gray-400)"
      strokeDasharray="4 1"
      fill="none"
    />
  </svg>
);

export default PlaceholderIcon;
