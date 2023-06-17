"use client";
import { animatedCode } from "@app/components/molecules/TypingAnimation/config";
import { useInterval } from "@app/hooks/useInterval";
import { useRef } from "react";

export const useTypingAnimationState = () => {
  const codeContainerRef = useRef<HTMLDivElement>(null);
  const currentChar = useRef<number>(0);

  const updateText = (): void => {
    if (!codeContainerRef.current) {
      return;
    }

    if (currentChar.current <= animatedCode.length) {
      codeContainerRef.current.innerHTML += animatedCode.charAt(
        currentChar.current,
      );

      currentChar.current++;
    } else {
      codeContainerRef.current.innerHTML = "";

      currentChar.current = 0;
    }
  };

  useInterval(() => {
    updateText();
  }, 50);

  return { codeContainerRef };
};
