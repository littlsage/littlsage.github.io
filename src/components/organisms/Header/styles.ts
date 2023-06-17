import { IThemeClasses } from "@app/types/theme";

export const headerContainerDefaultThemeClasses: IThemeClasses = {
  left: "left-0",
  position: "fixed",
  right: "right-0",
  top: "top-0",
  zIndex: "z-400",
};

export const headerOuterWrapperDefaultThemeClasses: IThemeClasses = {
  backgroundColor: "bg-blue600/75",
  borderBottomColor: "border-b-blue300/50",
  borderStyle: "border-solid",
  borderWidth: "border-b-1",
  height: "h-96",
};

export const headerInnerWrapperDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  flexFlow: "flex-row-nowrap",
  justifyContent: "justify-center",
};

export const headerOuterContainerDefaultThemeClasses: IThemeClasses = {
  maxWidth: "max-w-screenXl",
  paddingBottom: "pb-24",
  paddingLeft: "pl-48",
  paddingRight: "pr-48",
  paddingTop: "pt-24",
  width: "w-full",
};

export const headerInnerContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  height: "h-48",
  justifyContent: "justify-between",
};

export const headerLinkWithImageDefaultThemeClasses: IThemeClasses = {
  height: "h-48",
  width: "w-248",
};

export const headerMobileLinkWithImageDefaultThemeClasses: IThemeClasses = {
  width: "w-64",
};
