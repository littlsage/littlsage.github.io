import { isSafari } from "@app/helpers/browser/isSafari";
import { IThemeClasses } from "@app/types/theme";

export const largeIconDefaultThemeClasses: IThemeClasses = {
  height: "h-100%",
  padding: "p-[2vh]",
  width: "w-100%",
};

export const largeIconWrapperDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  height: "h-100%",
  justifyContent: "justify-center",
};

export const largeIconDynamicIconDefaultThemeClasses: IThemeClasses = {
  height: isSafari() ? "h-[18vh]" : "h-100%",
  pseudoClasses: ["childrenPath:fill-blue300"],
  width: isSafari() ? "w-[18vh]" : "w-[100%]",
};
