import { IThemeClasses } from "@app/types/theme";

export const linkWithImageDefaultThemeClasses: IThemeClasses = {
  display: "block",
};

export const linkWithImageDynamicImageDefaultThemeClasses: IThemeClasses = {
  pseudoClasses: ["childrenSvg:animate-glow-slow", "childrenSvg:duration-fast"],
};
