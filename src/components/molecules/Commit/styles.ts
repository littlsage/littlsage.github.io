import { IThemeClasses } from "@app/types/theme";

export const commitDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  borderTopColor: "border-t-blue400",
  borderWidth: "border-t-thin",
  display: "hidden",
  mediaQuery: [
    "screenHeight800:h-[2.26vh]",
    "screenHeight800:[&:nth-child(-n+10)]:flex",
    "screenHeight401/799:h-[4.52vh]",
    "screenHeight401/799:[&:nth-child(-n+5)]:flex",
    "screenMaxHeight400:h-[7.53vh]",
    "screenMaxHeight400:[&:nth-child(-n+3)]:flex",
  ],
  pseudoClasses: ["first:border-t-0"],
  width: "w-100%",
};

export const commitOuterContainerDefaultThemeClasses: IThemeClasses = {
  paddingY: "py-4",
  width: "w-100%",
};

export const commitInnerContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  justifyContent: "justify-between",
};

export const commitShaContainerDefaultThemeClasses: IThemeClasses = {
  flex: "flex-[0_0_61%]",
  overflow: "overflow-hidden",
};

export const commitShaDefaultThemeClasses: IThemeClasses = {
  color: "text-blue100",
  fontSize: "text-8",
  textTransform: "uppercase",
};

export const commitDateContainerDefaultThemeClasses: IThemeClasses = {
  flex: "flex-[0_0_29%]",
};

export const commitDateDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-8",
};
