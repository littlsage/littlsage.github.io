import { isSafari } from "@app/helpers/browser/isSafari";
import { IThemeClasses } from "@app/types/theme";

export const earthDefaultThemeClasses: IThemeClasses = {
  height: "h-100%",
  padding: "p-[1vh]",
  width: "w-100%",
};

export const earthImageContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  height: "h-100%",
  justifyContent: "justify-center",
};

export const earthImageDefaultThemeClasses: IThemeClasses = {
  height: isSafari() ? "h-[18vh]" : "h-100%",
  width: isSafari() ? "w-[18vh]" : "w-100%",
};
