"use client";
import React from "react";
import {
  IIconStaticProps,
  IconStaticVariant,
} from "@app/components/atoms/IconStatic/@types/IconStatic";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { useIconStaticThemeClasses } from "@app/components/atoms/IconStatic/hooks/useIconStaticThemeClasses";
import { iconStaticIcons } from "@app/components/atoms/IconStatic/config";
import { TSVGIcon } from "@app/types/svg";

const IconStatic: React.FC<IIconStaticProps> = ({
  iconName,
  style,
  themeClasses,
  variant = IconStaticVariant.Default,
}) => {
  const { iconStaticThemeClasses } = useIconStaticThemeClasses({
    themeClasses,
    variant,
  });

  const IconComponent: TSVGIcon = iconStaticIcons[iconName];

  return (
    <IconComponent
      className={convertObjectValuesToString(iconStaticThemeClasses)}
      style={style}
    />
  );
};
export { IconStatic };
