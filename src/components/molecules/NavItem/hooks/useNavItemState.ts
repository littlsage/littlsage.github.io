"use client";
import { useRef, useState } from "react";
import { useShuffleText } from "@app/hooks/useShuffleText";

import { INavItemProps } from "@app/components/molecules/NavItem/@types/NavItem";
import { IShuffleState } from "@app/hooks/@types/useShuffleText";

const useNavItemState = ({
  href,
  title,
}: Pick<INavItemProps, "href" | "title">) => {
  const [shuffleText, setShuffleText] = useState<IShuffleState | undefined>();
  const navItemElementRef = useRef<HTMLAnchorElement>(null);

  useShuffleText({
    onShuffleReady: setShuffleText,
    ref: navItemElementRef,
    shuffleState: shuffleText,
    text: title,
  });

  const handleClick = (): void => {
    const element: HTMLElement | null = document.querySelector(href);

    element && element.scrollIntoView(true);
  };

  const handleMouseOver = (): void => {
    if (navItemElementRef.current) {
      shuffleText?.start();
    }
  };

  return {
    handleClick,
    handleMouseOver,
    navItemElementRef,
  };
};

export { useNavItemState };
