"use client";
import React from "react";

import { NavItem } from "@app/components/molecules/NavItem/NavItem";
import {
  INavItemProps,
  NavItemPosition,
} from "@app/components/molecules/NavItem/@types/NavItem";

import { INavProps } from "@app/components/molecules/Nav/@types/Nav";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { useNavState } from "@app/components/molecules/Nav/hooks/useNavState";
import { IThemeClasses } from "@app/types/theme";
import { navDefaultThemeClasses } from "@app/components/molecules/Nav/styles";

const Nav: React.FC<INavProps> = ({
  navItems,
  position = NavItemPosition.Horizontal,
}) => {
  const { activeNavItem } = useNavState({ navItems });

  const navThemeClasses: IThemeClasses = {
    ...navDefaultThemeClasses,
    alignItems:
      position === NavItemPosition.Horizontal ? "items-center" : "items-end",
    flexFlow:
      position === NavItemPosition.Horizontal
        ? "flex-row-nowrap"
        : "flex-col-nowrap",
  };

  return (
    <LayoutContainer as="nav" themeClasses={navThemeClasses}>
      {navItems.map(
        ({ href, title }: INavItemProps, index: number): JSX.Element => (
          <NavItem
            key={index}
            href={href}
            isActive={activeNavItem === href}
            position={position}
            tabIndex={0}
            title={title}
          />
        ),
      )}
    </LayoutContainer>
  );
};

export { Nav };
