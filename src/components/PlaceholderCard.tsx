import React, { FC } from "react";

const PlacholderContainer: FC<{ children?: any }> = ({ children = null }) => (
  <div
    style={{
      borderRadius: "var(--card-radius)",
      border: '1px dashed var(--gray-600)',
      padding: '16px',
      width: '100%',
      opacity: 0.5
    }}
  >
    {children}
  </div>
);

export default PlacholderContainer;
