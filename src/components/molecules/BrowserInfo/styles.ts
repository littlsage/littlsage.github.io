import { isSafari } from "@app/helpers/browser/isSafari";
import { IThemeClasses, TMediaQuery } from "@app/types/theme";

export const browserInfoDefaultThemeClasses: IThemeClasses = {
  height: "h-100%",
  padding: "p-[1.25vh]",
  width: "w-100%",
};

export const browserInfoOuterContainerDefaultThemeClasses: IThemeClasses = {
  height: "h-100%",
};

export const browserInfoInnerContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-row-wrap",
  height: "h-100%",
  justifyContent: "justify-between",
};

export const browserInfoIconWrapperDefaultThemeClasses: IThemeClasses = {
  display: isSafari() ? "flex" : "block",
  flex: "flex-[0_1_28%]",
  height: "h-50%",
  justifyContent: isSafari() ? "justify-center" : undefined,
  overflow: isSafari() ? "overflow-hidden" : "overflow-visible",
  paddingY: "py-[4.8%]",
};

export const browserInfoIconDefaultThemeClasses: IThemeClasses = {
  height: isSafari() ? "h-[4vh]" : "h-100%",
  overflow: isSafari() ? "overflow-hidden" : "overflow-visible",
  pseudoClasses: [
    "childrenSvg:animate-glow-verySlow",
    "childrenSvg:duration-slow",
  ],
  width: isSafari() ? "w-[4vh]" : "w-100%",
};

export const browserInfoIconWrapperActiveIconDefaultThemeClasses: TMediaQuery[] =
  [
    "screenMaxHeight640:block",
    "screenMaxHeight640:h-100%",
    "screenMaxHeight640:mx-auto",
    "screenMaxHeight640:my-0",
  ];

export const browserInfoIconWrapperInactiveIconDefaultThemeClasses: TMediaQuery[] =
  ["screenMaxHeight640:hidden"];
