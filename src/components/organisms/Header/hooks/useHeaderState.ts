"use client";
import { useResize } from "@app/hooks/useResize";
import { useState, useCallback } from "react";

export const useHeaderState = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const toggleMenuVisibility = useCallback((): void => {
    setIsMenuVisible((_isMenuVisible) => !_isMenuVisible);
  }, []);

  useResize({
    breakpoint: "1680px",
    callback: () => setIsMenuVisible(false),
  });

  return { isMenuVisible, toggleMenuVisibility };
};
