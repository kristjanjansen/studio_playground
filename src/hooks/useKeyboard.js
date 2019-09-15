import { useState, useEffect } from "react";

export default function useKeyboard(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(!keyPressed);
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
}
