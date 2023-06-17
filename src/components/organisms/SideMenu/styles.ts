import { IThemeClasses } from "@app/types/theme";

export const sideMenuOuterContainerDefaultThemeClasses: IThemeClasses = {
  backgroundColor: "bg-blue600/[.875]",
  borderColor: "border-blue300/75",
  borderStyle: "border-solid",
  borderWidth: "border-l-1",
  height: "h-full",
  mediaQuery: [
    "msHighContrastNone:max-w-[300px]",
    "msHighContrastActive:max-w-[300px]",
  ],
  paddingTop: "pt-88",
  position: "fixed",
  right: "right-0",
  top: "top-0",
  transition: "transition-all",
  transitionDuration: "duration-fast",
  transitionTiming: "ease-in-out",
  zIndex: "z-1000",
};

export const sideMenuInnerContainerDefaultThemeClasses: IThemeClasses = {
  height: "h-full",
  overflow: "overflow-y-auto",
  paddingLeft: "pl-48",
  paddingRight: "pr-48",
  paddingTop: "pt-8",
};

export const sideMenuMobileNavWrapperDefaultThemeClasses: IThemeClasses = {
  marginBottom: "mb-24",
};

export const sideMenuMobileNavOuterContainerDefaultThemeClasses: IThemeClasses =
  {
    display: "flex",
    flexFlow: "flex-row-wrap",
    justifyContent: "justify-end",
  };

export const sideMenuMobileNavInnerContainerDefaultThemeClasses: IThemeClasses =
  {
    marginBottom: "mb-24",
  };

export const sideMenuCVButtonDefaultThemeClasses: IThemeClasses = {
  width: "w-full",
};

export const sideMenuDesktopNavOuterContainerDefaultThemeClasses: IThemeClasses =
  {
    marginBottom: "mb-24",
  };

export const sideMenuDesktopNavInnerContainerDefaultThemeClasses: IThemeClasses =
  {
    display: "flex",
    flexFlow: "flex-row-nowrap",
    gap: "gap-24",
  };
