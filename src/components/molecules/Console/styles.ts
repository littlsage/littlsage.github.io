import { ITypographyProps } from "@app/components/atoms/Typography/@types/Typography";
import { IThemeClasses } from "@app/types/theme";

export const consoleMobileDefaultThemeClasses: IThemeClasses = {
  paddingTop: "pt-48",
};

export const consoleMobileConsoleTextWrapperDefaultThemeClasses: IThemeClasses =
  {
    backgroundColor: "bg-blue700/75",
    borderColor: "border-blue300",
    borderStyle: "border-solid",
    borderWidth: "border-1",
    boxShadow: "shadow-console",
    padding: "p-16",
  };

export const consoleTvDesktopAndTabletDefaultThemeClasses: IThemeClasses = {
  left: "left-0",
  position: "absolute",
  right: "right-0",
  top: "top-50%",
  translate: "translate-y-[-50%]",
  zIndex: "z-300",
};

export const consoleTvDesktopAndTabletOuterWrapperDefaultThemeClasses: IThemeClasses =
  {
    alignItems: "items-center",
    backgroundColor: "bg-blue700/75",
    borderColor: "border-blue300",
    borderStyle: "border-solid",
    borderWidth: "border-1",
    boxShadow: "shadow-console",
    display: "flex",
    height: "h-[26.6%]",
    justifyContent: "justify-center",
    mediaQuery: [
      "msHighContrastNone:after:content-['']",
      "msHighContrastNone:after:text-0",
      "msHighContrastNone:after:min-h-inherit",
      "msHighContrastActive:after:content-['']",
      "msHighContrastActive:after:text-0",
      "msHighContrastActive:after:min-h-inherit",
    ],
    minHeight: "min-h-[26.6vh]",
    paddingX: "px-[0.62vw]",
    paddingY: "py-[1.11vh]",
    position: "relative",
    width: "w-100%",
  };

export const consoleTvDesktopAndTabletInnerWrapperDefaultThemeClasses: IThemeClasses =
  {
    left: "left-0",
    position: "absolute",
    top: "top-0",
    translate: "translate-y-[-100%]",
  };

export const consoleTvDesktopAndTabletLabelDefaultThemeClasses: ITypographyProps["themeClasses"] =
  {
    fontSize: "text-12",
    lineHeight: "leading-28",
    textTransform: "uppercase",
  };
