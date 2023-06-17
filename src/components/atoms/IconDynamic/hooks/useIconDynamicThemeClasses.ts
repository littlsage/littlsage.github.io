import { IIconDynamicProps } from "@app/components/atoms/IconDynamic/@types/IconDynamic";
import { iconDynamicDefaultThemeClasses } from "@app/components/atoms/IconDynamic/styles";
import { IThemeClasses, TPseudoClasses } from "@app/types/theme";
import omit from "lodash/omit";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const useIconDynamicThemeClasses = ({
  isActive,
  isHeightResponsive,
  isResponsive,
  shouldDisplayGlowAnimation,
  shouldGlow,
  shouldGlowOnHover,
  themeClasses,
}: Pick<
  IIconDynamicProps,
  | "isActive"
  | "isHeightResponsive"
  | "isResponsive"
  | "shouldDisplayGlowAnimation"
  | "shouldGlow"
  | "shouldGlowOnHover"
  | "themeClasses"
>) => {
  const iconDynamicBaseThemeClasses: IThemeClasses = {
    ...iconDynamicDefaultThemeClasses,
    ...themeClasses,
  };

  const iconDynamicThemeClasses: IIconDynamicProps["themeClasses"] = {
    ...omit(iconDynamicBaseThemeClasses, "pseudoClasses"),
    pseudoClasses: [
      ...(isResponsive || isHeightResponsive
        ? ["childrenSvg:h-full"]
        : ["childrenSvg:h-auto"]),
      ...(isResponsive && !isHeightResponsive
        ? ["childrenSvg:w-full"]
        : ["childrenSvg:w-auto"]),
      ...(isActive
        ? ["childrenMask:fill-blue300", "childrenPath:fill-blue300"]
        : []),
      ...(shouldDisplayGlowAnimation
        ? [
            iconDynamicBaseThemeClasses?.pseudoClasses?.find((pseudoClass) =>
              pseudoClass.includes("animate-"),
            ),
          ]
        : []),
      ...(shouldGlow ? ["childrenSvg:drop-shadow-lg"] : []),
      ...(shouldGlowOnHover
        ? [
            "childrenSvg:transition-all",
            "childrenSvg:ease-in-out",
            iconDynamicBaseThemeClasses?.pseudoClasses?.find((pseudoClass) =>
              pseudoClass.includes("duration-"),
            ),
            "childrenSvg:hover:drop-shadow-lg",
            "childrenSvg:focus:drop-shadow-lg",
            "childrenSvg:active:drop-shadow-lg",
          ]
        : []),
    ] as TPseudoClasses,
  };

  const iconDynamicWrapperClassName = iconDynamicThemeClasses
    ? convertObjectValuesToString(iconDynamicThemeClasses)
    : "";

  const iconDynamicClassName =
    iconDynamicBaseThemeClasses?.pseudoClasses?.find((pseudoClass) =>
      pseudoClass.includes("fill-"),
    ) || "";

  return {
    iconDynamicClassName,
    iconDynamicWrapperClassName,
  };
};

export { useIconDynamicThemeClasses };
