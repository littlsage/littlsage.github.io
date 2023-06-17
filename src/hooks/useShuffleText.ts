import React, { ReactElement, useEffect } from "react";
import ShuffleText, { ShuffleTextType } from "shuffle-text";

import { IUseShuffleTextArgs } from "@app/hooks/@types/useShuffleText";

const useShuffleText = ({
  duration = 600,
  onShuffleReady,
  ref,
  shouldInitialize = true,
  shuffleDelay = 0,
  shuffleState,
  text,
}: IUseShuffleTextArgs): void => {
  useEffect(() => {
    if (!ref.current || shuffleState || !shouldInitialize || !window) {
      return;
    }

    const shuffle: ShuffleTextType | null = new ShuffleText(ref.current);

    if (!shuffle) {
      return;
    }

    if (typeof text === "string" || typeof text === "number") {
      shuffle.setText(String(text));
    } else if (React.isValidElement(text)) {
      const { props } = text as ReactElement;

      shuffle.setText(String(props.children));
    }

    shuffle.duration = duration;

    const startShuffle = () => setTimeout(() => shuffle.start(), shuffleDelay);

    onShuffleReady({
      start: startShuffle,
    });

    return () => {
      clearTimeout(startShuffle());
    };
  }, [
    duration,
    onShuffleReady,
    ref,
    text,
    shuffleState,
    shouldInitialize,
    shuffleDelay,
  ]);
};

export { useShuffleText };
