import React, { FC } from "react";

const PlaceholderIcon: FC = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
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
