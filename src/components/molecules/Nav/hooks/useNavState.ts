"use client";
import { useState } from "react";
import { useIntersectionObserver } from "@app/hooks/useIntersectionObserver";

import { INavItemProps } from "@app/components/molecules/NavItem/@types/NavItem";
import { INavProps } from "@app/components/molecules/Nav/@types/Nav";

const useNavState = ({ navItems }: Pick<INavProps, "navItems">) => {
  const [activeNavItem, setActiveNavItem] = useState<INavItemProps["href"]>();

  useIntersectionObserver({
    onElementVisible: (element: string): void => setActiveNavItem(element),
    selectors: navItems.map(({ href }: INavItemProps): string => href),
  });

  return {
    activeNavItem,
  };
};

export { useNavState };
