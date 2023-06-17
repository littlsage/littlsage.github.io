import { ILayoutContainerProps } from "@app/components/layout/LayoutContainer/@types/LayoutContainer";
import { horizontalIcons } from "@app/components/molecules/HorizontalIcons/config";
import { isSafari } from "@app/helpers/browser/isSafari";
import { IThemeClasses } from "@app/types/theme";

export const horizontalIconsDefaultThemeClasses: IThemeClasses = {
  height: "h-100%",
  padding: "p-8",
  width: "w-100%",
};

export const horizontalIconsContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  height: "h-100%",
  justifyContent: "justify-center",
};

export const horizontalIconsIconWrapperDefaultThemeClasses: IThemeClasses = {
  height: isSafari() ? "h-auto" : "h-100%",
  position: "relative",
};

export const horizontalIconsIconWrapperDefaultStyles: ILayoutContainerProps["style"] =
  {
    width: `${Number(Number(100 / horizontalIcons.length).toFixed(2))}%`,
  };

export const horizontalIconsIconDefaultThemeClasses: IThemeClasses = {
  height: isSafari() ? "h-[8vh]" : "h-100%",
  width: isSafari() ? "w-[8vh]" : "w-100%",
};
