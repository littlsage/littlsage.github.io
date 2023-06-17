import { IThemeClasses } from "@app/types/theme";

export const navItemDefaultThemeClasses: IThemeClasses = {
  position: "relative",
};

export const navItemLinkDefaultThemeClasses: IThemeClasses = {
  active: ["active:text-white", "active:drop-shadow-xl"],
  cursor: "cursor-pointer",
  display: "block",
  focus: ["focus:text-white", "focus:drop-shadow-xl"],
  fontSize: "text-28",
  height: "h-48",
  hover: ["hover:text-white", "hover:drop-shadow-xl"],
  lineHeight: "leading-48",
  position: "relative",
  textTransform: "uppercase",
  transition: "transition-all",
  transitionDuration: "duration-fast",
  transitionTiming: "ease-in-out",
  zIndex: "z-200",
};
