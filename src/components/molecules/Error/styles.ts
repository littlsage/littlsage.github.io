import { IThemeClasses } from "@app/types/theme";

export const errorDefaultThemeClasses: IThemeClasses = {
  height: "h-100%",
  padding: "p-8",
};

export const errorContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-col-nowrap",
  height: "h-100%",
  justifyContent: "justify-center",
};

export const errorIconDefaultThemeClasses: IThemeClasses = {
  height: "h-100",
  minHeight: "min-h-100",
  pseudoClasses: ["childrenSvg:animate-glow-verySlow"],
};

export const errorTitleDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-24",
  fontWeight: "font-bold",
  lineHeight: "leading-24",
  paddingTop: "pt-12",
  textTransform: "uppercase",
};

export const errorDescriptionDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-24",
  lineHeight: "leading-24",
  paddingTop: "pt-12",
  textTransform: "uppercase",
};
