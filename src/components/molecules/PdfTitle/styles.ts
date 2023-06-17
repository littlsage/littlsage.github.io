import { IThemeClasses } from "@app/types/theme";

export const pdfTitleDefaultThemeClasses: Record<
  "container" | "typography",
  IThemeClasses
> = {
  container: {
    paddingBottom: "pb-16",
    paddingTop: "pt-40",
    textAlign: "text-center",
  },
  typography: {
    color: "text-blue600",
    display: "inline-block",
    fontFamily: "font-exan",
    fontSize: "text-40",
    height: "h-44",
    lineHeight: "leading-44",
    paddingX: "px-8",
    position: "relative",
  },
};
