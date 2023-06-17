"use client";
import { useState, useRef } from "react";

import { useShuffleText } from "@app/hooks/useShuffleText";
import { useInterval } from "@app/hooks/useInterval";

import { ITypographyProps } from "@app/components/atoms/Typography/@types/Typography";
import { IShuffleState } from "@app/hooks/@types/useShuffleText";
import { theme } from "@app/theme/theme";

const useTypographyState = ({
  children,
  shouldShuffle,
  shouldShuffleOnHover,
  shuffleDelay,
  shuffleInterval = parseInt(
    theme.transitionDuration.verySlow.replace("ms", ""),
  ),
}: Pick<
  ITypographyProps,
  | "children"
  | "shouldShuffle"
  | "shouldShuffleOnHover"
  | "shuffleDelay"
  | "shuffleInterval"
>) => {
  const [shuffleText, setShuffleText] = useState<IShuffleState | undefined>();
  const textElementRef = useRef<HTMLDivElement>(null);

  useShuffleText({
    onShuffleReady: setShuffleText,
    ref: textElementRef,
    shouldInitialize: shouldShuffleOnHover || shouldShuffle,
    shuffleDelay,
    shuffleState: shuffleText,
    text: children,
  });

  useInterval(() => {
    if (!textElementRef.current || !shouldShuffle) {
      return;
    }
    shuffleText && shuffleText.start();
  }, shuffleInterval);

  const handleMouseOver = () => {
    if (!textElementRef.current || !shouldShuffleOnHover) {
      return;
    }

    shuffleText && shuffleText.start();
  };

  return {
    handleMouseOver,
    textElementRef,
  };
};

export { useTypographyState };
