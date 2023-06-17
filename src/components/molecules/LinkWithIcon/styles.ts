import { IThemeClasses } from "@app/types/theme";

export const linkWithIconDefaultThemeClasses: IThemeClasses = {
  display: "block",
  height: "h-48",
  width: "w-auto",
};

export const linkWithIconDynamicIconDefaultThemeClasses: IThemeClasses = {
  height: "h-48",
  pseudoClasses: ["childrenSvg:animate-glow-slow", "childrenSvg:duration-fast"],
  width: "w-auto",
};
