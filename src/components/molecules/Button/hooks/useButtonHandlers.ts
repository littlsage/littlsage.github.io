"use client";
import { IButtonProps } from "@app/components/molecules/Button/@types/Button";
import { useCallback, useState } from "react";
import { isMobile } from "react-device-detect";

const useButtonHandlers = ({ onClick }: Pick<IButtonProps, "onClick">) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    switch (event?.key) {
      case "Enter":
      case "Space":
        onClick && onClick();
        break;
    }
  };

  const handleMouseEnter = (): void => {
    !isMobile && setIsActive(true);
  };

  const handleMouseLeave = (): void => {
    !isMobile && setIsActive(false);
  };

  const handleButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      !isMobile && setIsActive(false);
      event.preventDefault();

      onClick?.();
    },
    [onClick, setIsActive],
  );

  return {
    handleButtonClick,
    handleKeyUp,
    handleMouseEnter,
    handleMouseLeave,
    isActive,
  };
};

export { useButtonHandlers };
