"use client";
import React from "react";

import { Line } from "@app/components/atoms/Line/Line";
import { INavItemProps } from "@app/components/molecules/NavItem/@types/NavItem";
import { LineDirection } from "@app/components/atoms/Line/@types/Line";
import { useNavItemState } from "@app/components/molecules/NavItem/hooks/useNavItemState";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { useNavItemThemeClasses } from "@app/components/molecules/NavItem/hooks/useNavItemThemeClasses";

const NavItem: React.FC<INavItemProps> = ({
  href,
  isActive = false,
  position,
  tabIndex,
  title,
}) => {
  const { handleClick, handleMouseOver, navItemElementRef } = useNavItemState({
    href,
    title,
  });

  const { navItemLinkThemeClasses, navItemThemeClasses } =
    useNavItemThemeClasses({
      isActive,
      position,
    });

  return (
    <LayoutContainer
      onFocus={handleClick}
      tabIndex={tabIndex}
      themeClasses={navItemThemeClasses}
    >
      <a
        className={convertObjectValuesToString(navItemLinkThemeClasses)}
        data-id={title}
        onMouseUp={handleClick}
        onMouseOver={handleMouseOver}
        ref={navItemElementRef}
      >
        {title}
      </a>

      <Line direction={LineDirection.Left} isActive={isActive} />
      <Line direction={LineDirection.Right} isActive={isActive} />
    </LayoutContainer>
  );
};

export { NavItem };
